import FuzzyText from "@/components/FuzzyText";
import { ChevronRight } from "lucide-react";

type TargetItemProps = {
  title: string;
};

export default function TargetItem({ title }: TargetItemProps) {
  return (
    <li className="flex group space-x-4 text-base md:text-lg lg:text-xl items-center hover:text-white transition-all">
      <ChevronRight className="text-[#6b63ff] w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 lg:group-hover:translate-x-4 transition-all" />

      <span className="md:text-lg lg:text-xl">{title}</span>
    </li>
  );
}
