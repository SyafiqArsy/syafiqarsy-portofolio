"use client";

import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { ReactNode } from "react";

interface GlowButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function GlowButton({
  href,
  children,
  className = "",
}: GlowButtonProps) {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="190 95 85"
      backgroundColor="#111922"
      borderRadius={999}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={22}
      animated={false}
      colors={["#22d3ee", "#38bdf8", "#a855f7"]}
      className="rounded-full"
    >
      <Link
        href={href}
        className={`
          group relative flex items-center justify-center
          px-8 py-4 rounded-full
          bg-[#111922]/90
          backdrop-blur-xl
          text-sm md:text-base
          font-medium
          overflow-hidden
          transition-all duration-300
          hover:scale-[1.02]
          ${className}
        `}
      >
        <span className="relative z-10 flex items-center gap-3">
          {children}
        </span>

        <div
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            transition duration-500
            bg-gradient-to-r
            from-cyan-500/0
            via-cyan-400/10
            to-purple-500/0
          "
        />
      </Link>
    </BorderGlow>
  );
}