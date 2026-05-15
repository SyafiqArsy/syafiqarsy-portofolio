"use client";

import Link from "next/link";
import TiltedCard from "@/components/TiltedCard";
import SplitText from "@/components/text/SplitText";
import RotatingText from "@/components/text/RotatingText";
import BlurText from "@/components/text/BlurText";
import ScrollVelocity from "@/components/text/ScrollVelocity";
import { useRef } from "react";
import ShinyText from "@/components/text/ShinyText";
import VariableProximity from "@/components/text/VariableProximity";
import ChromaGrid from "@/components/ChromaGrid";
import { FaGithub, FaGlobe } from "react-icons/fa";


// ─── Project Data ────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Hana Haqia's Portofolio",
    description:
      "Full-stack portfolio website developed with Laravel and Tailwind CSS, designed with a modern interface and dynamic content management capabilities.",
    image: "images/home/project1.png",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
    accent: "purple",

    liveUrl: "haqia-portofolio.page.gd",
    githubUrl: "https://github.com/SyafiqArsy/hanahaqia-portofolio",
  },
  {
    title: "Jetpack Fullblast",
    description:
      "Automated clFast-paced 2D endless runner developed in Unity, combining responsive flight controls, combat mechanics, and dynamic obstacle systems.oud deployment pipeline using infrastructure-as-code, with auto-scaling and zero-downtime rolling updates.",
    image: "images/home/project2.png",
    tags: ["C#"],
    accent: "cyan",

    githubUrl: "https://github.com/SyafiqArsy/Jetpack-Fullblast",
  },
  {
    title: "Atlanz Hotel",
    description:
      "Conversational AI assistant integrated withHotel booking backend system featuring authentication, room management, CRUD operations, and Midtrans payment gateway integration with scalable API architecture. LLM APIs, featuring context-aware responses and a real-time streaming interface.",
    image: "images/home/project3.png",
    tags: ["Laravel", "Vue", "MySql"],
    accent: "sky",

    githubUrl: "https://github.com/GilangDafa10/atlanz-hotels",
  },
  {
    title: "Geprek GT's Company Profile",
    description:
      "Live analytics dashboard with WebSocCompany profile website with responsive UI, WhatsApp pre-order integration, and production deployment, developed to support both customer and admin experiences.ket data streaming, interactive charts, and role-based data visibility.",
    image: "images/home/project4.png",
    tags: ["Laravel", "Blade"],
    accent: "emerald",

    liveUrl: "https://geprekgt.wuaze.com/",
    githubUrl: "https://github.com/raditya-hafid/project/tree/main/projectManpro",
  },
];

