import GradientText from "@/components/GradientText";
import Navbar from "@/components/layout/Navbar";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export default function Realisations() {

  return <div className=''>

    <Image className='-z-100 absolute top-0 left-0' src='/assets/hero-bg.svg' alt='hero-bg' fill />

    <div className='flex flex-col h-full pt-14 pb-32'>
      <Navbar />

      <div className="space-y-6 mb-10 flex flex-col items-center justify-center mt-35">
        <GradientText
          colors={["#D1DDFF", '#7B9EFF', 'white',]}
          showBorder={false}
          className='text-6xl font-bold mb-6 text-center'
          textClassName='pb-3'
        >
          Modèles de sites web
        </GradientText>
        <p className="text-lg">
          Découvrez notre gamme de modèles de sites web et d’applications mobiles entièrement personnalisables.
        </p>

      </div>
      <div className='mt-0'>
        <div className="grid grid-cols-3 gap-8">
          {realisations.map(realisation => (
            <PinContainer
              key={realisation.title}
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-5 ">
                <h3 className="max-w-xs pb-2! m-0! font-bold  text-base text-slate-100">
                  Aceternity UI
                </h3>
                <div className="text-base m-0! p-0! font-normal">
                  <span className="text-slate-500 ">
                    Customizable Tailwind CSS and Framer Motion Components.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-linear-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          )
          )}
        </div>
      </div>
    </div>
  </div>

}

export const realisations = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
