"use client";

import { motion } from "framer-motion";
import SkillsDisplay from "./SkillsDisplay";

export default function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden" style={{ background: "#90adc0" }}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
            style={{ color: "#e7ecef" }}
          >
            Skills &amp; Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg"
            style={{ color: "#e7ecef", opacity: 0.9 }}
          >
            My Tech Stack
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-4 h-0.5 w-20 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #274c77, transparent)" }}
          />
        </div>

        <SkillsDisplay />
      </div>
    </section>
  );
}
