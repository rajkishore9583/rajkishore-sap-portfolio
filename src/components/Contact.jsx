import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, MessageSquare, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate real form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div 
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
              darkMode
                ? 'bg-purple-950/70 text-purple-300 border border-purple-500/30 shadow-glow-sm'
                : 'bg-purple-100 text-purple-800 border border-purple-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            LET'S CONNECT
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            <span className={darkMode ? 'text-white' : 'text-[#1e1b4b]'}>Get In </span>
            <span className="text-neon-purple">Touch</span>
          </h2>

          <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Have an open SAP Technology Consultant role, enterprise project, or want to discuss digital transformation? I'd love to hear from you.
          </p>
        </div>

        {/* Two-Column Layout: Left Visual (male-contact.png) & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: male-contact.png + Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-6">
            
            {/* Mascot Container with Radial Glow */}
            <div className="relative w-[280px] sm:w-[340px] aspect-square flex items-center justify-center">
              
              <div 
                className="absolute inset-0 rounded-full blur-[70px] -z-10 animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, rgba(124, 58, 237, 0.2) 60%, transparent 75%)'
                }}
              />

              <img
                src="/images/male-contact.png"
                alt="Rajkishore Pradhan - Get in Touch Mascot"
                className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(124,58,237,0.35)] animate-float-slow select-none pointer-events-none"
              />
            </div>

            {/* Quick Contact Info Chips */}
            <div className="w-full space-y-3">
              {/* Email */}
              <div 
                className={`p-3.5 rounded-2xl flex items-center justify-between transition-all ${
                  darkMode 
                    ? 'glass-dark border-purple-500/20' 
                    : 'glass-light border-purple-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-purple-400">Email Me</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className={`text-xs font-semibold hover:underline ${darkMode ? 'text-white' : 'text-slate-800'}`}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-lg text-purple-400 hover:text-white transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div 
                className={`p-3.5 rounded-2xl flex items-center justify-between transition-all ${
                  darkMode 
                    ? 'glass-dark border-purple-500/20' 
                    : 'glass-light border-purple-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-purple-400">Call Me</div>
                    <a 
                      href={personalInfo.socials.phone}
                      className={`text-xs font-semibold hover:underline ${darkMode ? 'text-white' : 'text-slate-800'}`}
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div 
                className={`p-3.5 rounded-2xl flex items-center gap-3 transition-all ${
                  darkMode 
                    ? 'glass-dark border-purple-500/20' 
                    : 'glass-light border-purple-200'
                }`}
              >
                <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-purple-400">Location</div>
                  <div className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                    {personalInfo.location}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <div 
              className={`p-8 sm:p-10 rounded-3xl transition-all duration-300 relative ${
                darkMode
                  ? 'glass-dark border-purple-500/30 shadow-glow'
                  : 'glass-light border-purple-200 shadow-xl'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-[#1e1b4b]'}`}>
                Send a Message
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Fill in the details below and I'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-purple-900/30 border border-purple-500/40 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-purple-200">
                    Thank you for reaching out, Rajkishore will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Satya Nadella"
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all outline-none ${
                        darkMode
                          ? 'bg-[#0b0418]/70 border border-purple-500/30 text-white placeholder-slate-500 focus:border-purple-400 focus:ring-1 focus:ring-purple-400'
                          : 'bg-white border border-purple-200 text-slate-800 placeholder-slate-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                      }`}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all outline-none ${
                        darkMode
                          ? 'bg-[#0b0418]/70 border border-purple-500/30 text-white placeholder-slate-500 focus:border-purple-400 focus:ring-1 focus:ring-purple-400'
                          : 'bg-white border border-purple-200 text-slate-800 placeholder-slate-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                      }`}
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your enterprise project, SAP S/4HANA implementation, or role..."
                      className={`w-full px-4 py-3 rounded-xl text-sm transition-all outline-none resize-none ${
                        darkMode
                          ? 'bg-[#0b0418]/70 border border-purple-500/30 text-white placeholder-slate-500 focus:border-purple-400 focus:ring-1 focus:ring-purple-400'
                          : 'bg-white border border-purple-200 text-slate-800 placeholder-slate-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                      }`}
                    />
                  </div>

                  {/* Submit Button: Solid Purple */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-glow-btn hover:shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
