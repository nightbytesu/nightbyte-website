import { Timeline, TimelineItem } from "@/components/Timeline";
import WhyUsItem, { WhyUsItemProps } from "./WhyUsItem";
import GradientText from "@/components/GradientText";

const whyUs: WhyUsItemProps[] = [
  {
    id: 1,
    title: "Une équipe élite, sélectionnée selon l’expertise",
    icons: ["/static/brands/magnifier.png"],
  },
  {
    id: 2,
    title: "Un workflow agile soutenu par Notion, ClickUp, Slack",
    icons: [
      "/static/brands/notion.png",
      "/static/brands/clickup.png",
      "/static/brands/slack.png",
    ],
  },
  {
    id: 3,
    title:
      "Des technologies modernes et scalables (React, Flutter, Python, OpenAI)",
    icons: [
      "/static/brands/react.png",
      "/static/brands/flutter.png",
      "/static/brands/python.png",
      "/static/brands/openai.png",
      "/static/brands/nextjs.png",
    ],
  },
  {
    id: 4,
    title: "Une approche 100% personnalisée à l’objectif client",
    icons: ["/static/brands/cloud.png"],
  },
  {
    id: 5,
    title: "Un accompagnement complet : du concept à la mise en ligne",
    icons: ["/static/brands/shield.png"],
  },
];

export default function WhyUs() {
  return (
    <div
      id="pourquoi-nous"
      className="space-y-4 md:space-y-6 mb-8 md:mb-10 flex flex-col items-center justify-center px-8"
    >
      <GradientText
        colors={["#D1DDFF", "#7B9EFF", "white"]}
        showBorder={false}
        className="text-3xl md:text-4xl lg:text-5xl font-medium text-center"
        textClassName="pb-3"
      >
        Pourquoi choisir NightByte ?
      </GradientText>
      <p className="text-base md:text-lg text-center">
        Une approche innovante, des résultats concrets.
      </p>

      <Timeline>
        {whyUs.map((why, i) => (
          <TimelineItem key={why.id} side={i % 2 === 0 ? "left" : "right"}>
            <WhyUsItem {...why} />
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
