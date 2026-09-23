"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Mail, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900"
    >
      <ParticleBackground />

      {/* Ambient glow - unified purple */}
      <div
        className="absolute top-1/3 left-1/4 w-[32rem] h-[32rem] rounded-full blur-[150px] -z-10 opacity-20 pointer-events-none"
        style={{ background: "#a855f7" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full blur-[160px] -z-10 opacity-15 pointer-events-none"
        style={{ background: "#d946ef" }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Developer Info & Pitch */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 bg-slate-900/90 border border-purple-500/20 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              <span className="text-purple-400 font-mono">Available for projects</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-medium">Full Stack &amp; Mobile</span>
            </div>

            {/* Terminal greeting */}
            <div className="flex items-center gap-2 text-purple-400 font-mono text-sm mb-3">
              <Terminal size={16} />
              <span>const developer = &quot;Muhammad Ameer Mukhtar&quot;;</span>
            </div>

            {/* Main Headline - unified theme */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Architecting <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Scalable Mobile &amp; AI
              </span>
              <br />
              Digital Experiences.
            </h1>

            {/* Sub-text */}
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              Hi, I&apos;m <span className="text-white font-semibold">Muhammad Ameer Mukhtar</span>. A Full Stack Software Engineer specializing in cross-platform <span className="text-purple-300 font-medium">Flutter apps</span>, robust <span className="text-purple-300 font-medium">Django &amp; React backends</span>, and intelligent <span className="text-purple-300 font-medium">RAG / AI solutions</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <Link
                href="#projects"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-purple-500/50 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get In Touch
              </Link>

              {/* Social Links */}
              <div className="flex items-center gap-2 sm:ml-2">
                <SocialLink href="https://github.com/meermukhtar" icon={<Code2 size={19} />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/devmukh/" icon={<Globe size={19} />} label="LinkedIn" />
                <SocialLink href="mailto:ameermukhtar998@gmail.com" icon={<Mail size={19} />} label="Email" />
              </div>
            </div>

            {/* Quick Metrics / Stats bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 w-full max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">10+</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Shipped Apps</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">Full Stack</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Mobile &amp; Web</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">AI &amp; RAG</p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Production AI</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Profile Image Showcase (No extra text info) */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Subtle purple backlight */}
            <div className="absolute -inset-2 rounded-3xl bg-purple-500/15 blur-2xl -z-10" />

            {/* Pure clean profile frame - no text, no badges, no overlays */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-slate-800/40 to-pink-500/10 shadow-[0_0_50px_rgba(168,85,247,0.12)]">
              <div className="relative rounded-[22px] overflow-hidden bg-gradient-to-b from-slate-900/90 via-[#0a0f1d] to-[#0a0f1d] border border-purple-500/20 pt-6 px-4 pb-0 flex flex-col items-center">
                
                {/* Tech grid overlay */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Developer Profile Cutout Image (Clean portrait with no text) */}
                <div className="relative w-full aspect-[4/5] max-h-[420px] flex items-end justify-center z-10">
                  <Image
                    src="/profile.png"
                    alt="Muhammad Ameer Mukhtar"
                    width={360}
                    height={450}
                    priority
                    className="w-auto h-full max-h-[400px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                  />
                  {/* Subtle fade at the bottom border */}
                  <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#0a0f1d] to-transparent pointer-events-none" />
                </div>

              </div>
            </div>
          </motion.div>

        </div>
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
      className="p-3 rounded-xl bg-slate-900/80 text-slate-300 hover:text-purple-400 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/80 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
    >
      {icon}
    </a>
  );
}
