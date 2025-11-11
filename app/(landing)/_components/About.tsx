"use client";
import GradientText from "@/components/GradientText";
import MagicBento from "@/components/MagicBento";
import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "motion/react";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div id="a-propos" className="relative">
      <MagicBento
        textAutoHide={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
        items={[0]}
        renderItem={() => (
          <div
            className="border border-[#4172f92d] shadow-2xl flex flex-col lg:flex-row px-6 md:px-12 lg:px-16 py-8 md:py-12 rounded-2xl gap-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-center flex-col space-y-4 md:space-y-6 flex-1">
              <GradientText
                colors={["#D1DDFF", "#7B9EFF", "white"]}
                showBorder={false}
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-center lg:text-left"
                textClassName="pb-3"
              >
                À propos de Nous
              </GradientText>
              <p className="text-base md:text-lg text-center lg:text-left">
                NightByte est un collectif d'experts indépendants réunis autour
                d'une vision commune : créer des solutions digitales sur-mesure,
                modernes et évolutives. Nous combinons design, code,
                intelligence artificielle et stratégie visuelle pour accompagner
                startups, PME et créateurs vers la réussite digitale.
              </p>
            </div>

            <div className="flex flex-1 items-center justify-center lg:justify-end">
              {/* --- C'EST ICI QU'ON APPLIQUE FRAMER MOTION --- */}
              <motion.div
                className="w-3/4 lg:w-3/4 h-48 md:h-64 lg:h-72 object-contain"
                // Indique à Framer Motion de quel état il doit passer
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                variants={imageVariants}
              >
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-contain"
                  src="/assets/rocket.svg"
                  alt="Rocket"
                  priority
                />
              </motion.div>
            </div>
          </div>
        )}
      />
    </div>
  );
}
