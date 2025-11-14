"use client";

import { useRef, useCallback, memo } from "react";
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

const TeamSlider = memo(function TeamSlider({ teamMembers }: TeamSliderProps) {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    swiperRef.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.swiper?.slideNext();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
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
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: false, 
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: true,
            },
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

        <button
          onClick={handleNext}
          className="absolute cursor-pointer right-0 lg:right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="lg:w-6 lg:h-6" />
        </button>
      </div>
    </div>
  );
});

function updateSlideScales(swiper: SwiperClass) {
  const slides = swiper.slides;
  slides.forEach((slide: HTMLElement, index: number) => {
    const item = slide.querySelector(".swiper-slide-item") as HTMLElement;
    if (item) {
      const slidesPerView = swiper.params.slidesPerView as number;

      const isActive = index === swiper.activeIndex;

      let transformScale = 0.6;
      let zIndex = 1;

      if (isActive) {
        transformScale = 1.0;
        zIndex = 100;
      }
      else if (slidesPerView >= 3) {
        const isNext = index === (swiper.activeIndex + 1) % slides.length;
        const isPrev =
          index === (swiper.activeIndex - 1 + slides.length) % slides.length;

        if (isNext || isPrev) {
          transformScale = 0.8;  
          zIndex = 50;
        }
      }

      item.style.transform = `scale(${transformScale})`;
      item.style.zIndex = zIndex.toString();
    }
  });
}

export default TeamSlider;
