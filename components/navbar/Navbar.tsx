"use client";

import { useEffect, useState } from "react";
import GooeyNav from "./GooeyNav";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
        transition-transform duration-500
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Desktop Navbar */}
      <div
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
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full px-4 pt-4">
        <div
          className="
            bg-black/30
            backdrop-blur-md
            border border-white/10
            rounded-2xl
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          "
        >
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3">
            <h1 className="text-sm font-medium text-white/90 tracking-wide">
              Syafiq
            </h1>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              overflow-hidden transition-all duration-500
              ${mobileOpen ? "max-h-96 pb-4" : "max-h-0"}
            `}
          >
            <div className="flex flex-col px-4 gap-2">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    text-white/80
                    hover:text-white
                    hover:bg-white/10
                    transition-all duration-300
                    px-4 py-2.5 rounded-xl text-sm
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}