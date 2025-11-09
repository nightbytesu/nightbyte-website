import { cn } from "@/lib/utils";
import Image from "next/image";
interface BackgroundEffectProps extends React.ComponentProps<"div"> {
  type?: "radial" | "square" | "image";
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  translateX?: number | string;
  translateY?: number | string;
  width?: number;
  height?: number;
  background?: string;
  src?: string;
}

export default function BackgroundEffect({
  type = "radial",
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  translateX = 0,
  translateY = 0,
  width = 400,
  height = 400,
  background = "#4171F93B",
  src,
  className,
}: BackgroundEffectProps) {
  if (type === "image" && src) {
    return (
      <div
        style={{
          left: right !== 0 ? undefined : left,
          right,
          top,
          bottom,
          width,
          height,
          transform: `translate(${translateX}, ${translateY})`,
        }}
        className="absolute"
      >
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "75%", height: "300px" }}
          src={src}
          alt={src}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        left,
        right,
        top,
        bottom,
        width,
        height,
        background,
        transform: `translate(${translateX}, ${translateY})`,
      }}
      className={cn(
        {
          "absolute rounded-full blur-[80px] opacity-80 pointer-events-none":
            type === "radial",
          "": type === "square",
        },
        className
      )}
    />
  );
}
