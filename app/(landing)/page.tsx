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
          alt="Left Background"
          src="/assets/contact/left-background.svg"
          fill
          className="object-contain -z-100 opacity-40"
        />
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-full -z-10">
        <Image
          alt="Right Background"
          src="/assets/contact/right-background.svg"
          fill
          className="object-contain -z-100 opacity-40"
        />
      </div>
      <div>
        <Hero />
      </div>
      <div className="max-w-7xl mx-auto mb-20 md:mb-32 lg:mb-40 px-8">
        <About />
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto mb-20 md:mb-32 lg:mb-40 px-8 z-200">
          <Expertise />
        </div>
        <BackgroundEffect translateY="-25%" translateX="-50%" left="50%" />
      </div>

      <div className="max-w-7xl mx-auto mb-40"></div>

      <div className="relative">
        <div className="max-w-7xl mx-auto mb-20 md:mb-32 lg:mb-40 px-8">
          <WhyUs />
        </div>
        <AnimatedCommet />
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
