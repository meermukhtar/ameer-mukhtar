"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10, 15, 29, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
        paddingTop: scrolled ? "0.9rem" : "1.4rem",
        paddingBottom: scrolled ? "0.9rem" : "1.4rem",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1.5 text-xl font-bold tracking-tight text-white">
          <span className="font-mono text-purple-400 font-black text-2xl transition-transform group-hover:-translate-x-0.5">&lt;</span>
          <span className="font-mono tracking-wider">MAM</span>
          <span className="font-mono text-purple-400 font-black text-2xl transition-transform group-hover:translate-x-0.5">/&gt;</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-semibold text-slate-300 hover:text-purple-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-6 py-2.5 text-base font-bold rounded-full text-white transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full py-5 px-6 flex flex-col space-y-5 bg-[#0d1424]/95 backdrop-blur-xl border-b border-slate-800"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-slate-200 hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="text-center py-3 text-base font-bold rounded-xl text-white bg-gradient-to-r from-purple-500 to-pink-500"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
