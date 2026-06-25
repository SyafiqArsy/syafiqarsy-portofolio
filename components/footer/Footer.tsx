"use client";

import Link from "next/link";
import { motion } from "motion/react";
import SectionReveal from "@/components/animation/SectionReveal";

export default function Footer() {
  return (
    <footer className="relative px-4 md:px-8 pb-8 mt-24">

      <SectionReveal direction="up" delay={0.1} distance={40}>
        <div
          className="
            relative overflow-hidden
            max-w-6xl mx-auto
            rounded-3xl
            border border-white/10
            bg-[#111922]/80
            backdrop-blur-2xl
            shadow-[0_0_40px_rgba(0,0,0,0.35)]
          "
        >

          {/* Blur Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_60%)]" />

          <div className="relative z-10 px-6 md:px-16 py-16">

            {/* TOP */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">

              {/* LEFT */}
              <div className="flex flex-col gap-4 max-w-md">

                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  Let&apos;s Build Something Amazing Together.
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  Passionate about backend engineering, cloud computing,
                  and building scalable digital experiences.
                </p>

              </div>

              {/* RIGHT */}
              <div className="flex flex-col items-center md:items-end gap-5">

                <Link
                  href="/contact"
                  className="
                    group relative overflow-hidden
                    px-7 py-4 rounded-full
                    border border-white/10
                    bg-white/5 backdrop-blur-xl
                    transition-all duration-500
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
                    hover:-translate-y-1
                  "
                >

                  <span className="relative z-10 flex items-center gap-3 text-sm md:text-base font-medium">
                    Contact Me
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

                </Link>

                <div className="flex items-center gap-6 text-sm text-gray-500">

                  <Link
                    href="https://github.com/SyafiqArsy"
                    target="_blank"
                    className="hover:text-white transition-colors duration-300 hover:text-cyan-300"
                  >
                    GitHub
                  </Link>

                  <Link
                    href="https://linkedin.com/in/syafiq-arsy"
                    target="_blank"
                    className="hover:text-white transition-colors duration-300 hover:text-cyan-300"
                  >
                    LinkedIn
                  </Link>

                  <Link
                    href="https://instagram.com/syaqars"
                    target="_blank"
                    className="hover:text-white transition-colors duration-300 hover:text-cyan-300"
                  >
                    Instagram
                  </Link>

                </div>

              </div>

            </div>

            {/* BOTTOM */}
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-sm text-gray-500">
                © 2026 Syafiq Arsy. All rights reserved.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex items-center gap-2"
              >
                <span className="text-xs text-gray-600">Crafted with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-cyan-400"
                >
                  ♥
                </motion.span>
                <span className="text-xs text-gray-600">by Syafiq Arsy</span>
              </motion.div>

            </div>

          </div>
        </div>
      </SectionReveal>
    </footer>
  );
}
