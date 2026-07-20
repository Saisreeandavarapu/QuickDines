import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { companyData } from '../data';

const Counter = ({ value, duration = 1.8 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    const end = parseInt(value, 10);
    if (isNaN(end)) { setCount(value); return; }
    const totalMs = duration * 1000;
    const fps = 60;
    const frames = Math.round((totalMs / 1000) * fps);
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      const progress = frame / frames;
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * end));
      if (frame >= frames) clearInterval(id);
    }, totalMs / frames);
    return () => clearInterval(id);
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export const Statistics = () => (
  <section
    className="relative py-16 sm:py-20 overflow-hidden"
    style={{ background: 'linear-gradient(135deg,#07153D 0%,#0B1F5A 60%,#162880 100%)' }}
  >
    {/* Decorative dot bg */}
    <div className="absolute inset-0 dot-bg pointer-events-none" />
    {/* Orange radial accent */}
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,rgba(255,107,53,0.12),transparent 65%)' }} />

    <div className="max-w-7xl mx-auto px-5 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {companyData.stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center text-center p-6 rounded-3xl group transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div
              className="text-3xl sm:text-4xl lg:text-5xl font-black font-poppins group-hover:scale-105 transition-transform duration-300"
              style={{ color: '#FF6B35' }}
            >
              <Counter value={stat.value} />
              <span>{stat.suffix}</span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold tracking-wide mt-4 text-white/90 uppercase">{stat.label}</h3>
            <p className="text-[11px] text-white/40 mt-1.5 font-medium">{stat.subtext}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Statistics;
