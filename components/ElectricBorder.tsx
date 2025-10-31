import React, { CSSProperties, PropsWithChildren, useCallback, useEffect, useId, useRef, useMemo } from 'react';

type ElectricBorderProps = PropsWithChildren<{
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: CSSProperties;
}>;

// Moved outside component to avoid recreating on each render
const hexToRgba = (hex: string, alpha = 1): string => {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = '#5227FF',
  speed = 1,
  chaos = 1,
  thickness = 2,
  className,
  style
}) => {
  const rawId = useId().replace(/[:]/g, '');
  const filterId = useMemo(() => `turbulent-displace-${rawId}`, [rawId]);

  const svgRef = useRef<SVGSVGElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const strokeRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);

  const updateAnim = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const svg = svgRef.current;
    const host = rootRef.current;
    if (!svg || !host) return;

    if (strokeRef.current) {
      strokeRef.current.style.filter = `url(#${filterId})`;
    }

    const width = host.offsetWidth;
    const height = host.offsetHeight;

    const dyAnims = svg.querySelectorAll<SVGAnimateElement>('feOffset > animate[attributeName="dy"]');
    const dxAnims = svg.querySelectorAll<SVGAnimateElement>('feOffset > animate[attributeName="dx"]');

    const dur = Math.max(0.001, 6 / speed);

    dyAnims.forEach((anim, i) => {
      anim.setAttribute('values', i === 0 ? `${height}; 0` : `0; -${height}`);
      anim.setAttribute('dur', `${dur}s`);
    });

    dxAnims.forEach((anim, i) => {
      anim.setAttribute('values', i === 0 ? `${width}; 0` : `0; -${width}`);
      anim.setAttribute('dur', `${dur}s`);
    });

    const disp = svg.querySelector('feDisplacementMap');
    if (disp) disp.setAttribute('scale', String(30 * chaos));

    animationFrameRef.current = requestAnimationFrame(() => {
      [...dyAnims, ...dxAnims].forEach(a => {
        try {
          a.beginElement();
        } catch { }
      });
    });
  }, [filterId, chaos, speed]);

  useEffect(() => {
    updateAnim();
  }, [speed, chaos, updateAnim]);

  useEffect(() => {
    const ro = new ResizeObserver(() => updateAnim());
    if (rootRef.current) ro.observe(rootRef.current);

    return () => {
      ro.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateAnim]);

  const styles = useMemo(() => {
    const inheritRadius = {
      borderRadius: style?.borderRadius ?? 'inherit'
    };

    return {
      stroke: {
        ...inheritRadius,
        borderWidth: thickness,
        borderStyle: 'solid',
        borderColor: color
      },
      glow1: {
        ...inheritRadius,
        borderWidth: thickness,
        borderStyle: 'solid',
        borderColor: hexToRgba(color, 0.6),
        filter: `blur(${0.5 + thickness * 0.25}px)`,
        opacity: 0.5
      },
      glow2: {
        ...inheritRadius,
        borderWidth: thickness,
        borderStyle: 'solid',
        borderColor: color,
        filter: `blur(${2 + thickness * 0.5}px)`,
        opacity: 0.5
      },
      bgGlow: {
        ...inheritRadius,
        transform: 'scale(1.08)',
        filter: 'blur(32px)',
        opacity: 0.3,
        zIndex: -1,
        background: `linear-gradient(-30deg, ${hexToRgba(color, 0.8)}, transparent, ${color})`
      }
    };
  }, [color, thickness, style?.borderRadius]);

  return (
    <div ref={rootRef} className={`relative isolate ${className ?? ''}`} style={style}>

      <div className="absolute inset-0 pointer-events-none" style={styles.stroke}>
        <div ref={strokeRef} className="absolute inset-0 box-border" style={styles.stroke} />
        <div className="absolute inset-0 box-border" style={styles.glow1} />
        <div className="absolute inset-0 box-border" style={styles.glow2} />
        <div className="absolute inset-0" style={styles.bgGlow} />
      </div>

      <div className="relative" style={{ borderRadius: style?.borderRadius ?? 'inherit' }}>
        {children}
      </div>
    </div>
  );
};

export default React.memo(ElectricBorder);