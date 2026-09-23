"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";

export default function About() {
  const highlights = [
    "Dynamic and passionate Full Stack mobile and web developer.",
    "3+ years of hands-on experience in Flutter (Android & iOS) cross-platform app engineering.",
    "Full-stack proficiency in Django (Python), Node.js, RESTful API integrations, and PostgreSQL & Firebase.",
    "Proven track record of successful deployments to Google Play Console and Apple App Store.",
    "Specialized in Retrieval-Augmented Generation (RAG) AI models, Vector databases, and LLM integrations.",
    "Experienced in AWS cloud deployment, CI/CD pipelines, and disciplined Git & GitHub workflows.",
  ];

  return (
    <section id="about" className="py-20 px-6 relative bg-[#0a0f1d] border-t border-slate-800/80">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Bio Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 mb-3">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Passionate Developer <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent">
                Committed to Excellence
              </span>
            </h2>

            <ul className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-2 text-cyan-300 font-medium">
                <MapPin size={18} className="text-cyan-400 shrink-0" />
                <span><strong className="text-white">Location:</strong> Rawalpindi, Pakistan</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Circular Avatar Frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-500/40 via-teal-500/20 to-cyan-400/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] border-2 border-cyan-500/40 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-900 to-[#0a0f1d] flex items-end justify-center">
                <Image
                  src="/profile.png"
                  alt="Muhammad Ameer Mukhtar"
                  width={340}
                  height={380}
                  priority
                  className="w-auto h-[95%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
