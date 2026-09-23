"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Code2, Globe, Send, Check } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#0a0f1d] border-t border-slate-800/80">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 mb-3">
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Let&apos;s Connect and Create <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            Have a project in mind or looking for a skilled developer to join your team? Feel free to reach out.
          </p>
        </div>

        {/* 2-Column Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          
          {/* Left: Get In Touch Form */}
          <div className="rounded-2xl p-7 sm:p-9 bg-slate-900/70 border border-slate-800/90 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, idea, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 focus:border-cyan-400 text-white placeholder-slate-500 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {submitted ? (
                    <>
                      <Check size={18} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Contact Information */}
          <div className="rounded-2xl p-7 sm:p-9 bg-slate-900/70 border border-slate-800/90 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                I am actively open to discussing full-time opportunities, high-impact freelance projects, and AI / mobile architecture consultations.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:ameermukhtar998@gmail.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/30 transition-all">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400">Email</p>
                    <p className="text-white font-medium group-hover:text-cyan-300 transition-colors">ameermukhtar998@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+923121561084"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/30 transition-all">
                    <Phone size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400">Phone</p>
                    <p className="text-white font-medium group-hover:text-cyan-300 transition-colors">+92 3121561084</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <MapPin size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400">Location</p>
                    <p className="text-white font-medium">Rawalpindi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-8 mt-8 border-t border-slate-800/80">
              <p className="text-xs font-mono uppercase text-slate-400 mb-3">Connect on Socials</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/meermukhtar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 text-white hover:text-cyan-300 transition-all flex items-center gap-2 text-sm font-medium"
                >
                  <Code2 size={16} className="text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/devmukh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 text-white hover:text-cyan-300 transition-all flex items-center gap-2 text-sm font-medium"
                >
                  <Globe size={16} className="text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Why Work With Me Banner */}
        <div className="rounded-2xl p-8 bg-gradient-to-r from-slate-900/90 via-cyan-950/30 to-slate-900/90 border border-cyan-500/20 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Why Work With Me?</h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I am passionate about creating exceptional digital experiences. With a keen eye for detail, clean modular code, and a commitment to excellence, I will bring your vision to life. Let&apos;s collaborate and turn your ideas into reality!
          </p>
        </div>

      </div>
    </section>
  );
}
