"use client";

import { useEffect, useState } from "react";
import GooeyNav from "./GooeyNav";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // show navbar when scrolling up
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }
      // hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
        setMobileOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        flex justify-center
        transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Desktop Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="
          hidden md:flex
          mt-4
          pointer-events-auto
          rounded-full
          border border-white/10
          bg-black/20
          backdrop-blur-md
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          px-3 py-2
        "
      >
        <GooeyNav items={items} />
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="md:hidden w-full px-4 pt-4"
      >
        <div
          className="
            bg-black/30
            backdrop-blur-md
            border border-white/10
            rounded-2xl
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            overflow-hidden
          "
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3">
            <h1 className="text-sm font-medium text-white/90 tracking-wide">
              Syafiq
            </h1>

            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-white p-1"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col px-4 pb-4 gap-1">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.08,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="
                          block
                          text-white/80
                          hover:text-white
                          hover:bg-white/10
                          transition-all duration-300
                          px-4 py-2.5 rounded-xl text-sm
                        "
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </header>
  );
}