const accentMap: Record<string, { border: string; shadow: string; tag: string }> = {
  purple: {
    border: "hover:border-purple-400/40",
    shadow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
    tag: "bg-purple-500/10 border-purple-400/20 text-purple-300",
  },
  cyan: {
    border: "hover:border-cyan-400/40",
    shadow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
    tag: "bg-cyan-500/10 border-cyan-400/20 text-cyan-300",
  },
  sky: {
    border: "hover:border-sky-400/40",
    shadow: "hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]",
    tag: "bg-sky-500/10 border-sky-400/20 text-sky-300",
  },
  emerald: {
    border: "hover:border-emerald-400/40",
    shadow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]",
    tag: "bg-emerald-500/10 border-emerald-400/20 text-emerald-300",
  },
};

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  className = "",
}: {
  project: (typeof projects)[number];
  className?: string;
}) {
  const accent = accentMap[project.accent];
  return (
    <div
      className={`
        group relative overflow-hidden rounded-3xl cursor-pointer
        border border-white/10
        bg-gradient-to-br from-[#111922] to-[#0F1720]
        transition-all duration-500
        hover:-translate-y-2
        ${accent.border} ${accent.shadow}
        ${className}
      `}
    >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 z-10
          bg-black/60 backdrop-blur-sm
          opacity-0 group-hover:opacity-100
          transition-all duration-500
          flex items-center justify-center gap-4
        "
      >

        {/* Website */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-14 h-14 rounded-full
            border border-white/20
            bg-white/10
            backdrop-blur-md
            flex items-center justify-center
            hover:bg-cyan-400 hover:text-black
            transition-all duration-300
            hover:scale-110
          "
        >
          <FaGlobe size={20} />
        </a>

        {/* Github */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-14 h-14 rounded-full
            border border-white/20
            bg-white/10
            backdrop-blur-md
            flex items-center justify-center
            hover:bg-white hover:text-black
            transition-all duration-300
            hover:scale-110
          "
        >
          <FaGithub size={20} />
        </a>
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0d1620] via-[#0d1620]/40 to-transparent" />
    </div>

      {/* Content */}
      <div className="p-7 flex flex-col gap-4">
        <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full border text-xs font-medium ${accent.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard2({
  project,
  className = "",
}: {
  project: (typeof projects)[number];
  className?: string;
}) {
  const accent = accentMap[project.accent];
  return (
    <div
      className={`
        group relative overflow-hidden rounded-3xl cursor-pointer
        border border-white/10
        bg-gradient-to-br from-[#111922] to-[#0F1720]
        transition-all duration-500
        hover:-translate-y-2
        ${accent.border} ${accent.shadow}
        ${className}
      `}
    >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 z-10
          bg-black/60 backdrop-blur-sm
          opacity-0 group-hover:opacity-100
          transition-all duration-500
          flex items-center justify-center gap-4
        "
      >

        {/* Github */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-14 h-14 rounded-full
            border border-white/20
            bg-white/10
            backdrop-blur-md
            flex items-center justify-center
            hover:bg-white hover:text-black
            transition-all duration-300
            hover:scale-110
          "
        >
          <FaGithub size={20} />
        </a>
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0d1620] via-[#0d1620]/40 to-transparent" />
    </div>

      {/* Content */}
      <div className="p-7 flex flex-col gap-4">
        <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full border text-xs font-medium ${accent.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <main className="text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <SplitText
              text="Hi, I'm Syafiq Arsy"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              delay={50}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />

            <div className="flex flex-wrap items-center gap-3 text-lg md:text-2xl font-medium">
              <span className="text-gray-300">I am a</span>
              <RotatingText
                texts={["Fullstack Developer", "AI Enthusiast"]}
                mainClassName="px-3 py-1 bg-cyan-300 text-black rounded-md overflow-hidden"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                splitBy="characters"
                auto
                loop
              />
            </div>

            <BlurText
              text="Backend Developer in Progress. Passionate about scalable systems, APIs, and cloud technology. Let’s connect and get to know more about my journey, projects, and experiences."
              delay={80}
              animateBy="words"
              direction="top"
              className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl"
            />

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="
                  group relative inline-flex items-center gap-3
                  px-7 py-3 rounded-full
                  border border-cyan-400/20
                  bg-gradient-to-br from-cyan-400/10 to-cyan-500/5
                  backdrop-blur-md
                  overflow-hidden
                  transition-all duration-500
                  hover:border-cyan-300/50
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                  hover:-translate-y-1
                "
              >
                <span className="relative z-10 text-sm md:text-base font-medium text-cyan-100">
                  Know Me Better
                </span>

                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                {/* Glow Effect */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-r
                  from-cyan-500/0
                  via-cyan-400/10
                  to-cyan-500/0
                " />
              </Link>
            </div>
          </div>

          {/* Right — Tilted Card */}
          <div className="relative w-full flex items-center justify-center py-10">

            {/* Glow Background */}
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-cyan-400/20 blur-3xl opacity-40" />

            <TiltedCard
              imageSrc="images/profile/profile.png"
              altText="Syafiq Arsy"
              captionText="Syafiq Arsy Portfolio"
              containerHeight="420px"
              containerWidth="420px"
              imageHeight="420px"
              imageWidth="320px"
              rotateAmplitude={16}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <div
                  className="
                    absolute inset-x-0 bottom-0
                    p-6
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-transparent
                    flex flex-col gap-1
                  "
                >
                  <h3 className="text-xl font-semibold text-white">
                    Syafiq Arsy
                  </h3>

                  <p className="text-sm text-cyan-300">
                    Fullstack Developer
                  </p>
                </div>
              }
            />
          </div>

        </div>
      </section>

      {/* ── SCROLL MARQUEE ───────────────────────────────────────────────── */}
      <section className="py-8 overflow-hidden border-y border-white/5">
        <ScrollVelocity
          texts={["Syafiq Muhammad Musyafa Arsy At-Taufiq"]}
          velocity={80}
          numCopies={6}
          damping={50}
          stiffness={400}
          className="text-white/8 font-bold tracking-widest select-none"
          scrollerClassName="text-3xl md:text-5xl"
        />
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16 py-24">
        <div
          ref={aboutRef}
          className="max-w-3xl text-center flex flex-col items-center gap-8"
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-medium">
            Who I Am
          </span>

          <ShinyText
            text="About Me"
            speed={3}
            className="text-4xl md:text-6xl font-bold"
            color="#7dd3fc"
            shineColor="#ffffff"
            spread={120}
          />

          <VariableProximity
            label="I'm Syafiq Muhammad Musyafa Arsy At-Taufiq, an Informatics engineering student specializing in backend development with a strong interest in building efficient, scalable, and maintainable systems. Experienced in API development, database management, and server-side programming."
            className="text-lg md:text-xl text-gray-400 leading-relaxed"
            fromFontVariationSettings="'wght' 400, 'opsz' 14"
            toFontVariationSettings="'wght' 900, 'opsz' 40"
            containerRef={aboutRef}
            radius={120}
            falloff="linear"
          />

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-4 w-full max-w-lg">
            {[
              { value: "10+", label: "Projects" },
              { value: "3+", label: "Years Learning" },
              { value: "5+", label: "Technologies" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 p-4 rounded-2xl border border-white/10 bg-[#111922]/90"
              >
                <span className="text-2xl font-bold text-cyan-300">{value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-16 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">

          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
              A collection of projects I’ve built through exploration, problem solving, and continuous learning in technology.
            </p>
          </div>

          {/* Grid */}
          <ChromaGrid className="rounded-[40px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">

              {/* Left column — offset upward on desktop */}
              <div className="flex flex-col gap-8 md:-translate-y-10">
                <ProjectCard project={projects[0]} />
                <ProjectCard2 project={projects[1]} />
              </div>

              {/* Right column — offset downward on desktop */}
              <div className="flex flex-col gap-8 md:translate-y-10">
                <ProjectCard2 project={projects[2]} />
                <ProjectCard project={projects[3]} />
              </div>

            </div>
          </ChromaGrid>

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="
                group relative overflow-hidden
                px-8 py-4 rounded-full
                border border-white/10
                bg-gradient-to-br from-[#111922] to-[#0F1720]
                transition-all duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
              "
            >
              <span className="relative z-10 flex items-center gap-3 text-sm font-medium">
                View All Projects

                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}