import Hero from "./_components/Hero";
import Templates from "./_components/Templates";


export default function Projects() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="max-w-6xl mx-auto mb-40">
        <Projects />
      </div>
      <div className="max-w-6xl mx-auto mb-40">
        <Templates />
      </div>
    </div>
  )
}