"use client"

import { useRef } from "react"
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import ElectricBorder from "@/components/ElectricBorder"

interface TeamMember {
  role: string
  id: number
  name: string
  image: string
}
interface TeamSliderProps {
  teamMembers: TeamMember[]
}
export default function TeamSlider({ teamMembers }: TeamSliderProps) {
  const swiperRef = useRef<SwiperRef>(null)

  return (
    <div className="w-full max-w-6xl mx-auto px-4">


      {/* Slider Container */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
          className="absolute left-4 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={-40}
          loop={true}
          speed={800}
          grabCursor={true}
          onSlideChange={updateSlideScales}
          onInit={updateSlideScales}
        >
          {[...teamMembers, ...teamMembers].map((member) => (
            <SwiperSlide key={member.id} className="flex items-center justify-center transition-transform duration-500 py-24">
              <ElectricBorder
                color="#7df9ff"
                className="swiper-slide-item h-[400px] w-[400px] flex flex-col justify-center items-center gap-4 atransition-all duration-500 hover:-translate-y-10"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
              >

                <div className='flex justify-center items-center'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover relative rounded-2xl"
                    style={{
                      boxShadow: 'rgba(65,113,249, 0.4) 0px 0px 0px 5px'
                    }}
                  />
                </div>

                <div className="text-center mt-8">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{member.role}</p>
                </div>
              </ElectricBorder>

            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.swiper?.slideNext()}
          className="absolute right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

function updateSlideScales(swiper: SwiperClass) {
  const slides = swiper.slides
  slides.forEach((slide: HTMLElement, index: number) => {
    const item = slide.querySelector(".swiper-slide-item") as HTMLElement
    if (item) {
      // Get the relative position compared to active slide
      const isActive = index === swiper.activeIndex
      const isNext = index === (swiper.activeIndex + 1) % slides.length
      const isPrev = index === (swiper.activeIndex - 1 + slides.length) % slides.length

      if (isActive) {
        // Center slide - largest and highest z-index
        item.style.transform = "scale(1.15)"
        item.style.borderColor = "rgb(59, 130, 246)"
        item.style.borderWidth = "3px"
        item.style.zIndex = "100"
      } else if (isNext) {
        item.style.transform = "scale(0.6)"
        item.style.borderColor = "rgb(71, 85, 105)"
        item.style.borderWidth = "2px"
        item.style.zIndex = "50"
      } else if (isPrev) {
        item.style.transform = "scale(0.6)"
        item.style.borderColor = "rgb(71, 85, 105)"
        item.style.borderWidth = "2px"
        item.style.zIndex = "1"
      } else {
        item.style.transform = "scale(0.6)"
        item.style.borderColor = "rgb(71, 85, 105)"
        item.style.borderWidth = "2px"
        item.style.zIndex = "1"
      }
    }
  })
}
