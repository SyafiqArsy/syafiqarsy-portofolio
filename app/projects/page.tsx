"use client";

import ChromaGrid from "@/components/ChromaGrid";
import { FaGithub, FaGlobe } from "react-icons/fa";
import SplitText from "@/components/text/SplitText";
import BlurText from "@/components/text/BlurText";
import ShinyText from "@/components/text/ShinyText";

// ─── Project Data ────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Hana Haqia's Portofolio",
    description:
      "Full-stack portfolio website developed with Laravel and Tailwind CSS, designed with a modern interface and dynamic content management capabilities.",
    image: "/images/home/project1.png",
    tags: ["Laravel", "Tailwind CSS", "MySQL"],
    accent: "purple",

    liveUrl: "https://haqia-portofolio.page.gd",
    githubUrl: "https://github.com/SyafiqArsy/hanahaqia-portofolio",
  },
  {
    title: "Jetpack Fullblast",
    description:
      "Fast-paced 2D endless runner developed in Unity, combining responsive flight controls, combat mechanics, and dynamic obstacle systems.",
    image: "/images/home/project2.png",
    tags: ["C#"],
    accent: "cyan",

    githubUrl: "https://github.com/SyafiqArsy/Jetpack-Fullblast",
  },
  {
    title: "Atlanz Hotel",
    description:
      "Hotel booking backend system featuring authentication, room management, CRUD operations, and Midtrans payment gateway integration with scalable API architecture.",
    image: "/images/home/project3.png",
    tags: ["Laravel", "Vue", "MySQL"],
    accent: "sky",

    githubUrl: "https://github.com/GilangDafa10/atlanz-hotels",
  },
  {
    title: "Geprek GT's Company Profile",
    description:
      "Company profile website with responsive UI, WhatsApp pre-order integration, and production deployment, developed to support both customer and admin experiences.",
    image: "/images/home/project4.png",
    tags: ["Laravel", "Blade"],
    accent: "emerald",

    liveUrl: "https://geprekgt.wuaze.com/",
    githubUrl:
      "https://github.com/raditya-hafid/project/tree/main/projectManpro",
  },

  // TEMPLATE PROJECT
  {
    title: "Odi's Tour",
    description:
      "Responsive ticket booking platform developed with PHP Native, featuring dynamic pricing logic and efficient admin management capabilities.",
    image: "/images/home/project5.png",
    tags: ["Laravel", "Javascript", "Bootstrap" ],
    accent: "purple",

    githubUrl: "https://github.com/SyafiqArsy/Odis-Tour",
  },
];

const accentMap: Record<
  string,
  {
    border: string;
    shadow: string;
    tag: string;
  }
> = {
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

// ─── Project Card ────────────────────────────────────────────────────────────
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
          {project.liveUrl && (
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
          )}

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
        <h3 className="text-xl font-bold tracking-tight">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

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

// ─── Project Card 2 ──────────────────────────────────────────────────────────
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
        <h3 className="text-xl font-bold tracking-tight">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>

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

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  return (
    <main className="text-white min-h-screen overflow-x-hidden">

      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <section className="relative px-6 md:px-16 pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden">

        {/* Ambient Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[500px] md:w-[700px]
              h-[500px] md:h-[700px]
              rounded-full
              bg-cyan-400/10
              blur-3xl
              opacity-40
            "
          />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-8 text-center items-center">

          <SplitText
            text="Featured Projects"
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
            delay={40}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />

          <BlurText
            text="A collection of projects I’ve built through exploration, problem solving, and continuous learning in technology."
            delay={60}
            animateBy="words"
            direction="top"
            className="max-w-2xl text-lg leading-relaxed text-gray-400"
            align="center"
          />

        </div>

      </section>

      {/* ── PROJECT GRID ───────────────────────────────────────────── */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-7xl mx-auto">

          <ChromaGrid className="rounded-[40px] bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14">

              {/* ====================================================== */}
              {/* ================= PERULANGAN CARD ==================== */}
              {/* ====================================================== */}

              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`
                    flex flex-col gap-8
                    ${index % 2 === 0
                      ? "md:-translate-y-10"
                      : "md:translate-y-10"}
                  `}
                >
                  {index === projects.length - 1 ? (
                    <ProjectCard2 project={project} />
                  ) : (
                    <ProjectCard project={project} />
                  )}
                </div>
              ))}

              {/* ====================================================== */}
              {/* ================= END PERULANGAN CARD ================ */}
              {/* ====================================================== */}

            </div>
          </ChromaGrid>

        </div>
      </section>

    </main>
  );
}