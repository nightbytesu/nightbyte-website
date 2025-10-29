"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion } from "motion/react"

interface TimelineItemProps {
  children: React.ReactNode
  side?: "left" | "right"
}

export function TimelineItem({ children, side = "left" }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: side === "left" ? -50 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex w-full ${side === "left" ? "justify-start" : "justify-end"}`}
    >
      <div className={`w-full`}>
        <div>
          <div className="relative z-10">{children}</div>
        </div>
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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const { top } = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const elementHeight = containerRef.current.offsetHeight

      // Calculate progress from 0 to 1
      const progress = Math.max(0, Math.min(1, (viewportHeight - top) / (viewportHeight + elementHeight)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Convert children array to alternate sides
  const childrenArray = React.Children.toArray(children)

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform">
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/20 via-blue-400/10 to-blue-500/20" />

        <motion.div
          className="absolute rounded-full inset-x-0 top-0 bg-linear-to-b from-blue-500 via-[#4171F9] to-blue-500 shadow-lg shadow-blue-500/50"
          style={{ height: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Timeline items */}
      <div className="space-y-12">
        {childrenArray.map((child, index) => (
          <div key={index} className="flex items-center">
            {/* Left side */}
            <div className="w-5/12">
              {index % 2 === 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  {child}
                </motion.div>
              )}
            </div>

            {/* Center dot */}
            <div className="flex w-2/12 justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                viewport={{ once: false, margin: "-100px" }}
                className="relative h-4 w-4 rounded-full border-2 border-[#4171F9] bg-[#4171F9] shadow-lg shadow-blue-500/50"
              >
                {/* Pulse effect */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 rounded-full bg-[#4171F9] opacity-75"
                />
              </motion.div>
            </div>

            {/* Right side */}
            <div className="w-5/12">
              {index % 2 === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false, margin: "-100px" }}
                >
                  {child}
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
