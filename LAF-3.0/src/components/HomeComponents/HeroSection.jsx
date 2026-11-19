import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import heroBgImage from '../../assets/images/hero-image.png';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[760px] flex items-center overflow-hidden bg-[#07090E] font-sans select-none text-white">
      {/* ================= 1. FULL WIDTH BACKGROUND IMAGE ================= */}
      {/* Spans the entire width so historical architecture on the left and stadium on the right are both present */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-center scale-[1.01] brightness-[1.05] contrast-[1.02] pointer-events-none"
        style={{
          backgroundImage: `url(${heroBgImage})`,
        }}
      />

      {/* ================= 2. BALANCED SHADED OVERLAYS ================= */}
      {/* Soft horizontal gradient: Left side has a dark cinematic shade so text is crystal clear while palace domes are softly visible; Right side stays bright and vibrant */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090E]/90 via-[#07090E]/65 sm:via-[#07090E]/55 to-[#07090E]/20 pointer-events-none" />

      {/* Soft radial focal tint behind the text on the left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full sm:w-[650px] h-[550px] bg-[radial-gradient(ellipse_at_left,rgba(7,9,14,0.65)_0%,transparent_75%)] pointer-events-none" />

      {/* Top & Bottom Cinematic Edge Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/70 via-transparent to-[#07090E]/80 pointer-events-none" />

      {/* Ambient warm golden glow accent */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-rose-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* ================= 3. HERO CONTENT (LEFT ALIGNED) ================= */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-18 lg:py-20">
        <div className="w-full max-w-3xl lg:max-w-3xl xl:max-w-4xl text-left">
          
          {/* Festival Name Header with Accent Line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-2 sm:mb-3"
          >
            <span className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full" />
            <h2 className="text-xs sm:text-[13px] md:text-sm font-bold tracking-[0.26em] uppercase text-amber-200 font-mono drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
              LUCKNOW ARCHITECTURE FESTIVAL
            </h2>
          </motion.div>

          {/* LAF 3.0 MAIN EMBLEM / HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="my-2 sm:my-3"
          >
            <h1 className="font-sans font-black tracking-[-0.03em] leading-[0.95] flex items-baseline gap-3 sm:gap-4 select-none">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[104px] bg-gradient-to-b from-[#FFFDF0] via-[#FFC72C] to-[#E68A00] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,199,44,0.38)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                LAF
              </span>
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[104px] bg-gradient-to-b from-[#FFFFFF] via-[#FFF3CC] to-[#FFC72C] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(255,199,44,0.32)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                3.0
              </span>
            </h1>
          </motion.div>

          {/* 3 Pillars Badge: Exposition • Symposium • Workshop (from Image 2) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-[12.5px] font-semibold tracking-wider text-amber-200/95 uppercase mb-5 sm:mb-6"
          >
            <span className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md shadow-sm">
              Exposition
            </span>
            <span className="text-amber-400 text-xs">✦</span>
            <span className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md shadow-sm">
              Symposium
            </span>
            <span className="text-amber-400 text-xs">✦</span>
            <span className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md shadow-sm">
              Workshop
            </span>
          </motion.div>

          {/* ================= THEME (HIGHLIGHTED TYPOGRAPHY, NO BOX) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mb-5 sm:mb-6"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] xl:text-[32px] font-black tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              <span className="bg-gradient-to-r from-[#FFFFFF] via-[#E2E8F0] to-[#BAE6FD] bg-clip-text text-transparent">
                Expressway Pradesh,{' '}
              </span>
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                Vision 2047
              </span>
            </h3>
            <div className="flex items-center gap-2.5 mt-1.5 sm:mt-2">
              <span className="h-[2px] w-6 sm:w-8 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
              <p className="font-serif italic text-base sm:text-lg md:text-xl font-bold tracking-wide text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Designing the Future
              </p>
            </div>
          </motion.div>

          {/* ================= 1. EVENT DATES (STANDALONE ROW, EXPANDED WIDTH) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mb-5 sm:mb-6"
          >
            <div className="inline-flex items-center gap-5 sm:gap-7 px-6 sm:px-8 py-3.5 rounded-2xl bg-black/55 border border-amber-400/45 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2.5 sm:gap-3 text-2xl sm:text-3xl md:text-[28px] font-sans font-black tracking-tight tabular-nums leading-none bg-gradient-to-b from-[#FFF2B2] via-[#FFC72C] to-[#FFA000] bg-clip-text text-transparent">
                <span className="inline-block leading-none">22</span>
                <span className="text-amber-400/40 text-base font-light leading-none">|</span>
                <span className="inline-block leading-none">23</span>
                <span className="text-amber-400/40 text-base font-light leading-none">|</span>
                <span className="inline-block leading-none">24</span>
              </div>
              <div className="pl-4 sm:pl-5 border-l border-white/20 text-left">
                <span className="flex items-center gap-1.5 text-[9.5px] sm:text-[10px] uppercase tracking-[0.18em] font-bold text-amber-300 leading-none">
                  <Calendar className="w-3.5 h-3.5 text-amber-300" />
                  EVENT DATES
                </span>
                <span className="block text-xs sm:text-sm md:text-base font-bold text-white tracking-wide mt-1">
                  January 2027
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= 2. ACTION BUTTONS (BELOW DATES, SIDE BY SIDE) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="flex flex-row items-center gap-3.5 sm:gap-4 flex-wrap sm:flex-nowrap"
          >
            {/* Register Button */}
            <Link
              to="/register"
              className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-extrabold text-xs sm:text-[13px] uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#FFB800] via-[#FFAE00] to-[#FF9E00] border border-amber-200/90 shadow-[0_4px_22px_rgba(255,184,0,0.45)] hover:shadow-[0_6px_30px_rgba(255,184,0,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden shrink-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="w-4 h-4 fill-neutral-950 text-neutral-950" />
                Register Now
              </span>
            </Link>

            {/* Explore Agenda Button */}
            <a
              href="#agenda"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-[13px] uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 hover:border-amber-300 hover:text-amber-300 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 shrink-0"
            >
              Explore Agenda
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom Luxury Gold Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC107]/70 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
