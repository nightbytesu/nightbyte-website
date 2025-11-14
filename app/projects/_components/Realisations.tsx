import GradientText from "@/components/GradientText";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { realisations } from "@/constants/realisations";
import Image from "next/image";

export default function Realisations() {
  return (
    <div className="">
      <div className="block lg:hidden">
        <div className="py-16 px-8">
          <div className="text-center mb-16">
            <GradientText
              colors={["#D1DDFF", "#7B9EFF", "white"]}
              showBorder={false}
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              textClassName="pb-3"
            >
              Nos Réalisations
            </GradientText>
            <p className="text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed">
              Découvrez nos projets réalisés pour nos clients. De l'e-commerce
              aux applications web complexes, explorez la diversité de nos
              créations digitales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-8">
            {realisations.map((realisation) => {
              return (
                <div
                  key={realisation.title}
                  className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
                >
                  <h3 className="text-white font-semibold text-lg md:text-xl mb-6">
                    {realisation.title}
                  </h3>
                  {realisation.link ? (
                    <a
                      target="_blank"
                      href={realisation.link}
                      className="block group-hover/product:shadow-2xl"
                    >
                      <div className="h-42 flex">
                        <Image
                          alt={realisation.title}
                          src={realisation.thumbnail}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="w-full rounded-xl shadow-lg flex-1"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="h-42 flex">
                      <Image
                        alt={realisation.title}
                        src={realisation.thumbnail}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="w-full rounded-xl shadow-lg flex-1"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <HeroParallax
          realisations={realisations}
          header={
            <div>
              <GradientText
                colors={["#D1DDFF", "#7B9EFF", "white"]}
                showBorder={false}
                className="text-6xl font-bold mb-6 text-center"
                textClassName="pb-3"
              >
                Modèles de sites web
              </GradientText>
              <p className="text-lg text-center">
                Découvrez notre gamme de modèles de sites web et d'applications
                mobiles entièrement personnalisables.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}
