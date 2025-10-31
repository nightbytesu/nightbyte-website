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
      <div className="relative">

        <div className="max-w-6xl mx-auto mb-40">
          <Team />
        </div>
        <div className="absolute top-0 left-0 bg-[#4171F93B] rounded-full w-100 h-100" />
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