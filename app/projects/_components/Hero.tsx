import Navbar from '@/components/layout/Navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { MoveUpRight } from 'lucide-react'
import GradientText from '@/components/GradientText'


export default function Hero() {
  return (
    <div className='relative h-[850px] scale-y-105'>

      <Image className='-z-100 absolute top-0 left-0' src='/assets/hero-bg.svg' alt='hero-bg' fill />

      <div className='flex flex-col h-full pt-14 pb-32 mx-auto max-w-6xl'>
        <Navbar />

        <div className='flex-1' />
        <div className='flex-3 flex flex-col'>

          <div className='flex flex-col items-center max-w-4/5 mx-auto justify-center'>

            <GradientText
              colors={["#D1DDFF", '#7B9EFF',]}
              showBorder={false}
              className='text-6xl mb-6 text-center'
              textClassName='pb-3'
            >
              Nous concevons des expériences digitales performantes.
            </GradientText>
            <p className='text-xl mb-16 text-center'>
              NightByte est une agence digitale 360° spécialisée en développement web/mobile, design, IA et création de contenu. Nous unissons experts et technologies modernes pour transformer vos idées en produits efficaces.
            </p>
            <div className='space-x-6'>
              <Button variant={'outline'} className='cursor-pointer rounded-full text-xl h-12 w-75'>
                Découvrir nos formations
              </Button>
              <Button
                className="border border-white text-white rounded-full cursor-pointer text-xl h-12 w-60"
                style={{
                  background:
                    "linear-gradient(90.99deg, #4171F9 0.48%, #264393 99.52%)",
                }}
              >
                Lancer un projet <MoveUpRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}