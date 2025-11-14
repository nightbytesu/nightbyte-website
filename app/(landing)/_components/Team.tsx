import { teamMembers } from "@/constants/team";
import TeamSlider from "./TeamSlider";
import GradientText from "@/components/GradientText";

export default function Team() {
  return (
    <div
      id="equipe"
      className="space-y-4 md:space-y-6 mb-8 md:mb-10 flex flex-col items-center justify-center px-8"
    >
      <GradientText
        colors={["#D1DDFF", "#7B9EFF", "white"]}
        showBorder={false}
        className="text-3xl md:text-4xl lg:text-5xl font-medium text-center"
        textClassName="pb-3"
      >
        Équipe
      </GradientText>

      <p className="text-base md:text-lg text-center">
        Des talents unis par la passion tech.
      </p>
      <div className="w-full max-w-7xl">
        <TeamSlider teamMembers={teamMembers} />
      </div>
    </div>
  );
}
