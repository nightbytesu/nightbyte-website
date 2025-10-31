import Image from "next/image";
import { Button } from "../ui/button";
import GooeyNav from "../GooeyNav";
const items = [
  { label: "Home", href: "#" },
  {
    label: "Services",
    href: "#"
  },
  { label: "Why Us", href: "#" },
  { label: "Team", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="h-20 px-16 flex justify-between items-center bg-[#4171F92B] rounded-full space-x-16">
      <Image
        src="/assets/nightbyte-logo.png"
        width={140}
        height={60}
        alt="Nightbyte"
      />
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />

      <Button
        className="border border-white text-white rounded-full w-30 cursor-pointer py-5"
        style={{
          background:
            "linear-gradient(90.99deg, #4171F9 0.48%, #264393 99.52%)",
        }}
      >
        Contact Us
      </Button>
    </nav>
  );
}
