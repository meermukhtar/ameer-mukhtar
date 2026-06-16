"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Flutter",          icon: "🦋", float: "float-a", delay: "0s"   },
  { name: "React",            icon: "⚛️", float: "float-b", delay: "0.5s" },
  { name: "Django",           icon: "🎸", float: "float-c", delay: "1s"   },
  { name: "PostgreSQL",       icon: "🐘", float: "float-d", delay: "0.3s" },
  { name: "Firebase",         icon: "🔥", float: "float-a", delay: "1.2s" },
  { name: "GitHub",           icon: "🐙", float: "float-b", delay: "0.8s" },
  { name: "DigitalOcean",     icon: "🌊", float: "float-c", delay: "0.2s" },
  { name: "RAG Models",       icon: "🤖", float: "float-d", delay: "1.5s" },
  { name: "Machine Learning", icon: "🧠", float: "float-a", delay: "0.7s" },
  { name: "Python",           icon: "🐍", float: "float-b", delay: "1.1s" },
  { name: "REST APIs",        icon: "🔗", float: "float-c", delay: "0.4s" },
];

// Distribute skills into 3 rows for a staggered layout
const rows = [
  skills.slice(0, 4),
  skills.slice(4, 8),
  skills.slice(8, 11),
];

export default function SkillsDisplay() {
  return (
    <div className="relative w-full py-8">
      {/* Subtle background dots */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #274c77 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Rows */}
      <div className="relative flex flex-col items-center gap-6">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex flex-wrap justify-center gap-4">
            {row.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: rowIdx * 0.1 + i * 0.07 }}
                whileHover={{ scale: 1.12, y: -6 }}
                className={`${skill.float} select-none`}
                style={{ animationDelay: skill.delay }}
              >
                <div
                  className="flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 group"
                  style={{
                    background: "rgba(39,76,119,0.3)",
                    border: "1px solid #274c77",
                    color: "#e7ecef",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 20px rgba(39,76,119,0.2), inset 0 1px 0 rgba(231,236,239,0.2)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(231,236,239,0.95)";
                    el.style.borderColor = "#274c77";
                    el.style.boxShadow = "0 8px 30px rgba(39,76,119,0.4), inset 0 1px 0 rgba(231,236,239,0.8)";
                    el.style.color = "#274c77";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(39,76,119,0.3)";
                    el.style.borderColor = "#274c77";
                    el.style.boxShadow = "0 4px 20px rgba(39,76,119,0.2), inset 0 1px 0 rgba(231,236,239,0.2)";
                    el.style.color = "#e7ecef";
                  }}
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px opacity-40"
        style={{ background: "linear-gradient(90deg, transparent, #274c77, transparent)" }}
      />
    </div>
  );
}
