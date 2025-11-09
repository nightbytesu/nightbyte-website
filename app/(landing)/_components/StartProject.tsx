import GradientText from "@/components/GradientText";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function StartProject() {
  return (
    <div className="mb-8 md:mb-10 flex flex-col items-center justify-center px-8">
      <div className="max-w-full md:max-w-4xl lg:max-w-2/3 space-y-4 md:space-y-6">
        <GradientText
          colors={["#D1DDFF", "#7B9EFF", "white"]}
          showBorder={false}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white text-center"
          textClassName="pb-3"
        >
          Un projet à concrétiser ou une compétence à développer ?
        </GradientText>
        <p className="text-base md:text-lg text-gray-300 text-center max-w-4xl mx-auto">
          Que vous souhaitiez lancer une marque, créer un produit digital ou
          monter en compétences, NightByte est votre partenaire de croissance.
        </p>
        <div className="relative hover:scale-120 transition-all py-16 md:py-24 lg:py-32 max-w-full lg:max-w-3/4 mx-auto">
          <Image
            className="absolute -z-10 top-0 left-0 w-full h-full"
            width={0}
            height={0}
            sizes="100vw"
            src="/assets/rocket.png"
            alt="Rocket"
          />
          <div className="flex z-100 flex-col space-y-4 max-w-full md:max-w-1/2 mx-auto">
            <div className="flex flex-col space-y-4 max-w-full md:max-w-sm mx-auto mt-6 md:mt-10 px-8 md:px-0">
              <button className="cursor-pointer group relative w-full rounded-full py-2 px-8 text-white font-semibold text-base md:text-lg bg-linear-to-r from-blue-600 via-blue-700 to-indigo-800 shadow-[0_0_30px_rgba(37,99,235,0.6)] border border-transparent hover:shadow-[0_0_40px_rgba(99,102,241,0.8)] transition-all duration-300 overflow-hidden">
                <span
                  style={{
                    background:
                      "radial-gradient(50% 50% at 50% 50%, #4171F9 0%, #2F5BD6 50.5%, #0F286C 99.99%)",
                  }}
                  className="absolute inset-px rounded-full bg-linear-to-b from-[#0a0430] via-[#0a0b3b] to-[#090013] opacity-90"
                ></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Démarrer Un Projet
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>

              <button
                style={{
                  background: "rgba(151, 178, 255, 0.82)",
                }}
                className="cursor-pointer relative w-full rounded-full py-2 px-8 text-white/90 font-semibold text-base md:text-lg bg-linear-to-b from-[#6e7eea] to-[#4956b8] border border-[#a3b3ff]/30 shadow-inner shadow-[#1e1e4a]/40 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-px rounded-full opacity-70"></span>
                <span className="relative z-10">Rejoindre Une Formation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
