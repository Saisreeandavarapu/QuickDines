import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { companyData } from '../data';

/* ============================================================
   LOGO — Dark navy bg / white / brand light-blue accents.
============================================================ */
export const Logo = ({ light = true }) => {
  const fg = '#FFFFFF';
  const accent = '#93C5FD';

  return (
    <div className="flex items-center gap-3 select-none">
      {/* ── QR-style icon (4 rounded squares + 4 connector dots) ── */}
      <svg className="w-11 h-11 shrink-0" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top-Left square */}
        <rect x="6" y="6" width="28" height="28" rx="7" stroke={fg} strokeWidth="4.5" />
        <rect x="15" y="15" width="10" height="10" rx="4" fill={fg} />

        {/* Top-Right square */}
        <rect x="46" y="6" width="28" height="28" rx="7" stroke={fg} strokeWidth="4.5" />
        <rect x="55" y="15" width="10" height="10" rx="4" fill={accent} />

        {/* Bottom-Left square */}
        <rect x="6" y="46" width="28" height="28" rx="7" stroke={fg} strokeWidth="4.5" />
        <rect x="15" y="55" width="10" height="10" rx="4" fill={accent} />

        {/* Bottom-Right square — open corner, Quickdines signature style */}
        <path
          d="M53 46h18a7 7 0 0 1 7 7v18"
          stroke={fg}
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M46 53v18"
          stroke={fg}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <rect x="55" y="55" width="10" height="10" rx="3" fill={fg} />

        {/* Connector dots (centre cross) */}
        <circle cx="40" cy="20" r="2.5" fill={accent} />
        <circle cx="40" cy="60" r="2.5" fill={accent} />
        <circle cx="20" cy="40" r="2.5" fill={accent} />
        <circle cx="60" cy="40" r="2.5" fill={accent} />
      </svg>

      {/* ── Wordmark ── */}
      <div className="flex flex-col leading-none">
        <span
          className="text-[22px] font-extrabold tracking-tight font-poppins leading-tight text-white"
        >
          Quickdines
          <span style={{ color: accent, fontWeight: 400, fontSize: '14px', verticalAlign: 'super', marginLeft: '1px' }}>™</span>
        </span>
        <span
          className="text-[10px] font-semibold tracking-[0.18em] uppercase mt-0.5 text-white/60"
        >
          Smart Dining.
        </span>
      </div>
    </div>
  );
};

/* ============================================================
   NAVBAR
============================================================ */
const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'How It Works',href: '#how-it-works' },
  { label: 'Features',    href: '#features' },
  { label: 'Benefits',    href: '#benefits' },
  { label: 'Reviews',     href: '#testimonials' },
  { label: 'FAQ',         href: '#faq' },
  { label: 'Contact',     href: '#contact' },
];

export const Navbar = () => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const pos = window.scrollY + 120;
      for (const link of NAV_LINKS) {
        const id = link.href.slice(1);
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-navbar py-3 shadow-2xl shadow-black/25' : 'bg-brand py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="hover:opacity-90 transition-opacity">
          <Logo light />
        </a>

        {/* Desktop links */}
        <div className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map(l => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={id}
                href={l.href}
                className={`px-4 py-2 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-brand font-bold'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wide shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Download App</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hamburger */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden"
            style={{ background: 'rgba(7,21,61,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="px-5 py-6 flex flex-col gap-2 border-t border-white/10">
              {NAV_LINKS.map(l => {
                const id = l.href.slice(1);
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-white text-brand'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {l.label}
                  </a>
                );
              })}
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl text-sm font-bold tracking-wide shadow-lg transition-all"
              >
                Download App <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
