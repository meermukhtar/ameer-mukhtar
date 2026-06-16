"use client";

import { Code, Globe, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-10" style={{ background: "#274c77", borderTop: "1px solid #6096ba" }}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block" style={{ color: "#e7ecef" }}>
              MAM<span style={{ color: "#6096ba" }}>.</span>
            </Link>
            <p className="mb-6 max-w-sm leading-relaxed text-sm" style={{ color: "#6096ba" }}>
              Passionate about creating exceptional digital experiences. With a keen eye for detail and a commitment to excellence.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="https://github.com/meermukhtar" icon={<Code size={18} />} />
              <SocialIcon href="https://www.linkedin.com/in/devmukh/" icon={<Globe size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-6" style={{ color: "#e7ecef" }}>Quick Links</h4>
            <ul className="space-y-3">
              {["#home", "#skills", "#projects"].map((href, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-sm transition-colors"
                    style={{ color: "#6096ba" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#e7ecef")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6096ba")}
                  >
                    {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-6" style={{ color: "#e7ecef" }}>Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm" style={{ color: "#6096ba" }}>
                <MapPin size={18} className="shrink-0 mt-0.5" style={{ color: "#6096ba" }} />
                <span>Rawalpindi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="shrink-0" style={{ color: "#6096ba" }} />
                <a href="tel:+923121561084" className="transition-colors" style={{ color: "#6096ba" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#e7ecef")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6096ba")}
                >
                  +92 3121561084
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="shrink-0" style={{ color: "#6096ba" }} />
                <a href="mailto:ameermukhtar998@gmail.com" className="transition-colors" style={{ color: "#6096ba" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#e7ecef")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6096ba")}
                >
                  ameermukhtar998@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid #6096ba" }}
        >
          <p className="text-sm" style={{ color: "#6096ba" }}>
            © {new Date().getFullYear()} Muhammad Ameer Mukhtar. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "#6096ba" }}>Built with Next.js & Three.js</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 rounded-full transition-all"
      style={{ background: "rgba(96,150,186,0.2)", color: "#6096ba", border: "1px solid #6096ba" }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.background = "rgba(96,150,186,0.4)";
        (e.currentTarget as HTMLElement).style.color = "#e7ecef";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = "rgba(96,150,186,0.2)";
        (e.currentTarget as HTMLElement).style.color = "#6096ba";
      }}
    >
      {icon}
    </a>
  );
}
