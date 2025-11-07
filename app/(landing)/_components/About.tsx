'use client'
import GradientText from '@/components/GradientText'
import MagicBento from '@/components/MagicBento'
import Image from 'next/image'


export default function About() {
  return (
    <div id="a-propos">
      <MagicBento
        textAutoHide={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
        items={[0]}
        renderItem={() => <div className='border border-[#4172f92d] shadow-2xl flex flex-col lg:flex-row px-6 md:px-12 lg:px-16 py-8 md:py-12 rounded-2xl gap-6'>

        <div className='flex justify-center flex-col space-y-4 md:space-y-6 flex-1'>
          <GradientText
            colors={["#D1DDFF", '#7B9EFF', 'white',]}
            showBorder={false}
            className='text-3xl md:text-4xl lg:text-5xl font-medium text-center lg:text-left'
            textClassName='pb-3'
          >
            À propos de Nous
          </GradientText>
          <p className='text-base md:text-lg text-center lg:text-left'>
            NightByte est un collectif d'experts indépendants réunis autour d'une vision commune : créer des solutions digitales sur-mesure, modernes et évolutives. Nous combinons design, code, intelligence artificielle et stratégie visuelle pour accompagner startups, PME et créateurs vers la réussite digitale.
          </p>
        </div>
        <div className='flex flex-1 items-center justify-center lg:justify-end'>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="w-3/4 lg:w-3/4 h-48 md:h-64 lg:h-72 object-contain"
            src='/assets/rocket.png'
            alt='Rocket' />
        </div>
      </div>
      }
    />
    </div>
  )
}