import GradientText from "@/components/GradientText";
import Navbar from "@/components/layout/Navbar";
import { PinContainer } from "@/components/ui/3d-pin";
import { realisations } from "@/constants/realisations";
import Image from "next/image";

export default function Templates() {
  return (
    <div className="">
      {/* Mobile: Clean layout without navbar duplication */}
      <div className="block md:hidden">
        <div className="py-16 px-8">
          <div className="text-center mb-16">
            <GradientText
              colors={["#D1DDFF", "#7B9EFF", "white"]}
              showBorder={false}
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              textClassName="pb-3"
            >
              Modèles de sites web
            </GradientText>
            <p className="text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed">
              Découvrez notre gamme de modèles de sites web et d'applications
              mobiles entièrement personnalisables.
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-sm mx-auto">
            {realisations.map((realisation) => (
              <PinContainer
                key={realisation.title}
                title={realisation.link}
                href={realisation.link}
              >
                <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 w-full max-w-[20rem] mx-auto h-auto min-h-[280px]">
                  <h3 className="pb-4 m-0 font-bold text-lg text-slate-100 leading-tight">
                    {realisation.title}
                  </h3>
                  <div className="text-sm m-0 p-0 font-normal mb-6 grow">
                    <span className="text-slate-400 leading-relaxed">
                      Projet web développé avec les dernières technologies
                      modernes.
                    </span>
                  </div>
                  <div className="w-full rounded-xl bg-linear-to-br from-violet-500 via-purple-500 to-blue-500 min-h-[140px]" />
                </div>
              </PinContainer>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Original design with background and navbar */}
      <div className="hidden md:block relative">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="/static/hero-bg.svg"
          alt="hero-bg"
          fill
          unoptimized
        />

        <div className="flex flex-col h-full pt-14 pb-32">
          <div className="max-w-7xl mx-auto w-full px-8">
            <Navbar />
          </div>

          <div className="space-y-6 mb-10 flex flex-col items-center justify-center mt-35 px-8">
            <GradientText
              colors={["#D1DDFF", "#7B9EFF", "white"]}
              showBorder={false}
              className="text-6xl font-bold mb-6 text-center"
              textClassName="pb-3"
            >
              Nos Réalisations
            </GradientText>
            <p className="text-lg text-center max-w-3xl">
              Découvrez nos projets réalisés pour nos clients. De l'e-commerce
              aux applications web complexes, explorez la diversité de nos
              créations digitales.
            </p>
          </div>

          <div className="mt-0">
            <div className="grid grid-cols-3 gap-8">
              {realisations.map((realisation) => (
                <PinContainer
                  key={realisation.title}
                  title={realisation.link}
                  href={realisation.link}
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-5">
                    <h3 className="max-w-xs pb-2! m-0! font-bold text-base text-slate-100">
                      {realisation.title}
                    </h3>
                    <div className="text-base m-0! p-0! font-normal">
                      <span className="text-slate-500">
                        Projet web développé avec les dernières technologies
                        modernes.
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
