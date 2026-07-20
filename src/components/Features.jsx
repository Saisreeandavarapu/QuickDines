import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icon';
import { companyData } from '../data';

/* ── Auto-scrolling carousel for sm screens — pauses on page scroll ── */
const useAutoScroll = (ref, speed = 0.6) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame;
    let direction = 1;
    let paused = false;
    let scrollTimer;

    const step = () => {
      if (!paused && el) {
        el.scrollLeft += speed * direction;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) direction = -1;
        if (el.scrollLeft <= 0) direction = 1;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    // Pause while user scrolls the page vertically
    const onWindowScroll = () => {
      paused = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => { paused = false; }, 400);
    };

    // Pause on element hover/touch
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

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    whileHover={{ y: -6 }}
    className="flex-shrink-0 w-[240px] sm:w-auto p-6 sm:p-8 rounded-[28px] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-brand/20 dark:hover:border-blue-500/30 transition-all duration-300 group flex flex-col"
  >
    <div
      className="p-4 rounded-2xl mb-5 border border-transparent bg-slate-100 dark:bg-slate-800 text-brand dark:text-blue-400 group-hover:border-brand/10 dark:group-hover:border-white/10 transition-all duration-300"
    >
      <div className="group-hover:text-primary transition-colors duration-300">
        <Icon name={feature.icon} className="w-6 h-6" />
      </div>
    </div>
    <h3 className="text-base font-bold text-brand dark:text-white font-poppins mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">{feature.description}</p>
  </motion.div>
);

export const Features = () => {
  const { title, subtitle, items } = companyData.features;
  const mobileRef = useRef(null);
  useAutoScroll(mobileRef, 0.55);

  return (
    <section id="features" className="relative py-24 sm:py-32 section-bg-alt overflow-hidden transition-colors duration-300">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse,rgba(11,31,90,0.06),transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'var(--surface-alt)', color: 'var(--txt)' }}
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand dark:text-white font-poppins"
          >
            {title}
          </motion.h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-light leading-relaxed">{subtitle}</p>
          <div className="w-12 h-1.5 rounded-full mx-auto mt-4" style={{ background: '#FF6B35' }} />
        </div>

        {/* Mobile: auto-scroll carousel */}
        <div
          ref={mobileRef}
          className="sm:hidden flex gap-4 overflow-x-auto no-scrollbar pb-4 scroll-snap-x px-1"
        >
          {items.map((f, i) => <FeatureCard key={i} feature={f} index={i} />)}
        </div>

        {/* Tablet + Desktop: normal responsive grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {items.map((f, i) => <FeatureCard key={i} feature={f} index={i} />)}
        </div>

      </div>
    </section>
  );
};

export default Features;
