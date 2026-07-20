import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Send } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ ok: null, msg: '' });

  const subscribe = e => {
    e.preventDefault();
    if (!email) { setStatus({ ok: false, msg: 'Please enter a valid email address.' }); return; }
    setStatus({ ok: true, msg: 'Welcome! You will receive our latest updates.' });
    setEmail('');
  };

  return (
    <section
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#07153D 0%,#0B1F5A 60%,#162880 100%)' }}
    >
      {/* Dot texture */}
      <div className="absolute inset-0 dot-bg pointer-events-none" />
      {/* Blobs */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.18), transparent 70%)' }} />
      <div className="absolute -bottom-20 -right-20 w-[260px] h-[260px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(22,163,74,0.12), transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-14 rounded-[44px] relative overflow-hidden flex flex-col items-center text-center"
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {/* Inner dot pattern */}
          <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />

          <div
            className="relative p-3 mb-6 rounded-2xl"
            style={{ background: 'rgba(255,107,53,0.2)', border: '1px solid rgba(255,107,53,0.25)' }}
          >
            <Bell className="w-6 h-6 text-primary animate-bounce" />
          </div>

          <h2 className="relative text-2xl sm:text-4xl font-extrabold tracking-tight font-poppins text-white leading-tight">
            Stay Updated with QuickDines
          </h2>
          <p className="relative mt-4 text-xs sm:text-sm text-white/50 max-w-md font-light leading-relaxed">
            Subscribe for updates on new partner restaurants, highway routes, and exclusive travel dining offers.
          </p>

          <div className="relative mt-8 w-full max-w-md">
            {status.msg && (
              <div className={`p-3 mb-4 rounded-xl text-xs font-semibold ${status.ok ? 'bg-white/10 text-white border border-white/20' : 'bg-red-500/20 text-red-200 border border-red-500/30'}`}>
                {status.msg}
              </div>
            )}
            <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address" required
                className="flex-grow px-5 py-4 rounded-2xl text-sm text-white placeholder-white/40 outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                style={{ background: '#FF6B35', color: '#fff', boxShadow: '0 8px 24px rgba(255,107,53,0.4)' }}
              >
                Subscribe <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>

          <span className="relative text-[10px] text-white/30 mt-4 tracking-wide">We value your privacy. Unsubscribe at any time.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
