"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,240,255,0.05)] border-b border-white/5" : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="w-full h-8 px-3 rounded bg-gradient-to-tr from-[#00f0ff] to-[#8a2be2] flex items-center justify-center font-bold text-white text-lg">
              Portfolio
            </span>
            {/* <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
              alid Ahsan
            </span> */}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="/WalidAhsanCV-FullStackWebDeveloper.pdf"
              download
              className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-white hover:border-[#00f0ff] hover:text-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden pointer-events-auto">
          <div className="flex flex-col items-center gap-8 w-full px-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-zinc-300 hover:text-[#00f0ff] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/WalidAhsanCV-FullStackWebDeveloper.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-4 w-full text-center bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] rounded-full text-lg font-bold text-white shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
