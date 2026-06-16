"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Mail } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      style={{ background: "#274c77" }}
    >
      <ParticleBackground />

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 opacity-20"
        style={{ background: "#6096ba" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl -z-10 opacity-15"
        style={{ background: "#e7ecef" }}
      />

      <div className="container mx-auto flex flex-col items-center text-center max-w-4xl relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 inline-block"
            style={{ background: "rgba(96,150,186,0.2)", color: "#e7ecef", border: "1px solid #6096ba" }}
          >
            Full Stack Developer
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          style={{ color: "#e7ecef" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I&apos;m{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #e7ecef, #6096ba)" }}
          >
            Muhammad Ameer Mukhtar
          </span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
          style={{ color: "#6096ba" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Passionate about building scalable mobile and web applications. Currently developing a Cloud-based POS System while expanding my skills in Machine Learning and Python frameworks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            style={{ background: "#6096ba", color: "#e7ecef", boxShadow: "0 8px 25px rgba(96,150,186,0.4)" }}
          >
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            style={{
              background: "transparent",
              color: "#e7ecef",
              border: "2px solid #6096ba",
            }}
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SocialLink href="https://github.com/meermukhtar" icon={<Code size={20} />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/devmukh/" icon={<Globe size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:ameermukhtar998@gmail.com" icon={<Mail size={20} />} label="Email" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "#6096ba" }}>Scroll</span>
          <div
            className="w-px h-8 animate-bounce"
            style={{ background: "linear-gradient(to bottom, #6096ba, transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-full hover:scale-110 transition-all duration-300"
      style={{
        background: "rgba(96,150,186,0.2)",
        color: "#e7ecef",
        border: "1px solid #6096ba",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = "rgba(96,150,186,0.4)";
        (e.currentTarget as HTMLElement).style.color = "#e7ecef";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = "rgba(96,150,186,0.2)";
        (e.currentTarget as HTMLElement).style.color = "#e7ecef";
      }}
    >
      {icon}
    </a>
  );
}
