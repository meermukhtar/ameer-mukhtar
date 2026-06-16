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
        background: scrolled ? "rgba(39,76,119,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #6096ba" : "none",
        paddingTop: scrolled ? "1rem" : "1.5rem",
        paddingBottom: scrolled ? "1rem" : "1.5rem",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter" style={{ color: "#e7ecef" }}>
          MAM<span style={{ color: "#6096ba" }}>.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "#e7ecef" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#6096ba")}
              onMouseLeave={e => (e.currentTarget.style.color = "#e7ecef")}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 text-sm font-semibold rounded-full transition-all hover:scale-105"
            style={{ background: "#6096ba", color: "#e7ecef", boxShadow: "0 4px 15px rgba(96,150,186,0.4)" }}
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: "#e7ecef" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full py-4 px-6 flex flex-col space-y-4"
          style={{ background: "#274c77", borderTop: "1px solid #6096ba" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium transition-colors"
              style={{ color: "#e7ecef" }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
