import Navbar from '@/components/layout/Navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { MoveUpRight } from 'lucide-react'


export default function Hero() {
  return (
    <div className='relative h-[900px]'>

      <Image className='-z-100 absolute top-0 left-0' src='/assets/hero-bg.svg' alt='hero-bg' fill />

      <div className='flex flex-col h-full pt-14 pb-32 mx-auto container'>
        <Navbar />

        <div className='flex-1' />
        <div className='flex-3 flex flex-col'>

          <div className='flex flex-col items-center max-w-3/4 mx-auto justify-center'>

            <h1 className='text-6xl mb-6 text-center'>
              Nous concevons des expériences digitales performantes.
            </h1>
            <p className='text-xl mb-16 text-center'>
              NightByte est une agence digitale 360° spécialisée en développement web/mobile, design, IA et création de contenu. Nous unissons experts et technologies modernes pour transformer vos idées en produits efficaces.
            </p>
            <div className='space-x-6'>
              <Button>
                Découvrir nos formations
              </Button>
              <Button>
                Lancer un projet <MoveUpRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}