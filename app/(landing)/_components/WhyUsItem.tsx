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
        "flex flex-1 flex-col space-y-6 border border-[#4172f92d] rounded-2xl p-10",
        "bg-linear-to-br from-slate-900/50 to-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300"
      )}
    >

      <div className="flex gap-5">
        {icons.map((icon) => {
          const src = typeof icon === "string" ? icon : icon.src;
          const alt = typeof icon === "string" ? icon : icon.alt;
          return <Image key={alt} src={src} width={32} height={32} alt={alt} />;
        })}
      </div>
      <p>{title}</p>
    </div>
  );
}
