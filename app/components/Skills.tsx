"use client";

import { motion } from "framer-motion";
import SkillsDisplay from "./SkillsDisplay";

export default function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-slate-800/80">
      {/* Background ambient light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full blur-[140px] -z-10 opacity-15 pointer-events-none"
        style={{ background: "#a855f7" }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-purple-400 bg-purple-950/40 border border-purple-800/40 mb-3"
          >
            Technical Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight"
          >
            Skills &amp; <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto"
          >
            Core technologies and tools I leverage to build scalable, high-performance applications.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          />
        </div>

        <SkillsDisplay />
      </div>
    </section>
  );
}
