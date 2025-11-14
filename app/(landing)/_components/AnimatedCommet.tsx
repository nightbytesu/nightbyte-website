"use client";
import BackgroundEffect from "@/components/BackgroundEffect";
import { motion } from "motion/react";

export default function AnimatedCommet() {
  return (
    <motion.div
      className="hidden lg:block"
      initial={{ x: 300 }}
      whileInView={{ x: -10 }}
      transition={{ duration: 0.4, ease: "circOut", bounce: 1, damping: 20 }}
    >
      <BackgroundEffect
        type="image"
        src="/static/commet.png"
        translateX="25%"
        translateY="-50%"
        right="0"
      />
    </motion.div>
  );
}
