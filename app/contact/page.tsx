import BackgroundEffect from "@/components/BackgroundEffect";
import Navbar from "@/components/layout/Navbar";
import CallToAction from "./_components/CallToAction";
import ContactForm from "./_components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative overflow-hidden">
      {/* Left Background */}
      <BackgroundEffect translateX="0%" translateY="0%" left="40%" top="-10%" />
      <div className="absolute bg-green-400 left-0 top-0 w-1/2 h-full -z-10">
        <Image
          alt="Left Background"
          src="/assets/contact/left-background.svg"
          fill
          className="object-contain"
        />
      </div>

      {/* Right Background */}
      <div className="absolute bg-red-400 right-0 top-0 w-1/2 h-full -z-10">
        <Image
          alt="Right Background"
          src="/assets/contact/right-background.svg"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col min-h-screen relative z-10">
        <div className="pt-8 md:pt-14 pb-8">
          <div className="max-w-6xl mx-auto w-full px-4">
            <Navbar />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center pb-42">
          <div className="max-w-6xl mx-auto w-full px-4">
            <ContactForm />
          </div>
        </div>
        <div className="pb-32">
          <div className="max-w-6xl mx-auto px-4">
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  );
}
