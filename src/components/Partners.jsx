import React from 'react';
import { motion } from 'framer-motion';
import { companyData } from '../data';

export const Partners = () => {
  const { title, subtitle, categories } = companyData.partners;

  return (
    <section className="py-20 sm:py-24 section-bg-alt border-y border-slate-200/40 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand dark:text-white font-poppins">{title}</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light max-w-lg mx-auto">{subtitle}</p>
          <div className="w-10 h-1 rounded-full mx-auto mt-3" style={{ background: '#FF6B35' }} />
        </div>

        <div className="flex flex-col gap-12">
          {categories.map((cat, cIdx) => (
            <div key={cIdx} className="flex flex-col items-center">
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">{cat.name}</h3>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full max-w-5xl">
                {cat.logos.map((name, lIdx) => (
                  <motion.div
                    key={lIdx}
                    whileHover={{ scale: 1.04, borderColor: 'rgba(59,130,246,0.25)' }}
                    className="px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/10 shadow-sm text-xs sm:text-sm font-bold tracking-wide text-brand dark:text-white min-w-[140px] sm:min-w-[170px] h-[54px] flex items-center justify-center gap-2.5 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full flex-shrink-0 bg-blue-500" />
                    <span className="opacity-60 dark:opacity-80">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
