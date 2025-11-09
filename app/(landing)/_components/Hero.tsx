"use client";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GradientText from "@/components/GradientText";
import useNavigate from "@/hooks/useNavigate";

export default function Hero() {
  const navigation = useNavigate();

  const handleProjectClick = () => {
    navigation("/projects");
  };

  return (
    <div className="relative min-h-screen h-screen scale-y-105 overflow-hidden">
      <Image
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/assets/hero-bg.svg"
        alt="hero-bg"
        fill
        priority
      />

      <div className="flex flex-col h-full relative z-10">
        <Navbar />
        <div className="flex-1 flex flex-col justify-center mt-24 pb-20 md:pb-40">
          <div className="max-w-6xl mx-auto w-full px-8">
            <div className="flex flex-col items-center max-w-full lg:max-w-4/5 mx-auto justify-center">
              <GradientText
                colors={["#D1DDFF", "#7B9EFF", "white"]}
                showBorder={false}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center leading-tight"
                textClassName="pb-3"
              >
                Nous concevons des expériences digitales performantes.
              </GradientText>
              <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-16 text-center max-w-4xl">
                NightByte est une agence digitale 360° spécialisée en
                développement web/mobile, design, IA et création de contenu.
                Nous unissons experts et technologies modernes pour transformer
                vos idées en produits efficaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                <Button
                  variant={"outline"}
                  className="cursor-pointer rounded-full text-base md:text-lg lg:text-xl h-10 md:h-12 px-6 md:px-8 w-full sm:w-auto"
                >
                  Découvrir nos formations
                </Button>
                <Button
                  onClick={handleProjectClick}
                  className="border border-white text-white rounded-full cursor-pointer text-base md:text-lg lg:text-xl h-10 md:h-12 px-6 md:px-12 sm:w-auto transition-all duration-300 group hover:opacity-90 w-full"
                  style={{
                    background:
                      "linear-gradient(90.99deg, #4171F9 0.48%, #264393 99.52%)",
                  }}
                >
                  Lancer un projet{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
