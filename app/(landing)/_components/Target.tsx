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
    <div className="mb-10 flex flex-col items-center justify-center">
      <GradientText
        colors={["#D1DDFF", '#7B9EFF', 'white',]}
        showBorder={false}
        className="text-5xl mb-6 font-medium text-white" textClassName='pb-3'
      >
        Pour qui travaillons-nous ?
      </GradientText>
      <p className="text-lg mb-10 text-gray-300">
        Entreprises, startups, projets qui rêvent grand.
      </p>

      <div
        className="hover:scale-105 transition-all cursor-pointer relative overflow-hidden rounded-2xl p-px shadow-[0_0_25px_-5px_rgba(255,255,255,0.1)]"
        style={{
          background: ''
        }}
      >
        <div
          className="rounded-2xl flex flex-1 space-x-16 py-12 px-12 w-full backdrop-blur-md border border-white/5"
          style={{
            background:
              "linear-gradient(145deg, rgba(9,0,19,0.95), rgba(25,10,40,0.95))",
          }}
        >
          <Image
            src="/assets/planet-stars.webp"
            alt="Planet & Stars"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "auto",
              height: "300px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.1))",
            }}
          />

          <ul className="flex flex-1 flex-col justify-between text-gray-200">
            {targets.map((target) => (
              <TargetItem key={target.id} title={target.title} />))}
          </ul>
        </div>
      </div>
    </div>
  );
}
