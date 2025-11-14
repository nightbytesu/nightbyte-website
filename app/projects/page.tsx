import Navbar from "@/components/layout/Navbar";
import Realisations from "./_components/Realisations";

export default function Projects() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-8 mt-12">
        <Navbar />
      </div>

      <div className="block md:hidden">
        <Realisations />
        {/* <Templates /> */}
      </div>

      <div className="hidden md:block">
        <Realisations />
        {/* <Templates /> */}
      </div>
    </div>
  );
}
