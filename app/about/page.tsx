"use client";

import Image from "next/image";
import CircularText from "@/components/text/CircularText";
import AnimatedList from "@/components/AnimatedList";
import SplitText from "@/components/text/SplitText";
import BlurText from "@/components/text/BlurText";
import ShinyText from "@/components/text/ShinyText";
import { useRef } from "react";
import VariableProximity from "@/components/text/VariableProximity";
import Link from "next/link";
import SectionReveal from "@/components/animation/SectionReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";
import AnimatedCounter from "@/components/animation/AnimatedCounter";
import { motion } from "motion/react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  image: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const experienceItems: ExperienceItem[] = [
  { role: "Backend Developer",  company: "Bulog Surakarta",  date: "Feb 2026 — July 2026" , image: "/images/about/bulog1.png"  },
  { role: "System Analysis Teaching Assistant",      company: "Universitas Sebelas Maret",    date: "Feb 2026 — July 2026"    , image: "/images/about/uns1.png"  },
  { role: "Cloud Computing Teaching Assistant",       company: "Universitas Sebelas Maret",     date: "Feb 2026 — July 2026"    , image: "/images/about/uns1.png"  },
  { role: "President of E-Mailkomp",   company: "Universitas Sebelas Maret",     date: "Des 2025 — Des 2026"    , image: "/images/about/emailkomp.png"  },
  { role: "Operation System Teaching Assistant",  company: "Universitas Sebelas Maret",          date: "Aug 2025 — Des 2025"           , image: "/images/about/uns1.png"  },
];

// ─── Experience Row ───────────────────────────────────────────────────────────

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <div
      className="
        group relative overflow-hidden
        flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6
        border border-white/10
        bg-gradient-to-br from-[#111922] to-[#0F1720]
        py-4 px-4 sm:py-5 sm:px-5 rounded-3xl
        transition-all duration-500
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
      "
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0" />

      {/* Avatar + Text */}
      <div className="relative z-10 flex items-center gap-4 sm:gap-5">

        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-white/10 shrink-0">
          <Image
            src={item.image}
            alt={item.role}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-0.5 sm:gap-1">

          <h3 className="text-sm sm:text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
            {item.role}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500">
            {item.company}
          </p>

        </div>
      </div>

      {/* Date */}
      <div className="relative z-10 self-start sm:self-auto">
        <span className="
          px-3 py-1.5 sm:px-4 sm:py-2 rounded-full
          border border-cyan-400/20
          bg-cyan-500/10
          text-cyan-300 text-[10px] sm:text-xs font-medium
          whitespace-nowrap
        ">
          {item.date}
        </span>
      </div>

    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const experienceRef = useRef<HTMLDivElement>(null);

  const experienceRows = experienceItems.map((item, index) => (
    <ExperienceRow key={index} item={item} />
  ));

  return (
    <main className="min-h-screen text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="min-h-screen px-6 md:px-16 py-24 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Profile Image */}
        <SectionReveal direction="left" delay={0.2} distance={80}>
          <div className="relative flex items-center justify-center shrink-0">
            {/* Glow Background */}
            <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-400/20 blur-3xl opacity-30" />
            <div
              className="
                relative w-[320px] h-[500px]
                rounded-[160px]
                overflow-hidden
                border border-white/10
                bg-gradient-to-br from-[#111922] to-[#0F1720]
                backdrop-blur-xl
                shadow-[0_0_60px_rgba(34,211,238,0.08)]
              "
            >
              <Image
                src="/images/profile/profile4.png"
                alt="Profile photo"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Circular "Let's Talk" Badge */}
            <Link
              href="/contact"
              className="absolute -bottom-10 -right-10 z-10 flex items-center justify-center group"
            >
              <CircularText
                text="• LET'S TALK • LET'S TALK • "
                onHover="speedUp"
                spinDuration={20}
                className="scale-75"
              />

              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="
                  absolute w-20 h-20 rounded-full
                  bg-[#111922]/90
                  backdrop-blur-xl
                  border border-cyan-400/20
                  flex items-center justify-center
                  shadow-[0_0_30px_rgba(34,211,238,0.15)]
                "
              >
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </motion.div>
            </Link>
          </div>
        </SectionReveal>

        {/* Intro Text */}
        <div className="flex-1 max-w-3xl flex flex-col gap-8">

          <div className="flex flex-col gap-4">
            <SplitText
              text="A technology enthusiast & lifelong learner"
              className="text-3xl md:text-6xl font-bold leading-tight tracking-tight"
              delay={40}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
          </div>

          <BlurText
            text="Enjoy working in dynamic project environments where communication, coordination, and problem solving play an important role in delivering impactful solutions. Continuously learning and developing skills in software engineering and cloud computing."
            delay={60}
            animateBy="words"
            direction="top"
            className="max-w-2xl text-lg leading-relaxed text-gray-400"
          />

          <SectionReveal direction="up" delay={0.4}>
            <a
              href="https://docs.google.com/document/d/1FxZS2L-6F3Rs5TD7vhLs-akdBQjKRsiFr-o1JzbntTI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative overflow-hidden
                inline-flex items-center gap-3
                w-fit
                px-8 py-4 rounded-full
                border border-cyan-400/20
                bg-gradient-to-br from-cyan-400/10 to-cyan-500/5
                backdrop-blur-md
                transition-all duration-500
                hover:border-cyan-300/50
                hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                hover:-translate-y-1
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-300 transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="relative z-10 text-sm md:text-base font-medium text-cyan-100">
                Download Resume
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0" />
            </a>
          </SectionReveal>

          {/* Quick Stats */}
          <StaggerChildren className="grid grid-cols-3 gap-4 mt-4" staggerDelay={0.12} delay={0.5}>
            {[
              { value: 10, suffix: "+", label: "Projects" },
              { value: 3, suffix: "+", label: "Years Exp" },
              { value: 5, suffix: "+", label: "Tech Skills" },
            ].map(({ value, suffix, label }) => (
              <StaggerItem key={label}>
                <div className="flex flex-col items-center gap-1 p-3 rounded-2xl border border-white/10 bg-[#111922]/60 hover:border-cyan-400/20 transition-all duration-500">
                  <AnimatedCounter value={value} suffix={suffix} className="text-xl md:text-2xl font-bold text-cyan-300" duration={1.5} />
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

        </div>
        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────────────────────── */}
      <div className="flex justify-center py-4">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 160 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        />
      </div>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-20">

        {/* Sticky Header */}
        <SectionReveal direction="left" delay={0.1}>
          <div
            ref={experienceRef}
            className="sticky top-32 self-start flex flex-col gap-8"
          >
            <span className="text-lime-400 uppercase tracking-[0.3em] text-sm font-medium">
              Journey
            </span>

            <ShinyText
              text="Experience"
              speed={3}
              className="text-5xl md:text-7xl font-bold leading-[0.95]"
              color="#7dd3fc"
              shineColor="#ffffff"
              spread={120}
            />

            <VariableProximity
              label="I have been involved in various projects and collaborative experiences that strengthened my technical, creative, and communication skills."
              className="max-w-md text-lg leading-relaxed text-gray-400"
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={experienceRef}
              radius={100}
              falloff="linear"
            />
          </div>
        </SectionReveal>

          {/* Animated List */}
          <SectionReveal direction="right" delay={0.2}>
            <AnimatedList
              items={experienceRows}
              showGradients
              enableArrowNavigation={false}
              displayScrollbar
              className="w-full"
              itemClassName="bg-transparent p-1"
            />
          </SectionReveal>

        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────────────────────── */}
      <div className="flex justify-center py-8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        />
      </div>

    </main>
  );
}
