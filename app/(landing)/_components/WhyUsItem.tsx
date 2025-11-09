import { cn } from "@/lib/utils";
import Image from "next/image";

export interface WhyUsItemProps {
  id: number;
  title: string;
  icons: (
    | {
        src: string;
        alt: string;
      }
    | string
  )[];
  className?: string;
}

export default function WhyUsItem({ title, icons, className }: WhyUsItemProps) {
  return (
    <div
      className={cn(
        className,
        "flex flex-1 flex-col space-y-3 sm:space-y-4 md:space-y-6 border border-[#4172f92d] rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 max-w-full md:max-w-md lg:max-w-lg",
        "backdrop-blur-sm transition-all duration-300 hover:border-[#4172f950] hover:shadow-lg"
      )}
    >
      <div className="flex gap-2 sm:gap-3 md:gap-5">
        {icons.map((icon, i) => {
          const src = typeof icon === "string" ? icon : icon.src;
          const alt = typeof icon === "string" ? icon : icon.alt;
          return (
            <Image
              key={`${alt}-${i}`}
              src={src}
              width={20}
              height={20}
              className="sm:w-6 sm:h-6 md:w-8 md:h-8"
              alt={alt}
            />
          );
        })}
      </div>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
        {title}
      </p>
    </div>
  );
}
