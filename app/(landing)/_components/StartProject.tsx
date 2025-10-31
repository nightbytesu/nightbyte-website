import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";



export default function StartProject() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <div className="max-w-2/3 space-y-6">
        <h2 className="text-5xl font-medium text-white text-center">
          Un projet à concrétiser ou une compétence à développer ?
        </h2>
        <p className="text-lg text-gray-300 text-center">
          Que vous souhaitiez lancer une marque, créer un produit digital ou monter en compétences, NightByte est votre partenaire de croissance.
        </p>
        <div className="relative py-32 max-w-3/4 mx-auto">

          <Image
            className="absolute -z-10 top-0 left-0 w-full h-full"
            width={0}
            height={0}
            sizes="100vw"
            src='/assets/rocket.png'
            alt='Rocket' />
          <div className="flex z-100 flex-col space-y-4 max-w-1/2 mx-auto">
            <Button>
              Démarrer un projet
              <ArrowUpRight />
            </Button>
            <Button>
              Rejoindre une formation
            </Button>
          </div>
        </div>
      </div>




    </div>
  );
}
