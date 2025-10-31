'use client'
import GradientText from '@/components/GradientText'
import MagicBento from '@/components/MagicBento'
import Image from 'next/image'


export default function About() {
  return (
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
      renderItem={() => <div className='border border-[#4172f92d] shadow-2xl flex px-16 py-12 rounded-2xl'>

        <div className='flex justify-center flex-col space-y-6 flex-1'>
          <GradientText
            colors={["#D1DDFF", '#7B9EFF', 'white',]}
            showBorder={false}
            className='text-5xl font-medium'
            textClassName='pb-3'
          >
            À propos de Nous
          </GradientText>
          <p className='text-lg'>
            NightByte est un collectif d’experts indépendants réunis autour d’une vision commune : créer des solutions digitales sur-mesure, modernes et évolutives. Nous combinons design, code, intelligence artificielle et stratégie visuelle pour accompagner startups, PME et créateurs vers la réussite digitale.
          </p>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '75%', height: '300px' }}
            src='/assets/rocket.png'
            alt='Rocket' />
        </div>
      </div>
      }
    />

  )
}