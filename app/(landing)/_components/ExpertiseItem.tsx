import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

export type ExpertiseItemProps = {
  id: number;
  title: string;
  icon: string;
  description: string;
  ctaText?: string;
  className?: string;
  alt?: string;
};

const ExpertiseItem = memo(function ExpertiseItem({
  title,
  icon,
  alt,
  description,
  ctaText = "Voir projets",
  className,
}: ExpertiseItemProps) {
  return (
    <div
      className={cn(
        "flex h-64 sm:h-72 md:h-80 flex-1 border border-[#4172f92d] flex-col space-y-4 md:space-y-6 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10",
        className
      )}
    >
      <Image
        src={icon}
        width={48}
        height={48}
        className="sm:w-12 sm:h-12 md:w-16 md:h-16"
        alt={alt || icon}
      />
      <p className="text-sm sm:text-base md:text-lg font-medium">{title}</p>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 flex-1">
        {description}
      </p>
      <Button
        asChild
        variant={"outline"}
        className="w-fit rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-8 py-1 md:py-2"
      >
        <Link href="/projects">
          {ctaText} <MoveUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
        </Link>
      </Button>
    </div>
  );
});

export default ExpertiseItem;
