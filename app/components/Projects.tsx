"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, X, Sparkles } from "lucide-react";
import { useRef, useState, MouseEvent } from "react";

type ProjectType = {
  title: string;
  role: string;
  description: string;
  cause?: string;
  tags: string[];
};

const projects: ProjectType[] = [
  {
    title: "Story Mii",
    role: "Flutter Frontend Developer",
    description: "Developed and deployed the mobile application for both iOS and Android. The app is currently live on both platforms, offering an immersive storytelling experience.",
    cause: "To create an interactive storytelling platform for users to engage with dynamic narratives.",
    tags: ["Flutter", "iOS", "Android", "Live App"],
  },
  {
    title: "Lotmax.ca",
    role: "Full Stack Developer",
    description: "A comprehensive real estate platform featuring a React JS frontend and a Django backend with PostgreSQL. Successfully deployed and currently live on an AWS server at lotmax.ca.",
    cause: "To provide real estate professionals with precise property insights on a highly scalable architecture.",
    tags: ["React JS", "Django", "PostgreSQL", "AWS", "Live"],
  },
  {
    title: "Medical RAG Chatbot",
    role: "AI & Backend Developer",
    description: "Built a robust AI backend and integrated a Retrieval-Augmented Generation (RAG) chatbot specifically tailored for a healthcare organization.",
    cause: "To assist medical professionals and students with intelligent, context-aware information retrieval.",
    tags: ["RAG Model", "AI Chatbot", "Backend Integration", "Healthcare"],
  },
  {
    title: "Toyaq App",
    role: "Flutter Developer",
    description: "A survey data collection app linked to custom open-source GeoNode integrations. It collects data for a survey company and pushes full info forms to a centralized dashboard.",
    cause: "To streamline field data collection and dashboard synchronization for professional survey operations.",
    tags: ["Flutter", "GeoNode", "Data Collection", "Dashboard"],
  },
  {
    title: "Vista App",
    role: "Flutter Developer",
    description: "An enterprise data collection app seamlessly linked with custom GeoNode integrations. Field agents use it to gather survey data and push detailed forms directly to the company dashboard.",
    cause: "To empower field agents with efficient, real-time data capturing tools for on-ground surveys.",
    tags: ["Flutter", "GeoNode", "Enterprise", "Field Survey"],
  },
  {
    title: "Invoicer",
    role: "Flutter Developer",
    description: "A live iOS and Android app for small to medium businesses. Allows users to create estimates, add products and payments, and seamlessly convert estimates into professional invoices.",
    cause: "To provide a streamlined, on-the-go financial and invoicing solution for diverse organizations.",
    tags: ["Flutter", "iOS", "Android", "Invoicing", "Business Tool"],
  },
  {
    title: "Good Muslim",
    role: "Full Stack & Mobile Developer",
    description: "A comprehensive platform available on Android, iOS, and Web, including a full admin panel. Features include reciting Quran Pak surahs, and Stripe integration for Sadqah and donations.",
    cause: "To build a rich digital assistant for the Muslim community supporting daily religious routines and secure donations.",
    tags: ["Flutter", "iOS", "Android", "Stripe", "Admin Panel"],
  },
  {
    title: "AI Proposal & Quotation Generator",
    role: "Full Stack Developer",
    description: "An AI automation tool built for a lead generation company. Users can bulk-register prospects, select them, and the AI automatically generates and sends tailored business growth proposals.",
    cause: "To fully automate the time-consuming process of pitching and drafting proposals for B2B lead generation.",
    tags: ["AI Automation", "Lead Generation", "B2B Pitching"],
  },
  {
    title: "Kissan Connect App",
    role: "Flutter & Backend Developer",
    description: "A private communication platform built for a specific organization using Flutter, Node.js, and WebSockets. It allows users to securely connect and share private data, serving as an exclusive alternative to global WhatsApp.",
    cause: "To provide an isolated and highly secure messaging environment for private organizational data sharing.",
    tags: ["Flutter", "Node.js", "WebSockets", "iOS", "Android"],
  },
  {
    title: "Contact Backup",
    role: "Flutter Developer",
    description: "A reliable utility application developed exclusively for iOS using Flutter to securely back up user contacts.",
    cause: "To provide a seamless backup solution for iOS users to safeguard their important contacts.",
    tags: ["Flutter", "iOS Only", "Utility", "Backup"],
  },
  {
    title: "pinnacleit.co",
    role: "Full Stack Developer",
    description: "An accessibility report generation platform that evaluates websites against the WCAG 2.0 standards, engineered with Node.js and React JS.",
    cause: "To ensure an inclusive digital experience by automating WCAG 2.0 accessibility audits for modern websites.",
    tags: ["React JS", "Node.js", "WCAG 2.0", "Accessibility"],
  },
];

function TiltCard({ project, index, onClick }: { project: ProjectType; index: number, onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [6, -6]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-6, 6]), { stiffness: 220, damping: 22 });

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
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(168, 85, 247, 0.18) 0%, transparent 65%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      style={{ perspective: 1000 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX, rotateY, transformStyle: "preserve-3d",
        }}
        className="relative group rounded-2xl p-8 min-h-[360px] h-full overflow-hidden transition-all duration-300 bg-slate-900/70 border border-slate-800/90 hover:border-purple-500/40 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_35px_rgba(168,85,247,0.15)]"
      >
        {/* Glow follow */}
        <motion.div className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300 opacity-50 group-hover:opacity-100" style={{ background: glowBg }} />

        {/* Top accent glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span
                  className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2 bg-purple-950/40 text-purple-400 border border-purple-800/40"
                >
                  {project.role}
                </span>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <Sparkles size={16} className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            <p className="mb-6 leading-relaxed text-base text-slate-300 line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950/60 text-slate-300 border border-slate-800/80 group-hover:border-purple-500/20 transition-colors"
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
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-slate-800/80">
      {/* Background ambient light - unified purple */}
      <div
        className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] rounded-full blur-[150px] -z-10 opacity-15 pointer-events-none"
        style={{ background: "#a855f7" }}
      />

      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-purple-400 bg-purple-950/40 border border-purple-800/40 mb-3"
          >
            Portfolio Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight"
          >
            Featured <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 max-w-xl mx-auto"
          >
            A curated collection of mobile applications, enterprise web backends, and AI solutions built with clean code and modern architecture. Click any project to view details.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-800 text-slate-400 hover:text-white rounded-full transition-colors z-20"
              >
                <X size={20} />
              </button>
              
              <div className="p-8">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-400 bg-purple-900/30 rounded-full mb-3">
                    {selectedProject.role}
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <div className="h-px w-full bg-slate-800 my-4" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <Sparkles size={18} className="text-purple-400" /> Overview
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-base">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  {selectedProject.cause && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <Sparkles size={18} className="text-purple-400" /> Objective / Cause
                      </h4>
                      <p className="text-slate-300 leading-relaxed text-base">
                        {selectedProject.cause}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 text-sm font-medium bg-slate-800 text-slate-200 border border-slate-700 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href="https://github.com/meermukhtar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors"
                    >
                      <Code size={18} /> View Source
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
