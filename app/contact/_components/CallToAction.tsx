
import BackgroundEffect from "@/components/BackgroundEffect"
import { Button } from "@/components/ui/button"
import { MoveUpRight } from "lucide-react"

export default function CallToAction() {
  return (
    <div className="relative py-20">
      {/* Top dotted border */}
      <BackgroundEffect translateX="0%" translateY="0%" left="32%" top="0%" />
    
      <div className="flex flex-col items-center text-center">
        <h2 className="text-white text-7xl font-bold mb-6">
          Vous êtes freelance <span className="text-blue-400">ou expert</span>
          <br />
          <span className="text-blue-400">du digital</span> ?
        </h2>

        <p className="text-gray-300 text-2xl mb-8 max-w-2xl">
          Rejoignez notre réseau créatif et collaborez sur des projets ambitieux.
        </p>
        
              <Button
                className="border border-white text-white rounded-full cursor-pointer text-xl h-12 w-60"
                style={{
                  background:
                    "linear-gradient(90.99deg, #4171F9 0.48%, #264393 99.52%)",
                }}
              >
                Rejoindre l’équipe <MoveUpRight />
              </Button>
      </div>
      
      {/* Bottom dotted border */}
    </div>
  )
}