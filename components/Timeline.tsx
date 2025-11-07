"use client"

import React, { useRef, useEffect, useState, useMemo } from "react"
import { motion, useInView } from "motion/react"

interface TimelineItemProps {
  children: React.ReactNode
  side?: "left" | "right"
}

export function TimelineItem({ children, side = "left" }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
      className="flex w-full justify-start"
    >
      <div className="w-full">
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  )
}

interface TimelineProps {
  children: React.ReactNode
}

export function Timeline({ children }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Optimisation avec throttle pour réduire les appels de scroll
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return

          const { top } = containerRef.current.getBoundingClientRect()
          const viewportHeight = window.innerHeight
          const elementHeight = containerRef.current.offsetHeight
          const progress = Math.max(0, Math.min(1, (viewportHeight - top) / (viewportHeight + elementHeight)))

          setScrollProgress(progress)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mémoisation du tableau d'enfants
  const memoizedChildren = useMemo(() => React.Children.toArray(children), [children])

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="absolute left-3 md:left-1/2 top-0 h-full w-0.5 md:w-1 md:-translate-x-1/2 transform">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-blue-400/10 to-blue-500/20" />
        <motion.div
          className="absolute rounded-full inset-x-0 top-0 bg-gradient-to-b from-blue-500 via-[#4171F9] to-blue-500 shadow-blue-500/50"
          style={{
            height: `${scrollProgress * 100}%`,
            willChange: "height"
          }}
        />
      </div>

      <div className="space-y-8 md:space-y-12">
        {memoizedChildren.map((child, index) => (
          <div key={index} className="flex items-center">
            {/* Mobile Layout - Single Column */}
            <div className="block md:hidden w-full pl-8">
              {child}
            </div>
            
            {/* Desktop Layout - Two Columns */}
            <div className="hidden md:block md:w-5/12">
              {index % 2 === 0 && child}
            </div>

            <div className="flex w-6 md:w-2/12 justify-center md:justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative h-3 w-3 md:h-4 md:w-4 rounded-full border-2 border-[#4171F9] bg-[#4171F9] shadow-blue-500/50"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-[#4171F9] opacity-75"
                />
              </motion.div>
            </div>

            <div className="hidden md:block md:w-5/12">
              {index % 2 === 1 && child}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}