import Hero from "./_components/Hero";
import Realisations from "./_components/Realisations";
import Templates from "./_components/Templates";

export default function Projects() {
  return (
    <div>
      {/* Mobile: Show Hero first, then sections */}
      <div className="block md:hidden">
        <Hero />
        <Realisations />
        <Templates />
      </div>

      {/* Desktop: Original structure with Realisations (includes navbar), then Templates */}
      <div className="hidden md:block">
        <Realisations />
        <Templates />
      </div>
    </div>
  );
}
