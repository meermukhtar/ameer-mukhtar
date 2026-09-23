"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type SkillItem = {
  name: string;
  icon: React.ReactNode;
};

// --- Custom Hand-Crafted SVGs for Expertise ---

const FlutterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
  </svg>
);

const MobileDevIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <path d="M12 18h.01" />
    <path d="M15 2h-6" />
    <path d="M10 6h4" />
    <path d="M9 10h6" />
  </svg>
);

const FirebaseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771-5.923 10.613zm15.717-1.39l-4.113-12.012a.541.541 0 0 0-1.025-.018L9.957 10.74l9.65 13.21a.541.541 0 0 0 .863-.046l3.155-9.615z" />
    <path d="M15.82 23.364l-5.864-12.63-5.918 10.62 5.093 5.088a1.623 1.623 0 0 0 2.296-.002l4.393-3.076z" />
  </svg>
);

const ApiIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M13.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.5L13.5 2Z" />
    <path d="M10 12l-2 2 2 2" />
    <path d="M14 12l2 2-2 2" />
  </svg>
);

const StoresIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l16 8-16 8V4z" />
    <circle cx="11" cy="12" r="3" />
  </svg>
);

const DjangoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="M8 8v8" />
    <path d="M12 8v8" />
    <path d="M16 8v8" />
  </svg>
);

const PostgresIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="12" rx="9" ry="5" />
    <path d="M12 7V3" />
    <path d="M12 21v-4" />
    <path d="M18 9l3-2" />
    <path d="M6 15l-3 2" />
    <path d="M18 15l3 2" />
    <path d="M6 9l-3-2" />
  </svg>
);

const GitIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="6" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="9" r="3" />
    <path d="M6 9v6" />
    <path d="M18 12c0 3.314-2.686 6-6 6H9" />
  </svg>
);

const AwsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 14.5c-1.5 0-2.5-1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5c0-2 1.5-3.5 3.5-3.5 2 0 3 1 3.5 2 1-1.5 3-2 4.5-1 1.5 1 2 3 1.5 4.5 1.5 0 3 1.5 3 3a3 3 0 0 1-3 3" />
    <path d="M14 17s-3.5 2-7 2-5-2-5-2" />
    <path d="M13 16l1 1-1 1" />
  </svg>
);

const AiRagIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M3 12h5M16 12h5M12 3v5M12 16v5M5.5 5.5l3.5 3.5M15 15l3.5 3.5M18.5 5.5L15 9M9 15l-3.5 3.5" />
  </svg>
);

const NodejsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
    <path d="M12 22V12" />
    <path d="M12 12L3 7" />
    <path d="M12 12l9-5" />
  </svg>
);

const skillsList: SkillItem[] = [
  { name: "Flutter", icon: <FlutterIcon className="w-[50px] h-[50px] text-purple-400 mb-4" /> },
  { name: "Android & iOS Apps", icon: <MobileDevIcon className="w-[50px] h-[50px] text-pink-400 mb-4" /> },
  { name: "Firebase", icon: <FirebaseIcon className="w-[50px] h-[50px] text-orange-500 mb-4" /> },
  { name: "REST API Integrations", icon: <ApiIcon className="w-[50px] h-[50px] text-purple-400 mb-4" /> },
  { name: "Play Console & App Store", icon: <StoresIcon className="w-[50px] h-[50px] text-blue-400 mb-4" /> },
  { name: "Django", icon: <DjangoIcon className="w-[50px] h-[50px] text-emerald-500 mb-4" /> },
  { name: "PostgreSQL", icon: <PostgresIcon className="w-[50px] h-[50px] text-pink-400 mb-4" /> },
  { name: "Git", icon: <GitIcon className="w-[50px] h-[50px] text-orange-600 mb-4" /> },
  { name: "AWS Deployment", icon: <AwsIcon className="w-[50px] h-[50px] text-purple-400 mb-4" /> },
  { name: "AI RAG Models", icon: <AiRagIcon className="w-[50px] h-[50px] text-pink-400 mb-4" /> },
  { name: "Node.js", icon: <NodejsIcon className="w-[50px] h-[50px] text-green-500 mb-4" /> },
];

export default function SkillsDisplay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isHovered) {
        scrollPos += 1;
        if (scrollPos >= container.scrollWidth / 2) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <div className="w-full relative overflow-hidden py-10">
      {/* Edge Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="flex overflow-x-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex shrink-0">
          {skillsList.map((skill, idx) => (
            <motion.div
              key={`set1-${skill.name}-${idx}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex-shrink-0 w-56 snap-center mx-4"
            >
              <div className="bg-white/5 border border-white/10 hover:border-purple-500/50 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_35px_rgba(168,85,247,0.2)] p-8 flex flex-col items-center justify-center h-56 transition-all duration-300 group cursor-default">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="text-center font-bold text-lg text-slate-200 group-hover:text-purple-400 transition-colors mt-2">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Duplicate list for seamless infinite scroll */}
        <div className="flex shrink-0">
          {skillsList.map((skill, idx) => (
            <div
              key={`set2-${skill.name}-${idx}`}
              className="flex-shrink-0 w-56 snap-center mx-4"
            >
              <div className="bg-white/5 border border-white/10 hover:border-purple-500/50 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_35px_rgba(168,85,247,0.2)] p-8 flex flex-col items-center justify-center h-56 transition-all duration-300 group cursor-default">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="text-center font-bold text-lg text-slate-200 group-hover:text-purple-400 transition-colors mt-2">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
