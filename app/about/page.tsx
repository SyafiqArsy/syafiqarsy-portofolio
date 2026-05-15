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

// ─── Types ────────────────────────────────────────────────────────────────────

type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  image: string;
};

type GalleryItem = {
  image: string;
  text: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const experienceItems: ExperienceItem[] = [
  { role: "Backend Developer",  company: "Bulog Surakarta",  date: "Feb 2026 — July 2026" , image: "/images/about/bulog1.png"  },
  { role: "System Analysis Teaching Assistant",      company: "Universitas Sebelas Maret",    date: "Feb 2026 — July 2026"    , image: "/images/about/uns1.png"  },
  { role: "Cloud Computing Teaching Assistant",       company: "Universitas Sebelas Maret",     date: "Feb 2026 — July 2026"    , image: "/images/about/uns1.png"  },
  { role: "President of E-Mailkomp",   company: "Universitas Sebelas Maret",     date: "Des 2025 — Des 2026"    , image: "/images/about/emailkomp.png"  },
  { role: "Operation System Teaching Assistant",  company: "Universitas Sebelas Maret",          date: "Aug 2025 — Des 2025"           , image: "/images/about/uns1.png"  },
];

const galleryItems: GalleryItem[] = [
  { image: "/images/project1.jpg", text: "Web Design"   },
  { image: "/images/project2.jpg", text: "UI/UX"        },
  { image: "/images/project3.jpg", text: "Frontend"     },
  { image: "/images/project4.jpg", text: "Creative Dev" },
  { image: "/images/project5.jpg", text: "Branding"     },
];

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-lime-400 uppercase tracking-[0.3em] text-sm font-medium">
      {children}
    </span>
  );
}

// ─── Experience Row ───────────────────────────────────────────────────────────

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <div
      className="
        group relative overflow-hidden
        flex items-center justify-between gap-6
        border border-white/10
        bg-gradient-to-br from-[#111922] to-[#0F1720]
        py-5 px-5 rounded-3xl
        transition-all duration-500
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
      "
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0" />

      {/* Avatar + Text */}
      <div className="relative z-10 flex items-center gap-5">

        <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 shrink-0">
          <Image
            src={item.image}
            alt={item.role}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">

          <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
            {item.role}
          </h3>

          <p className="text-sm text-gray-500">
            {item.company}
          </p>

        </div>
      </div>

      {/* Date */}
      <div className="relative z-10">
        <span className="
          px-4 py-2 rounded-full
          border border-cyan-400/20
          bg-cyan-500/10
          text-cyan-300 text-xs font-medium
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
              src="/images/profile.jpg"
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

            <div
              className="
                absolute w-20 h-20 rounded-full
                bg-[#111922]/90
                backdrop-blur-xl
                border border-cyan-400/20
                flex items-center justify-center
                shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all duration-300
                group-hover:scale-110
                group-hover:border-cyan-300/40
              "
            >
              <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>
          </Link>
        </div>

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

          <Link
            href="https://docs.google.com/document/d/1FxZS2L-6F3Rs5TD7vhLs-akdBQjKRsiFr-o1JzbntTI/edit?usp=sharing"
            className="
              group relative overflow-hidden
              w-fit
              px-8 py-4 rounded-full
              border border-white/10
              bg-gradient-to-br from-[#111922] to-[#0F1720]
              transition-all duration-500
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
            "
          >
            <span className="relative z-10 flex items-center gap-3 text-sm font-medium">
              My Resume

              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />
          </Link>

        </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-20">

        {/* Sticky Header */}
        <div
          ref={experienceRef}
          className="sticky top-32 self-start flex flex-col gap-8"
        >

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

          {/* Animated List */}
          <AnimatedList
            items={experienceRows}
            showGradients
            enableArrowNavigation={false}
            displayScrollbar
            className="w-full"
            itemClassName="bg-transparent p-1"
          />

        </div>
      </section>

    </main>
  );
}