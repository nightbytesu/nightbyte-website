import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import GradientText from "@/components/GradientText";

export default function Hero() {
  return (
    <div className="relative min-h-screen h-[650px] md:h-[750px] lg:h-[850px] scale-y-105 overflow-hidden">
      <Image
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/static/hero-bg.svg"
        alt="hero-bg"
        fill
        priority
        unoptimized
      />

      <div className="flex flex-col h-full relative z-10">
        <Navbar />

        <div className="flex-1 flex flex-col justify-center pb-16 md:pb-32">
          <div className="max-w-7xl mx-auto w-full px-8">
            <div className="flex flex-col items-center max-w-full lg:max-w-4/5 mx-auto justify-center">
              <GradientText
                colors={["#D1DDFF", "#7B9EFF", "white"]}
                showBorder={false}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center leading-tight"
                textClassName="pb-3"
              >
                Découvrez nos réalisations
              </GradientText>
              <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-16 text-center max-w-4xl">
                Explorez notre portfolio de projets web et mobiles. De la
                conception à la livraison, découvrez comment nous transformons
                les idées en expériences digitales remarquables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                <Button
                  variant={"outline"}
                  className="cursor-pointer rounded-full text-base md:text-lg lg:text-xl h-10 md:h-12 px-6 md:px-8 w-full sm:w-auto"
                >
                  Voir nos modèles
                </Button>
                <Button
                  className="border border-white text-white rounded-full cursor-pointer text-base md:text-lg lg:text-xl h-10 md:h-12 px-6 md:px-8 w-full sm:w-auto"
                  style={{
                    background:
                      "linear-gradient(90.99deg, #4171F9 0.48%, #264393 99.52%)",
                  }}
                >
                  Lancer un projet{" "}
                  <MoveUpRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
