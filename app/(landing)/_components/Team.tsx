import React from 'react'
import TeamSlider from './TeamSlider'
import GradientText from '@/components/GradientText'


const teamMembers = [
  {
    id: 1,
    name: "Caliphe Musulman",
    role: "Fondateur & CEO",
    image: "/assets/teams/ramzyk.png",
  },
  {
    id: 2,
    name: "Ramzy Kemmoun",
    role: "UI/UX Designer & Graphic Designer",
    image: "/assets/teams/ramzyk.png",
  },
  {
    id: 3,
    name: "Eren Yeager",
    role: "UI/UX Designer & Graphic Designer",
    image: "/assets/teams/ramzyk.png",

  },

]

export default function Team() {
  return (
    <div className="space-y-6 mb-10 flex flex-col items-center justify-center">

      <GradientText
        colors={["#D1DDFF", '#7B9EFF', 'white',]}
        showBorder={false}
        className='text-5xl font-medium'
        textClassName='pb-3'
      >
        Équipe
      </GradientText>

      <p className="text-lg">
        Des talents unis par la passion tech.
      </p>
      <TeamSlider teamMembers={teamMembers} />

    </div>
  )
}