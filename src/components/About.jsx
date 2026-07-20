import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icon';
import { ShieldAlert, Sparkles } from 'lucide-react';
import { companyData } from '../data';

export const About = () => {
  const { title, subtitle, problem, solution } = companyData.about;

  return (
    <section id="about" className="relative py-24 sm:py-32 section-bg overflow-hidden transition-colors duration-300">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      {/* Brand blue glow */}
      <div className="absolute top-0 right-0 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'var(--surface-alt)', color: 'var(--txt)' }}
          >
            {title}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand dark:text-white font-poppins"
          >
            {subtitle}
          </motion.h2>
          <div className="w-12 h-1.5 rounded-full mx-auto mt-4" style={{ background: '#FF6B35' }} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65 }}
            className="relative flex flex-col p-8 sm:p-10 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-[80px] pointer-events-none" style={{ background: 'rgba(239,68,68,0.05)' }} />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-900/30 text-red-500">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/30 text-red-500">
                {problem.tag}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-poppins text-brand dark:text-white mb-3">{problem.title}</h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">{problem.description}</p>
            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-xs font-semibold text-slate-400 dark:text-slate-500">
              <Icon name="TrendingDown" className="w-4 h-4 text-red-400" />
              <span>Average highway delays: 25–30 minutes per stop.</span>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65 }}
            className="relative flex flex-col p-8 sm:p-10 rounded-[32px] text-white overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg,#07153D 0%,#0B1F5A 60%,#162880 100%)',
              boxShadow: '0 24px 60px rgba(11,31,90,0.25)',
            }}
          >
            {/* Glass sheen */}
            <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />
            <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-[100px] pointer-events-none" style={{ background: 'rgba(255,107,53,0.12)' }} />

            <div className="relative flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl" style={{ background: 'rgba(255,107,53,0.2)', border: '1px solid rgba(255,107,53,0.25)' }}>
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-primary" style={{ background: 'rgba(255,107,53,0.15)' }}>
                {solution.tag}
              </span>
            </div>
            <h3 className="relative text-xl sm:text-2xl font-bold font-poppins text-white mb-3">{solution.title}</h3>
            <p className="relative text-sm sm:text-base text-white/60 leading-relaxed font-light">{solution.description}</p>
            <div className="relative mt-8 pt-5 border-t border-white/10 flex items-center gap-3 text-xs font-semibold text-primary">
              <Icon name="Zap" className="w-4 h-4 animate-bounce" />
              <span>Instantly syncs with bus real-time GPS coordinates.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
