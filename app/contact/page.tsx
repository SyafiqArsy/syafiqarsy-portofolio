"use client";

import Lanyard from "@/components/Lanyard";

import SplitText from "@/components/text/SplitText";
import BlurText from "@/components/text/BlurText";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import SectionReveal from "@/components/animation/SectionReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";
import { motion } from "motion/react";

const socials = [
  {
    name: "Email",
    username: "syafiqarsy24@gmail.com",
    href: "mailto:syafiqarsy24@gmail.com",
    icon: HiOutlineMail,
  },
  {
    name: "GitHub",
    username: "SyafiqArsy",
    href: "https://github.com/SyafiqArsy",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    username: "Syafiq Muhammad Musyafa Arsy At-Taufiq",
    href: "https://linkedin.com/in/syafiq-arsy",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    username: "@syaqars",
    href: "https://instagram.com/syaqars",
    icon: FaInstagram,
  },
  {
    name: "WhatsApp",
    username: "+62 856 4344 9811",
    href: "https://wa.me/6285643449811",
    icon: FaWhatsapp,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white overflow-hidden">
      <section className="relative w-full min-h-screen px-6 md:px-16 py-24 flex items-center overflow-hidden">
      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute top-[-100px] left-[-100px]
          w-[500px] h-[500px]
          bg-cyan-400/10
          blur-3xl rounded-full
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="
          absolute bottom-[-120px] right-[-120px]
          w-[450px] h-[450px]
          bg-sky-500/10
          blur-3xl rounded-full
        "
      />

      <div className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[700px] h-[700px]
        bg-cyan-400/5
        blur-3xl rounded-full
      " />

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">

              <SectionReveal direction="up" delay={0}>
                <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-medium">
                  Contact
                </span>
              </SectionReveal>

              <SplitText
                text="Hit Me Up"
                className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
                delay={40}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                textAlign="left"
              />

              <BlurText
                text="Feel free to reach out through my social platforms. Whether it's collaboration, projects, or simply having conversation and exchanging ideas."
                delay={60}
                animateBy="words"
                direction="top"
                className="max-w-xl text-lg leading-relaxed text-gray-400"
              />

            </div>

            {/* mini info */}
            <SectionReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 border border-white/10
                                transition-all duration-300
                                hover:border-cyan-400/30
                                hover:shadow-[0_0_20px_rgba(34,211,238,0.12)] bg-gradient-to-br from-[#111922] to-[#0F1720] px-4 py-2 rounded-2xl text-sm text-gray-300">
                  <HiOutlineLocationMarker size={18} />
                  Indonesia
                </div>

                <div className="flex items-center gap-2 border border-white/10
                                transition-all duration-300
                                hover:border-cyan-400/30
                                hover:shadow-[0_0_20px_rgba(34,211,238,0.12)] bg-gradient-to-br from-[#111922] to-[#0F1720] px-4 py-2 rounded-2xl text-sm text-gray-300">
                  <HiOutlineMail size={18} />
                  Available for projects
                </div>
              </div>
            </SectionReveal>

              {/* social cards */}
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.08} delay={0.4}>

                {socials.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <StaggerItem key={index}>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="
                          group relative overflow-hidden
                          rounded-3xl
                          border border-white/10
                          bg-gradient-to-br from-[#111922] to-[#0F1720]
                          p-5
                          transition-colors duration-500
                          hover:border-cyan-400/30
                          hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                          block
                        "
                      >

                        {/* Glow */}
                        <div className="
                          absolute inset-0 opacity-0
                          group-hover:opacity-100
                          transition duration-500
                          bg-gradient-to-r
                          from-cyan-500/0
                          via-cyan-500/5
                          to-cyan-500/0
                        " />

                        <div className="relative z-10 flex items-center gap-4">

                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 5 }}
                            className="
                              w-14 h-14 rounded-2xl
                              border border-white/10
                              bg-white/5
                              flex items-center justify-center
                              text-xl
                              transition-all duration-300
                              group-hover:bg-cyan-400
                              group-hover:text-black
                            "
                          >
                            <Icon />
                          </motion.div>

                          {/* Text */}
                          <div className="flex flex-col">

                            <h3 className="
                              text-lg font-semibold
                              transition-colors duration-300
                              group-hover:text-cyan-300
                            ">
                              {social.name}
                            </h3>

                            <p className="text-sm text-gray-400 truncate max-w-[180px]">
                              {social.username}
                            </p>

                          </div>

                        </div>

                      </motion.a>
                    </StaggerItem>
                  );
                })}

              </StaggerChildren>
          </div>

          {/* RIGHT SIDE */}
          <SectionReveal direction="right" delay={0.3} distance={80}>
            <div className="relative flex justify-center items-center">
              {/* glow */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="
                  absolute w-[90%] h-[90%]
                  rounded-[40px]
                  bg-cyan-400/10
                  blur-3xl
                "
              />

              {/* lanyard container */}
              <div
                className="
                  relative w-full max-w-[520px] h-[700px]
                  rounded-[40px]
                  overflow-hidden
                  border border-white/10
                  bg-gradient-to-br from-[#111922] to-[#0F1720]
                  backdrop-blur-xl
                  shadow-[0_0_60px_rgba(34,211,238,0.08)]
                "
              >
                {/* border overlay */}
                <div className="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/10 pointer-events-none z-10" />

                {/* fade */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent z-[5]" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent z-[5]" />

                {/* lanyard */}
                <div className="w-full h-full">
                  <Lanyard
                    position={[0, 0, 13]}
                    fov={18}
                    gravity={[0, -40, 0]}
                  />
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
