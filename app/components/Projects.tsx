"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { useRef, MouseEvent } from "react";

const projects = [
  {
    title: "Story Mii",
    role: "Flutter Frontend Developer",
    description: "Developed and deployed the mobile application for both iOS and Android using Android Studio and Xcode. Handled comprehensive REST API integrations and successfully deployed to the Google Play Console.",
    tags: ["Flutter", "iOS", "Android", "REST APIs", "Play Console"],
    accent: "#274c77",
  },
  {
    title: "Lotmax.ca",
    role: "Full Stack Developer",
    description: "A comprehensive GIS location-based real estate website. Built a robust backend using Django and an interactive, responsive frontend using React JS.",
    tags: ["React JS", "Django", "GIS", "Real Estate"],
    accent: "#6096ba",
  },
  {
    title: "Medical RAG Chatbot",
    role: "AI & Backend Developer",
    description: "Developed a Retrieval-Augmented Generation (RAG) model designed for MBBS students' medical preparation. Features intelligent chatbots with quiz scoring and detailed explanations.",
    tags: ["RAG Model", "Machine Learning", "Python", "AI Chatbot"],
    accent: "#274c77",
  },
  {
    title: "Toyaq App",
    role: "Flutter Developer",
    description: "A survey-based point application for a personal client. Collects location-based GIS point data and is seamlessly integrated with GeoNode REST APIs.",
    tags: ["Flutter", "GIS", "GeoNode", "REST APIs"],
    accent: "#6096ba",
  },
  {
    title: "Vista App",
    role: "Flutter Developer",
    description: "An Android-specific survey-based point application. Designed to collect point data using location-based GIS technology for personal client needs.",
    tags: ["Flutter", "Android", "GIS", "Survey App"],
    accent: "#274c77",
  },
  {
    title: "Inoiver",
    role: "Flutter Frontend Developer",
    description: "Spearheaded the frontend development role using Flutter to create a seamless user experience across both Android and iOS platforms.",
    tags: ["Flutter", "iOS", "Android", "UI/UX"],
    accent: "#6096ba",
  },
  {
    title: "Good Muslim",
    role: "Flutter Developer",
    description: "Developed a comprehensive mobile application for both Android and iOS platforms using Flutter, focusing on performance and cross-platform consistency.",
    tags: ["Flutter", "iOS", "Android"],
    accent: "#274c77",
  },
  {
    title: "AI Proposal & Quotation Generator",
    role: "Full Stack Developer",
    description: "An AI-powered system designed to automatically generate professional proposals and quotations for clients, complete with built-in email integration for seamless dispatch.",
    tags: ["AI", "Django", "PDF Generation", "Email Integration"],
    accent: "#6096ba",
  },
];

function TiltCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-7, 7]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rawX.set(x * 2 - 1);
    rawY.set(y * 2 - 1);
    glowX.set(x * 100);
    glowY.set(y * 100);
  };

  const handleMouseLeave = () => {
    rawX.set(0); rawY.set(0); glowX.set(50); glowY.set(50);
  };

  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, ${project.accent}20 0%, transparent 65%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX, rotateY, transformStyle: "preserve-3d",
          background: "rgba(96,150,186,0.1)",
          border: "1px solid #6096ba",
          backdropFilter: "blur(8px)",
        }}
        className="relative group rounded-2xl p-8 h-full overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
      >
        {/* Glow follow */}
        <motion.div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ background: glowBg }} />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3
                className="text-2xl font-bold mb-2 transition-colors duration-200"
                style={{ color: "#274c77" }}
                onMouseEnter={e => (e.currentTarget.style.color = project.accent)}
                onMouseLeave={e => (e.currentTarget.style.color = "#274c77")}
              >
                {project.title}
              </h3>
              <p className="text-sm font-semibold" style={{ color: project.accent }}>
                {project.role}
              </p>
            </div>
            <div className="flex gap-2">
              <button aria-label="View code" className="p-2 transition-colors hover:scale-110 duration-200" style={{ color: "#6096ba" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#274c77")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6096ba")}
              >
                <Code size={20} />
              </button>
              <button aria-label="View project" className="p-2 transition-colors hover:scale-110 duration-200" style={{ color: "#6096ba" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#274c77")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6096ba")}
              >
                <ExternalLink size={20} />
              </button>
            </div>
          </div>

          <p className="mb-6 leading-relaxed text-sm" style={{ color: "#274c77" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{ background: "rgba(96,150,186,0.2)", color: "#274c77", border: "1px solid #6096ba" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "#e7ecef" }}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-bold mb-4" style={{ color: "#274c77" }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-lg" style={{ color: "#6096ba" }}
          >
            Showcasing innovation through code and design — hover to interact
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-4 h-0.5 w-20 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #6096ba, transparent)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
