"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  angle: number;
  distance: number;
  baseDistance: number;
  size: number;
  speed: number;
  offset: number;
  pulsePhase: number;
  opacity: number;
}

const SpaceCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });
  const particles = useRef<Particle[]>([]);
  const isHovering = useRef(false);
  const animationId = useRef<number>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    // Configuration du canvas
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Initialisation des particules
    const initParticles = () => {
      particles.current = [];
      const count = 40;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        particles.current.push({
          angle,
          distance: 0,
          baseDistance: 10 + Math.random() * 15,
          size: 1 + Math.random() * 2.5,
          speed: 0.02 + Math.random() * 0.03,
          offset: Math.random() * Math.PI * 2,
          pulsePhase: Math.random() * Math.PI * 2,
          opacity: 0.3 + Math.random() * 0.7,
        });
      }
    };
    initParticles();
    // Gère l'erreur TypeScript et la position
    const handleMouseMove = (e: MouseEvent) => {
      // TypeScript sait maintenant que 'e' a clientX et clientY.
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Gère l'erreur TypeScript et optimise la détection de survol
    // On utilise MouseEvent pour les événements du DOM
    const handleMouseOver = (e: MouseEvent) => {
      // On s'assure que la cible est un HTMLElement pour utiliser 'closest'
      const target = e.target as HTMLElement;

      // Utiliser 'closest' est la méthode la plus efficace et propre.
      // Elle remonte l'arbre DOM pour vérifier si la cible ou un parent correspond au sélecteur.
      const isInteractive = target.closest(
        'a, button, [data-cursor-pointer], input[type="submit"]'
      );

      // Mettre à jour la référence
      isHovering.current = !!isInteractive;
    };

    // Si tu dois gérer le 'mouseout' pour remettre isHovering à false, il te faudra
    // une autre fonction 'handleMouseOut' utilisant la même logique de détection inversée.

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.016;

      // Lissage du mouvement (Lerp)
      const lerp = isHovering.current ? 0.15 : 0.1;
      smoothPos.current.x += (mousePos.current.x - smoothPos.current.x) * lerp;
      smoothPos.current.y += (mousePos.current.y - smoothPos.current.y) * lerp;

      // Effacer le canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = smoothPos.current.x;
      const centerY = smoothPos.current.y;

      // Effet de traînée cosmique
      const trailLength = 8;
      for (let t = 0; t < trailLength; t++) {
        const trailAlpha = (1 - t / trailLength) * 0.15;
        const trailX =
          smoothPos.current.x +
          (mousePos.current.x - smoothPos.current.x) * (t / trailLength);
        const trailY =
          smoothPos.current.y +
          (mousePos.current.y - smoothPos.current.y) * (t / trailLength);

        ctx.beginPath();
        ctx.arc(trailX, trailY, 3 - t * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = isHovering.current
          ? `rgba(255, 100, 200, ${trailAlpha})`
          : `rgba(150, 200, 255, ${trailAlpha})`;
        ctx.fill();
      }

      // Dessin des particules
      particles.current.forEach((p, i) => {
        // Animation de l'angle
        p.angle += p.speed;

        // Effet de contraction au survol
        const targetDistance = isHovering.current
          ? p.baseDistance * 0.4
          : p.baseDistance;
        p.distance += (targetDistance - p.distance) * 0.15;

        // Effet de pulsation
        p.pulsePhase += 0.05;
        const pulse = Math.sin(p.pulsePhase) * (isHovering.current ? 8 : 3);

        // Position avec gravité orbitale
        const orbitX = Math.cos(p.angle + p.offset) * (p.distance + pulse);
        const orbitY = Math.sin(p.angle + p.offset) * (p.distance + pulse);

        const x = centerX + orbitX;
        const y = centerY + orbitY;

        // Glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.size * 4);

        if (isHovering.current) {
          // Couleurs magenta/rose cosmique
          gradient.addColorStop(0, `rgba(255, 100, 200, ${p.opacity})`);
          gradient.addColorStop(0.5, `rgba(200, 50, 150, ${p.opacity * 0.5})`);
          gradient.addColorStop(1, "rgba(255, 100, 200, 0)");
        } else {
          // Couleurs blanc froid/bleu
          gradient.addColorStop(0, `rgba(200, 220, 255, ${p.opacity})`);
          gradient.addColorStop(0.5, `rgba(150, 180, 255, ${p.opacity * 0.5})`);
          gradient.addColorStop(1, "rgba(150, 200, 255, 0)");
        }

        ctx.beginPath();
        ctx.arc(x, y, p.size * (isHovering.current ? 1.5 : 1), 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Particule centrale
        ctx.beginPath();
        ctx.arc(x, y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = isHovering.current
          ? `rgba(255, 150, 220, ${p.opacity})`
          : `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        // Lignes de constellation
        if (i < particles.current.length - 1) {
          const next = particles.current[i + 1];
          const nextX =
            centerX +
            Math.cos(next.angle + next.offset) *
              (next.distance +
                Math.sin(next.pulsePhase) * (isHovering.current ? 8 : 3));
          const nextY =
            centerY +
            Math.sin(next.angle + next.offset) *
              (next.distance +
                Math.sin(next.pulsePhase) * (isHovering.current ? 8 : 3));

          const dist = Math.hypot(nextX - x, nextY - y);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nextX, nextY);
            ctx.strokeStyle = isHovering.current
              ? `rgba(255, 100, 200, ${0.15 * (1 - dist / 60)})`
              : `rgba(150, 200, 255, ${0.1 * (1 - dist / 60)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      // Noyau central lumineux
      const coreGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        12
      );
      if (isHovering.current) {
        coreGradient.addColorStop(0, "rgba(255, 150, 220, 0.8)");
        coreGradient.addColorStop(0.3, "rgba(255, 100, 200, 0.4)");
        coreGradient.addColorStop(1, "rgba(255, 100, 200, 0)");
      } else {
        coreGradient.addColorStop(0, "rgba(255, 255, 255, 0.6)");
        coreGradient.addColorStop(0.3, "rgba(200, 220, 255, 0.3)");
        coreGradient.addColorStop(1, "rgba(150, 200, 255, 0)");
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, isHovering.current ? 8 : 6, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
        
        body {
          margin: 0;
          padding: 0;
          background: #0a0a0f;
          color: #fff;
          font-family: 'Arial', sans-serif;
          overflow-x: hidden;
        }
        
        #cosmic-canvas {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
        }
       
      `}</style>

      <canvas ref={canvasRef} id="cosmic-canvas" />
    </>
  );
};

export default SpaceCursor;
