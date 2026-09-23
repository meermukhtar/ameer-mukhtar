"use client";

import { Code, Globe, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-12 bg-[#0a0f1d] border-t border-slate-800/80">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-1.5 text-3xl font-bold tracking-tight text-white mb-4">
              <span className="font-mono text-purple-400 font-black">&lt;</span>
              <span className="font-mono tracking-wider">MAM</span>
              <span className="font-mono text-purple-400 font-black">/&gt;</span>
            </Link>
            <p className="mb-6 max-w-sm leading-relaxed text-base text-slate-400">
              Full Stack &amp; Mobile Engineer dedicated to crafting robust digital solutions, cross-platform apps, and intelligent AI architectures.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="https://github.com/meermukhtar" icon={<Code size={20} />} label="GitHub" />
              <SocialIcon href="https://www.linkedin.com/in/devmukh/" icon={<Globe size={20} />} label="LinkedIn" />
              <SocialIcon href="mailto:ameermukhtar998@gmail.com" icon={<Mail size={20} />} label="Email" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-6 text-white tracking-wide font-mono uppercase text-purple-400">Navigation</h4>
            <ul className="space-y-4">
              {["#home", "#skills", "#projects"].map((href, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-base text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-6 text-white tracking-wide font-mono uppercase text-purple-400">Get In Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-base text-slate-400">
                <MapPin size={20} className="shrink-0 mt-0.5 text-purple-400" />
                <span>Rawalpindi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Phone size={20} className="shrink-0 text-purple-400" />
                <a
                  href="tel:+923121561084"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +92 3121561084
                </a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Mail size={20} className="shrink-0 text-purple-400" />
                <a
                  href="mailto:ameermukhtar998@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  ameermukhtar998@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-800/60"
        >
          <p className="text-base text-slate-400">
            © {new Date().getFullYear()} Muhammad Ameer Mukhtar. All rights reserved.
          </p>
          <p className="text-base text-slate-400 font-mono">Built with Next.js 16 • Tailwind CSS • Three.js</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-xl bg-slate-900/80 text-slate-400 hover:text-purple-400 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-800/80 transition-all hover:scale-110 active:scale-95 duration-200"
    >
      {icon}
    </a>
  );
}
