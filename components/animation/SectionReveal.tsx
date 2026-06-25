"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  blur?: boolean;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 60 },
  down: { x: 0, y: -60 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
};

export default function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 60,
  once = true,
  blur = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const offset = directionOffset[direction];
  const scale = direction === "none" ? 0.95 : 1;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: (offset.x / 60) * distance,
        y: (offset.y / 60) * distance,
        scale,
        filter: blur ? "blur(8px)" : "blur(0px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              x: (offset.x / 60) * distance,
              y: (offset.y / 60) * distance,
              scale,
              filter: blur ? "blur(8px)" : "blur(0px)",
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
