import About from "./_components/About";
import Expertise from "./_components/Expertise";
import Hero from "./_components/Hero";
import StartProject from "./_components/StartProject";
import Target from "./_components/Target";
import Team from "./_components/Team";
import WhyUs from "./_components/WhyUs";


export default function Landing() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="max-w-6xl mx-auto mb-40">
        <About />
      </div>
      <div className="max-w-6xl mx-auto mb-40">
        <Expertise />
      </div>
      <div className="max-w-6xl mx-auto mb-40">
        <WhyUs />
      </div>
      <div className="max-w-6xl mx-auto mb-40">
        <Team />
      </div>
      <div className="max-w-6xl mx-auto mb-40">
        <Target />
      </div>
      <div className="max-w-6xl mx-auto mb-40">
        <StartProject />
      </div>
    </div>
  )
}