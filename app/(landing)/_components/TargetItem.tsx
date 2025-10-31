import FuzzyText from '@/components/FuzzyText'
import { ChevronRight } from 'lucide-react'

type TargetItemProps = {
  title: string
}

export default function TargetItem({ title }: TargetItemProps) {
  return (
    <li
      className="flex group text-xl items-center hover:text-white transition-all"
    >
      <ChevronRight className="text-[#6b63ff] w-6 h-6 group-hover:translate-x-4 transition-all" />

      <FuzzyText enableHover fontSize='24px' baseIntensity={.01} hoverIntensity={.2}>
        {title}
      </FuzzyText>

    </li>
  )
}