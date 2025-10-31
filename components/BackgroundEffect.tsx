import { cn } from "@/lib/utils";

interface BackgroundEffectProps extends React.ComponentProps<"div"> {
  type?: "radial" | "square";
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  translateX?: number | string;
  translateY?: number | string;
  width?: number;
  height?: number;
  background?: string;
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
  background = '#4171F93B',
  className,
}: BackgroundEffectProps) {
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
          '':
            type === "square",
        },

        className
      )}
    />
  );
}
