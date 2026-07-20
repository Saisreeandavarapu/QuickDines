import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { companyData } from '../data';

const Item = ({ q, a, open, toggle }) => (
  <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/10 shadow-sm mb-4 overflow-hidden hover:shadow-md hover:border-slate-350/80 transition-all duration-300">
    <button
      onClick={toggle}
      className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
    >
      <span className="text-sm sm:text-base font-bold text-brand dark:text-white font-poppins pr-4">{q}</span>
      <ChevronDown
        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-primary' : 'text-slate-400'}`}
      />
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">{a}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32 section-bg overflow-hidden transition-colors duration-300">
      <div className="absolute top-10 left-10 w-[240px] h-[240px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.06), transparent 70%)' }} />

      <div className="max-w-4xl mx-auto px-5 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'var(--surface-alt)', color: 'var(--txt)' }}
          >
            Support
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand dark:text-white font-poppins"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="w-12 h-1.5 rounded-full mx-auto mt-4" style={{ background: '#FF6B35' }} />
        </div>

        <div className="max-w-3xl mx-auto">
          {companyData.faqs.map((f, i) => (
            <Item
              key={i}
              q={f.question}
              a={f.answer}
              open={openIdx === i}
              toggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
