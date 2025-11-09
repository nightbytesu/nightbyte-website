import GradientText from "@/components/GradientText";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Templates() {
  return (
    <div className="">
      {/* Mobile: Spacious layout with proper breathing room */}
      <div className="block lg:hidden">
        <div className="py-16 px-8">
          <div className="text-center mb-16">
            <GradientText
              colors={["#D1DDFF", "#7B9EFF", "white"]}
              showBorder={false}
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              textClassName="pb-3"
            >
              Modèles de sites web
            </GradientText>
            <p className="text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed">
              Découvrez notre gamme de modèles de sites web et d'applications
              mobiles entièrement personnalisables.
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-sm md:max-w-md mx-auto">
            {products.slice(0, 6).map((product) => (
              <div
                key={product.title}
                className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
              >
                <h3 className="text-white font-semibold text-lg md:text-xl mb-6">
                  {product.title}
                </h3>
                <div className="w-full h-48 md:h-56 bg-linear-to-br from-violet-500 via-purple-500 to-blue-500 rounded-xl shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop & Large screens: Full HeroParallax animation */}
      <div className="hidden lg:block">
        <HeroParallax
          products={products}
          header={
            <div>
              <GradientText
                colors={["#D1DDFF", "#7B9EFF", "white"]}
                showBorder={false}
                className="text-6xl font-bold mb-6 text-center"
                textClassName="pb-3"
              >
                Modèles de sites web
              </GradientText>
              <p className="text-lg text-center">
                Découvrez notre gamme de modèles de sites web et d'applications
                mobiles entièrement personnalisables.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.PNG",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.PNG",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.PNG",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.PNG",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.PNG",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.PNG",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.PNG",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.PNG",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.PNG",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.PNG",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.PNG",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.PNG",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.PNG",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.PNG",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.PNG",
  },
];
