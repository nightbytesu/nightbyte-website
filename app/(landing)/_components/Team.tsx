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
    <div id="equipe" className="space-y-4 md:space-y-6 mb-8 md:mb-10 flex flex-col items-center justify-center px-4">

      <GradientText
        colors={["#D1DDFF", '#7B9EFF', 'white',]}
        showBorder={false}
        className='text-3xl md:text-4xl lg:text-5xl font-medium text-center'
        textClassName='pb-3'
      >
        Équipe
      </GradientText>

      <p className="text-base md:text-lg text-center">
        Des talents unis par la passion tech.
      </p>
      <div className="w-full max-w-6xl">
        <TeamSlider teamMembers={teamMembers} />
      </div>

    </div>
  )
}