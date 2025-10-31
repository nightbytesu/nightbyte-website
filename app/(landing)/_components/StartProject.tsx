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
            <div className="flex flex-col space-y-4 max-w-sm mx-auto mt-10">
              <button className="cursor-pointer group relative w-full rounded-full px-8 py-4 text-white font-semibold text-lg bg-linear-to-r from-blue-600 via-blue-700 to-indigo-800 shadow-[0_0_30px_rgba(37,99,235,0.6)] border border-transparent hover:shadow-[0_0_40px_rgba(99,102,241,0.8)] transition-all duration-300 overflow-hidden">
                <span style={{
                  background: 'radial-gradient(50% 50% at 50% 50%, #4171F9 0%, #2F5BD6 50.5%, #0F286C 99.99%)'

                }} className="absolute inset-px rounded-full bg-linear-to-b from-[#0a0430] via-[#0a0b3b] to-[#090013] opacity-90"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Démarrer Un Projet
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>

              <button style={{

                background: 'rgba(151, 178, 255, 0.82)'

              }} className="cursor-pointer relative w-full rounded-full px-8 py-4 text-white/90 font-semibold text-lg bg-linear-to-b from-[#6e7eea] to-[#4956b8] border border-[#a3b3ff]/30 shadow-inner shadow-[#1e1e4a]/40 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden">
                <span className="absolute inset-px rounded-full opacity-70"></span>
                <span className="relative z-10">Rejoindre Une Formation</span>
              </button>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}
