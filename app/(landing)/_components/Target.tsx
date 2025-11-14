import Image from "next/image";
import TargetItem from "./TargetItem";
import GradientText from "@/components/GradientText";

interface ITarget {
  id: number;
  title: string;
}

const targets: ITarget[] = [
  { id: 1, title: "Startups en phase de lancement" },
  { id: 2, title: "PME en transformation digitale" },
  { id: 3, title: "Grandes entreprises en quête d’innovation" },
  { id: 4, title: "Créateurs de contenu (YouTube, TikTok, Instagram)" },
  { id: 5, title: "Agences cherchant un partenaire en sous-traitance" },
];

export default function Target() {
  return (
    <div className="mb-8 md:mb-10 flex flex-col items-center justify-center px-8">
      <GradientText
        colors={["#D1DDFF", "#7B9EFF", "white"]}
        showBorder={false}
        className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 font-medium text-white text-center"
        textClassName="pb-3"
      >
        Pour qui travaillons-nous ?
      </GradientText>
      <p className="text-base md:text-lg mb-8 md:mb-10 text-gray-300 text-center">
        Entreprises, startups, projets qui rêvent grand.
      </p>

      <div className="hover:scale-105 transition-all cursor-pointer relative overflow-hidden rounded-2xl p-px shadow-[0_0_25px_-5px_rgba(255,255,255,0.1)] w-full max-w-5xl">
        <div
          className="rounded-2xl flex flex-col lg:flex-row flex-1 gap-6 lg:gap-16 py-8 md:py-12 px-6 md:px-12 w-full backdrop-blur-md border border-white/5"
          style={{
            background:
              "linear-gradient(145deg, rgba(9,0,19,0.95), rgba(25,10,40,0.95))",
          }}
        >
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/static/earth.png"
              alt="Planet & Stars"
              width={400}
              height={400}
              className="w-auto scale-600 h-48 md:h-64 lg:h-72 object-contain"
              style={{
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.1))",
              }}
            />
          </div>

          <ul className="flex flex-1 flex-col justify-center lg:justify-between text-gray-200 space-y-3 lg:space-y-0">
            {targets.map((target) => (
              <TargetItem key={target.id} title={target.title} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
