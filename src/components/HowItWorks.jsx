import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icon';
import { companyData } from '../data';

/* ── Mobile auto-scroll hook — pauses on page scroll ── */
const useAutoScroll = (ref, speed = 0.45) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame;
    let dir = 1;
    let paused = false;
    let scrollTimer;

    const step = () => {
      if (!paused && el) {
        el.scrollLeft += speed * dir;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) dir = -1;
        if (el.scrollLeft <= 0) dir = 1;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    const onWindowScroll = () => {
      paused = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => { paused = false; }, 400);
    };

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume);
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(scrollTimer);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, [ref, speed]);
};

/*
  Wave layout for 7 steps:
  Each step alternates above/below the wave.
  Odd steps (0,2,4,6) → ABOVE the wave line (content below bubble)
  Even steps (1,3,5)  → BELOW the wave line (content above bubble)
  
  The wave SVG spans the full section width.
  Bubble positions are calculated as percentages across the wave.
*/

const STEP_POSITIONS = [
  // [xPercent, isAbove]
  [6,   true ],   // Step 01 — top-left peak (above)
  [20,  false],   // Step 02 — trough (below)
  [34,  true ],   // Step 03 — peak (above)
  [48,  false],   // Step 04 — trough (below)
  [62,  true ],   // Step 05 — peak (above)
  [76,  false],   // Step 06 — trough (below)
  [90,  true ],   // Step 07 — peak (above)
];

export const HowItWorks = () => {
  const { title, subtitle, steps } = companyData.howItWorks;
  const mobileRef = useRef(null);
  useAutoScroll(mobileRef, 0.4);

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 section-bg overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.07), transparent 70%)' }}
      />

      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-20 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 text-blue-400"
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-poppins leading-tight"
          >
            Make Your Journey Manage Everything For You!
          </motion.h2>
          <p className="mt-5 text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* ── MOBILE: Auto-Scroll Carousel ── */}
        <div
          ref={mobileRef}
          className="lg:hidden flex gap-5 overflow-x-auto no-scrollbar pb-6 scroll-snap-x px-2"
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[280px] p-6 rounded-[28px] border border-white/8 bg-slate-900/80 shadow-lg flex flex-col items-center text-center"
            >
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-4">
                Step — {step.step}
              </span>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}>
                <Icon name={step.icon} className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white font-poppins mb-2">{step.title}</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: Wide Horizontal Wave Layout ── */}
        <div className="hidden lg:block relative w-full" style={{ minHeight: '480px' }}>

          {/* SVG Wave line spanning full width */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full pointer-events-none z-0" style={{ height: '220px' }}>
            <svg
              viewBox="0 0 1400 220"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Subtle background wave */}
              <path
                d="M 0 110 C 100 165, 100 55, 200 110 C 300 165, 300 55, 400 110 C 500 165, 500 55, 600 110 C 700 165, 700 55, 800 110 C 900 165, 900 55, 1000 110 C 1100 165, 1100 55, 1200 110 C 1300 165, 1300 55, 1400 110"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="2.5"
                strokeDasharray="10 8"
                strokeLinecap="round"
              />
              {/* Animated glowing wave */}
              <motion.path
                d="M 0 110 C 100 165, 100 55, 200 110 C 300 165, 300 55, 400 110 C 500 165, 500 55, 600 110 C 700 165, 700 55, 800 110 C 900 165, 900 55, 1000 110 C 1100 165, 1100 55, 1200 110 C 1300 165, 1300 55, 1400 110"
                stroke="url(#wave-gradient)"
                strokeWidth="2.5"
                strokeDasharray="16 12"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Wave node dots at each step position */}
              {/* Step 01 - x~84px (6%) top */}
              <circle cx="84"   cy="110" r="5" fill="#3B82F6" opacity="0.9" />
              {/* Step 02 - x~280px (20%) bottom */}
              <circle cx="280"  cy="110" r="5" fill="#3B82F6" opacity="0.9" />
              {/* Step 03 - x~476px (34%) top */}
              <circle cx="476"  cy="110" r="5" fill="#3B82F6" opacity="0.9" />
              {/* Step 04 - x~672px (48%) bottom */}
              <circle cx="672"  cy="110" r="5" fill="#3B82F6" opacity="0.9" />
              {/* Step 05 - x~868px (62%) top */}
              <circle cx="868"  cy="110" r="5" fill="#3B82F6" opacity="0.9" />
              {/* Step 06 - x~1064px (76%) bottom */}
              <circle cx="1064" cy="110" r="5" fill="#3B82F6" opacity="0.9" />
              {/* Step 07 - x~1260px (90%) top */}
              <circle cx="1260" cy="110" r="5" fill="#3B82F6" opacity="0.9" />

              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#1D4ED8" />
                  <stop offset="50%"  stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps positioned along the wave */}
          <div className="relative w-full z-10" style={{ height: '480px' }}>
            {steps.map((step, idx) => {
              const [xPercent, isAbove] = STEP_POSITIONS[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  className="absolute flex flex-col items-center text-center group"
                  style={{
                    left: `${xPercent}%`,
                    transform: 'translateX(-50%)',
                    top: isAbove ? '30px' : 'auto',
                    bottom: isAbove ? 'auto' : '30px',
                    width: '165px',
                  }}
                >
                  {isAbove ? (
                    /* Content ABOVE the line: text first, then bubble at bottom */
                    <>
                      {/* Step pill */}
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-400 mb-2">
                        Step — {step.step}
                      </span>
                      {/* Title */}
                      <h3 className="text-sm font-bold text-white font-poppins leading-tight mb-1.5 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      {/* Description */}
                      <p className="text-[11px] text-slate-400 font-light leading-relaxed mb-4">
                        {step.description}
                      </p>
                      {/* Bubble connector down to line */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-500/30 group-hover:scale-110 transition-transform duration-300"
                        style={{ background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)' }}
                      >
                        <Icon name={step.icon} className="w-5 h-5 text-white" />
                      </div>
                    </>
                  ) : (
                    /* Content BELOW the line: bubble first, then text */
                    <>
                      {/* Bubble connector up to line */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-500/30 group-hover:scale-110 transition-transform duration-300 mb-4"
                        style={{ background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)' }}
                      >
                        <Icon name={step.icon} className="w-5 h-5 text-white" />
                      </div>
                      {/* Step pill */}
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-400 mb-2">
                        Step — {step.step}
                      </span>
                      {/* Title */}
                      <h3 className="text-sm font-bold text-white font-poppins leading-tight mb-1.5 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      {/* Description */}
                      <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
