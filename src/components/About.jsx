import React from 'react';
import { ArrowRight, Award, FolderKanban, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ darkMode }) {
  return (
    <section 
      id="about" 
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual: male-about.png inside glowing purple organic circle */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Glowing Organic Violet Backdrop */}
            <div className="relative w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] flex items-center justify-center">
              
              {/* Outer Pulsing Glow */}
              <div 
                className="absolute inset-0 rounded-full blur-[60px] opacity-60 animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(124, 58, 237, 0.3) 60%, transparent 80%)'
                }}
              />

              {/* Decorative Rotating Border Ring */}
              <div className="absolute inset-2 rounded-full border border-dashed border-purple-400/30 animate-spin-slow pointer-events-none" />

              {/* Solid Organic Background Circle */}
              <div 
                className={`relative w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full overflow-hidden flex items-end justify-center shadow-2xl ${
                  darkMode 
                    ? 'bg-gradient-to-b from-purple-900/40 via-[#180d30] to-[#0b0418] border-2 border-purple-500/40' 
                    : 'bg-gradient-to-b from-purple-200 via-purple-100 to-white border-2 border-purple-300'
                }`}
              >
                {/* 3D Character Image (Suit Pose) */}
                <img
                  src="/images/male-about.png"
                  alt="Rajkishore Pradhan - SAP Technology Consultant"
                  className="w-[90%] h-[90%] object-contain object-bottom drop-shadow-[0_15px_25px_rgba(124,58,237,0.4)] select-none hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Verified Badge */}
              <div 
                className={`absolute -bottom-2 right-4 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-md ${
                  darkMode
                    ? 'bg-[#180d30]/95 border border-purple-500/40 text-purple-200'
                    : 'bg-white/95 border border-purple-200 text-purple-900'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold">SAP Certified</span>
              </div>
            </div>

          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Tag Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                darkMode
                  ? 'bg-purple-950/70 text-purple-300 border border-purple-500/30 shadow-glow-sm'
                  : 'bg-purple-100 text-purple-800 border border-purple-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              ABOUT ME
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span className={darkMode ? 'text-white' : 'text-[#1e1b4b]'}>
                {personalInfo.aboutHeading}
              </span>
            </h2>

            {/* Description */}
            <p className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300/90' : 'text-slate-600'
            }`}>
              {personalInfo.aboutDescription}
            </p>

            {/* 3 Stat Counter Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* Stat 1: SAP Certifications */}
              <div 
                className={`p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                  darkMode 
                    ? 'glass-dark border-purple-500/20 hover:border-purple-500/40 hover:shadow-glow-sm' 
                    : 'glass-light border-purple-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-neon-purple">
                    {personalInfo.stats[0].value}
                  </span>
                  <Award className="w-6 h-6 text-purple-400/80" />
                </div>
                <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {personalInfo.stats[0].label}
                </p>
              </div>

              {/* Stat 2: Enterprise & Tech Projects */}
              <div 
                className={`p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                  darkMode 
                    ? 'glass-dark border-purple-500/20 hover:border-purple-500/40 hover:shadow-glow-sm' 
                    : 'glass-light border-purple-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-neon-purple">
                    {personalInfo.stats[1].value}
                  </span>
                  <FolderKanban className="w-6 h-6 text-purple-400/80" />
                </div>
                <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {personalInfo.stats[1].label}
                </p>
              </div>

              {/* Stat 3: Process Compliance */}
              <div 
                className={`p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                  darkMode 
                    ? 'glass-dark border-purple-500/20 hover:border-purple-500/40 hover:shadow-glow-sm' 
                    : 'glass-light border-purple-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-neon-purple">
                    {personalInfo.stats[2].value}
                  </span>
                  <ShieldCheck className="w-6 h-6 text-purple-400/80" />
                </div>
                <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {personalInfo.stats[2].label}
                </p>
              </div>

            </div>

            {/* CTA Button: Let's Talk -> */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-glow-btn hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
