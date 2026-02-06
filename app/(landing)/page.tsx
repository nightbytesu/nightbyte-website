import BackgroundEffect from "@/components/BackgroundEffect";
import About from "./_components/About";
import Expertise from "./_components/Expertise";
import Hero from "./_components/Hero";
import StartProject from "./_components/StartProject";
import Target from "./_components/Target";
import Team from "./_components/Team";
import WhyUs from "./_components/WhyUs";
import AnimatedCommet from "./_components/AnimatedCommet";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="overflow-hidden relative">
      <div className="absolute left-0 top-0 w-1/2 h-full -z-10">
        <Image
          height={600}
          width={600}
          alt="Left Background"
          src="/static/contact/left-background.png"
          className="w-full h-full object-contain -z-100 opacity-40"
        />
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-full -z-10">
        <Image
          height={600}
          width={600}
          alt="Right Background"
          src="/static/contact/right-background.png"
          className="w-full h-full object-contain -z-100 opacity-40"
        />
      </div>
      
      {/* ADD RELATIVE AND Z-50 HERE */}
      <div>
        <Hero />
      </div>
      
      {/* ADD RELATIVE AND Z-10 HERE */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32 lg:mb-40 px-8 relative">
        <About />
      </div>
      
      <div className="relative">
        <div className="max-w-7xl mx-auto mb-20 md:mb-32 lg:mb-40 px-8">
          <Expertise />
        </div>
        <BackgroundEffect translateY="-25%" translateX="-50%" left="50%" />
      </div>

      {/* ... rest of the sections */}

      <AnimatedCommet />

      <div className="relative">
        <div className="max-w-7xl mx-auto mb-20 md:mb-32 lg:mb-40 px-8">
          <WhyUs />
        </div>
        <BackgroundEffect translateX="-50%" left="50%" />
        <BackgroundEffect translateX="-50%" top="100%" left="50%" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto mb-20 md:mb-32 lg:mb-40 px-8">
          <Team />
        </div>
        <BackgroundEffect translateX="-50%" />
      </div>

      <div className="max-w-7xl mx-auto mb-20 md:mb-32 lg:mb-40 px-8">
        <Target />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto mb-20 md:mb-32 lg:mb-40 px-8">
          <StartProject />
        </div>
        <BackgroundEffect
          translateX="-50%"
          translateY="-100%"
          left="100%"
          top="100%"
        />
      </div>
    </div>
  );
}
