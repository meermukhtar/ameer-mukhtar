"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const onMouseEnterInteractive = () => {
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.borderColor = "rgba(139,92,246,0.8)";
      ring.style.background = "rgba(139,92,246,0.08)";
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(1.8)`;
    };
    const onMouseLeaveInteractive = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(99,102,241,0.6)";
      ring.style.background = "transparent";
    };

    // Lag ring follow
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animateRing);
    };
    animateRing();

    // Attach to all interactive elements
    const interactables = document.querySelectorAll("a, button, [role='button'], input, textarea, [data-interactive]");
    interactables.forEach(el => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    // Re-observe for dynamic elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, [data-interactive]").forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6096ba, #274c77)",
          boxShadow: "0 0 10px rgba(96,150,186,0.8), 0 0 20px rgba(96,150,186,0.3)",
          transition: "transform 0.08s ease",
        }}
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid rgba(96,150,186,0.7)",
          background: "transparent",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease",
        }}
      />
    </>
  );
}
