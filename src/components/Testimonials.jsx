import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { companyData } from '../data';

/* ── Auto-scroll hook ── */
const useAutoScroll = (ref, speed = 0.45) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame;
    let dir = 1;
    const step = () => {
      el.scrollLeft += speed * dir;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) dir = -1;
      if (el.scrollLeft <= 0) dir = 1;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    const pause = () => cancelAnimationFrame(frame);
    const resume = () => { frame = requestAnimationFrame(step); };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, [ref, speed]);
};

const TestimonialCard = ({ t }) => (
  <div
    className="flex-shrink-0 w-[300px] sm:w-auto flex flex-col justify-between p-7 sm:p-9 rounded-[32px] border border-slate-200/40 dark:border-white/10 bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
  >
    <Quote className="absolute top-7 right-7 w-9 h-9 text-brand/8 dark:text-white/5 pointer-events-none" />
    <div>
      <div className="flex gap-1 mb-5">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4" style={{ color: '#FF6B35', fill: '#FF6B35' }} />
        ))}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light italic">"{t.quote}"</p>
    </div>
    <div className="flex items-center gap-4 mt-7 pt-5 border-t border-slate-100 dark:border-slate-800">
      <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow" loading="lazy" />
      <div>
        <h4 className="text-sm font-bold text-brand dark:text-white font-poppins">{t.author}</h4>
        <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">{t.role}</p>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const list = companyData.testimonials;
  const mobileRef = useRef(null);
  useAutoScroll(mobileRef, 0.4);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 section-bg-alt overflow-hidden transition-colors duration-300">
      {/* Light navy glow bottom-right */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(11,31,90,0.06), transparent 70%)' }} />

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
            Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand dark:text-white font-poppins"
          >
            What Our Partners &amp; Travelers Say
          </motion.h2>
          <div className="w-12 h-1.5 rounded-full mx-auto mt-4" style={{ background: '#FF6B35' }} />
        </div>

        {/* Mobile auto-scroll */}
        <div
          ref={mobileRef}
          className="sm:hidden flex gap-5 overflow-x-auto no-scrollbar pb-4 scroll-snap-x px-1"
        >
          {list.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.13 }}
              whileHover={{ y: -5 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
