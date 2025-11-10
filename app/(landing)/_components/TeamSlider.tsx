"use client";

import { useRef } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import ElectricBorder from "@/components/ElectricBorder";

interface TeamMember {
  role: string;
  id: number;
  name: string;
  image: string;
}
interface TeamSliderProps {
  teamMembers: TeamMember[];
}

export default function TeamSlider({ teamMembers }: TeamSliderProps) {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="relative flex items-center justify-center">
        {/* Navigation Button: Previous */}
        {/* Adjusted left position and size for mobile screens (lg:left-4) */}
        <button
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
          className="absolute cursor-pointer left-0 lg:left-4 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          centeredSlides={true}
          loop={true}
          speed={800}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // 🎯 UPDATED RESPONSIVE BREAKPOINTS
          breakpoints={{
            // Mobile (default): 1 slide visible
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            // Tablet (md): 2 slides visible
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: false, // Centering 1 slide makes more sense than 2
            },
            // Desktop (lg): 3 slides visible, maintaining spaceBetween for visual effect
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: true,
            },
            // Large Desktop (xl): Slightly more space between slides
            1280: {
              slidesPerView: 3,
              spaceBetween: 70,
              centeredSlides: true,
            },
          }}
          onSlideChange={updateSlideScales}
          onInit={updateSlideScales}
        >
          {[...teamMembers, ...teamMembers].map((member, i) => (
            <SwiperSlide
              key={`${member.id}-${i}`}
              className="flex items-center justify-center transition-transform duration-500 py-12 sm:py-24"
            >
              <ElectricBorder
                className="swiper-slide-item mx-auto h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] flex flex-col justify-center items-center gap-4 transition-all duration-500 hover:-translate-y-4"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    // Adjusted image size for better performance/responsiveness
                    width={150}
                    height={150}
                    className="object-cover relative rounded-2xl w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
                    style={{
                      boxShadow: "rgba(65,113,249, 0.4) 0px 0px 0px 5px",
                    }}
                  />
                </div>

                <div className="text-center mt-4 sm:mt-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-lg text-slate-400 mt-1">
                    {member.role}
                  </p>
                </div>
              </ElectricBorder>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Button: Next */}
        {/* Adjusted right position and size for mobile screens (lg:right-4) */}
        <button
          onClick={() => swiperRef.current?.swiper?.slideNext()}
          className="absolute cursor-pointer right-0 lg:right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="lg:w-6 lg:h-6" />
        </button>
      </div>
    </div>
  );
}

// ⚠️ Ensure this function is defined within the component scope or imported if external
function updateSlideScales(swiper: SwiperClass) {
  const slides = swiper.slides;
  slides.forEach((slide: HTMLElement, index: number) => {
    const item = slide.querySelector(".swiper-slide-item") as HTMLElement;
    if (item) {
      // Swiper uses the 'realIndex' in loop mode, but your implementation relies on 'activeIndex'
      // We rely on the internal logic for the current setup.
      const realIndex = swiper.realIndex;
      const slidesPerView = swiper.params.slidesPerView as number;

      // Check if the current slide's index is one of the visible ones
      const isActive = index === swiper.activeIndex;

      let transformScale = 0.6;
      let zIndex = 1;

      // Apply full scale only to the centered slide (if slidesPerView is odd and centeredSlides is true)
      // Since you use updateSlideScales, we need custom logic.

      if (isActive) {
        transformScale = 1.0;
        zIndex = 100;
      }
      // Simplified approach for neighboring slides when slidesPerView >= 3
      else if (slidesPerView >= 3) {
        const isNext = index === (swiper.activeIndex + 1) % slides.length;
        const isPrev =
          index === (swiper.activeIndex - 1 + slides.length) % slides.length;

        if (isNext || isPrev) {
          transformScale = 0.8; // Slightly larger scale for immediate neighbors
          zIndex = 50;
        }
      }

      item.style.transform = `scale(${transformScale})`;
      item.style.zIndex = zIndex.toString();
    }
  });
}
