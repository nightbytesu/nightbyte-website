import SpotlightCard from "@/components/SpotlightCard";
import ExpertiseItem, { ExpertiseItemProps } from "./ExpertiseItem";
import GradientText from "@/components/GradientText";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

const expertises: Array<ExpertiseItemProps> = [
  {
    id: 1,
    title: "Design Graphique & Branding",
    icon: "/static/expertise/pen.png",
    description:
      "Identités visuelles, logos, supports marketing, communication digitale.",
    className: "flex-3",
  },
  {
    id: 2,
    title: "Design Graphique & Branding",
    icon: "/static/expertise/web.png",
    description:
      "Création de sites vitrines, e-commerce, plateformes sur mesure, apps React/Next.js, Flutter & PWA.",
    className: "flex-4",
  },
  {
    id: 3,
    title: "Design Graphique & Branding",
    icon: "/static/expertise/camera.png",
    description:
      "Montage professionnel, animations, vidéos publicitaires et storytelling visuel.",
    className: "flex-8",
  },
  {
    id: 4,
    title: "Design Graphique & Branding",
    icon: "/static/expertise/ux.png",
    description:
      "Conception d'interfaces intuitives : wireframes, prototypes, design systems, tests utilisateurs.",
    className: "flex-7",
  },
  {
    id: 5,
    title: "Design Graphique & Branding",
    icon: "/static/expertise/course.png",
    className: "flex-1",
    description:
      "Identités visuelles, logos, supports marketing, communication digitale.",
  },
  {
    id: 6,
    title: "Design Graphique & Branding",
    icon: "/static/expertise/ai.png",
    className: "flex-1",
    description:
      "Chatbots, IA générative, automatisations no-code (n8n), intégrations Python & API.",
  },
];

export default function Expertise() {
  const renderItems = (items: Array<ExpertiseItemProps>) => {
    return (
      <>
        {/* Mobile: Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {items.map((item) => (
            <SpotlightCard
              key={item.id}
              className={`w-full ${item.className}`}
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <ExpertiseItem {...item} />
            </SpotlightCard>
          ))}
        </div>

        {/* Desktop: Original paired layout */}
        <div className="hidden md:flex md:flex-col gap-2">
          {(() => {
            const pairs = [];
            for (let i = 0; i < items.length - 1; i += 2) {
              const [first, second] = [items[i], items[i + 1]];
              pairs.push(
                <div
                  className="flex gap-2 h-full w-full"
                  key={first.id + "-" + second.id}
                >
                  <SpotlightCard
                    className={first.className}
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <ExpertiseItem {...first} className="" key={first.id} />
                  </SpotlightCard>
                  <SpotlightCard
                    className={cn(second.className, "w-full")}
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <ExpertiseItem {...second} className="" key={second.id} />
                  </SpotlightCard>
                </div>
              );
            }
            return pairs;
          })()}
        </div>
      </>
    );
  };

  return (
    <div id="expertise">
      <div className="space-y-4 md:space-y-6 mb-8 md:mb-10 flex flex-col items-center justify-center px-8">
        <GradientText
          colors={["#D1DDFF", "#7B9EFF", "white"]}
          showBorder={false}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-center"
          textClassName="pb-3"
        >
          Nos pôles d&apos;expertise
        </GradientText>
        <p className="text-base md:text-lg text-center">
          Des solutions digitales pensées pour l&apos;impact.
        </p>
      </div>

      <div className="px-8 md:px-0">{renderItems(expertises)}</div>
    </div>
  );
}
