import React from 'react';
import { Logo } from './Navbar';
import { Heart } from 'lucide-react';
import { companyData } from '../data';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  {
    label: 'X (Twitter)',
    href: '#',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Facebook',
    href: '#',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#07153D 0%,#0B1F5A 60%,#0F172A 100%)' }}
    >
      {/* Dot texture */}
      <div className="absolute inset-0 dot-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">

          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <a href="#home"><Logo light /></a>
            <p className="text-xs sm:text-sm text-white/40 font-light leading-relaxed max-w-sm">
              QuickDines is a smart food pre-order platform for travelers. We connect passengers, bus operators, and highway restaurants to eliminate waiting times.
            </p>
            <div className="flex gap-3 mt-1">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="p-2.5 rounded-full transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#FF6B35'; e.currentTarget.style.borderColor = '#FF6B35'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/30 font-poppins">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm text-white/40 font-light">
              {LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/30 font-poppins">Contact & Support</h3>
            <div className="text-xs sm:text-sm text-white/40 font-light flex flex-col gap-3">
              <p>Email: <a href="mailto:info@quickdines.com" className="text-white font-semibold hover:text-primary transition-colors">info@quickdines.com</a></p>
              <p>Phone: <a href="tel:7815815794" className="text-white font-semibold hover:text-primary transition-colors">7815815794</a></p>
              <p className="leading-relaxed">Hyderabad, Telangana, India</p>
              <div className="flex flex-wrap gap-4 text-[11px] font-semibold text-white/30 mt-1">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-white/10">|</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/25 text-[11px] font-medium">
          <p>© {year} QuickDines. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 fill-primary text-primary" /> for highway travelers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
