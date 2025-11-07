import BackgroundEffect from "@/components/BackgroundEffect";
import About from "./_components/About";
import Expertise from "./_components/Expertise";
import Hero from "./_components/Hero";
import StartProject from "./_components/StartProject";
import Target from "./_components/Target";
import Team from "./_components/Team";
import WhyUs from "./_components/WhyUs";

export default function Landing() {
  return (
    <div className="overflow-hidden">
      <div>
        <Hero />
      </div>
      <div className="max-w-6xl mx-auto mb-20 md:mb-32 lg:mb-40 px-4">
        <About />
      </div>
      <div className="relative">
        <div className="max-w-6xl mx-auto mb-20 md:mb-32 lg:mb-40 px-4">
          <Expertise />
        </div>
        <BackgroundEffect translateY='-25%' translateX='-50%' left="50%" />
      </div>

      <div className="max-w-6xl mx-auto mb-40"></div>

      <div className="relative">
        <div className="max-w-6xl mx-auto mb-20 md:mb-32 lg:mb-40 px-4">
          <WhyUs />
        </div>
        <BackgroundEffect type="image" src="/assets/commet.svg" translateX="25%" translateY="-50%" right="0" />
        <BackgroundEffect translateX="-50%" left="50%" />
        <BackgroundEffect translateX="-50%" top="100%" left="50%" />
      </div>

      <div className="relative">
        <div className="max-w-6xl mx-auto mb-20 md:mb-32 lg:mb-40 px-4">
          <Team />
        </div>
        <BackgroundEffect translateX="-50%" />
      </div>

      <div className="max-w-6xl mx-auto mb-20 md:mb-32 lg:mb-40 px-4">
        <Target />
      </div>

      <div className="relative">
        <div className="max-w-6xl mx-auto mb-20 md:mb-32 lg:mb-40 px-4">
          <StartProject />
        </div>
        <BackgroundEffect translateX="-50%" translateY="-50%" left="100%" top="100%" />
      </div>
    </div>
  );
}
