import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Handshake, CheckCircle, Star, Shield, Clock, MapPin, Zap } from 'lucide-react';
import { companyData } from '../data';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #07153D 0%, #0B1F5A 45%, #162880 100%)' }}
    >
      {/* ── Background Patterns ── */}
      <div className="absolute inset-0 dot-bg pointer-events-none" />
      <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />

      {/* ── Glowing Blobs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-30 -right-30 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Content ── */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-[11px] font-bold tracking-widest uppercase"
              style={{ background: 'rgba(59,130,246,0.15)', borderColor: 'rgba(59,130,246,0.3)' }}
            >
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              Zero-Wait Highway Dining
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white font-poppins"
            >
              Order Before <br />
              You Arrive.{' '}
              <span
                className="block mt-1.5"
                style={{
                  background: 'linear-gradient(90deg, #60A5FA, #93C5FD)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Dine Instantly.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/60 max-w-lg leading-relaxed font-light"
            >
              QuickDines is the smart pre-order app for bus travelers. Choose your highway meals an hour before arrival, and eat the moment your bus pulls in.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#download"
                className="group flex items-center justify-center gap-2.5 bg-white text-brand hover:bg-slate-100 px-8 py-4 rounded-2xl font-bold tracking-wide shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform text-brand" />
                Download App
              </a>
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold tracking-wide border border-white/25 text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                style={{ backdropFilter: 'blur(12px)' }}
              >
                <Handshake className="w-5 h-5 group-hover:scale-110 transition-transform text-blue-300" />
                Partner With Us
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-x-7 gap-y-3 justify-center lg:justify-start text-[11px] font-semibold text-white/50"
            >
              {['GPS Sync Tech', 'FSSAI Partnered', 'No Markup Prices'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Premium Overlapping Phone Mockups ── */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[500px] w-full">
            {/* Ambient decorative glowing back-sphere */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

            <div className="relative w-full max-w-[420px] h-[480px] flex items-center justify-center">

              {/* 📱 PHONE 1: Browse Menu Screen (Left / Underneath) */}
              <motion.div
                initial={{ opacity: 0, x: -40, rotate: -15, scale: 0.9 }}
                animate={{ opacity: 1, x: -30, rotate: -10, scale: 0.95 }}
                transition={{ duration: 0.85, delay: 0.2 }}
                className="absolute left-4 z-10 w-[240px] h-[450px] rounded-[38px] border-[6px] border-slate-900 bg-slate-950 p-2.5 shadow-2xl flex flex-col justify-between overflow-hidden pointer-events-none"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                }}
              >
                {/* Dynamic Island */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-900 absolute left-[43%]" />
                </div>

                {/* Status Bar */}
                <div className="flex justify-between items-center px-3 text-[9px] font-bold text-white/40 leading-none">
                  <span>9:41</span>
                  <div className="flex gap-1.5">
                    <span>5G</span>
                    <span className="w-3.5 h-2 border border-white/30 rounded-sm" />
                  </div>
                </div>

                {/* App Screen Content */}
                <div className="flex-grow flex flex-col gap-3 mt-3 px-1 text-left overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-blue-400">Rest Stop Menu</h4>
                      <h3 className="text-sm font-extrabold text-white leading-tight">Grand Trunk Dine</h3>
                    </div>
                    <span className="text-[9px] font-bold text-white/40 bg-white/10 px-2 py-0.5 rounded-full">★ 4.8</span>
                  </div>

                  {/* Search Bar */}
                  <div className="w-full h-7 rounded-lg bg-white/5 border border-white/10 px-2 flex items-center gap-1.5 text-[9px] text-white/30">
                    <span>Search dishes, beverages...</span>
                  </div>

                  {/* Dish List */}
                  <div className="flex flex-col gap-2 overflow-hidden">
                    {[
                      { name: 'Special Paneer Biryani', desc: 'Basmati rice with rich paneer gravy', price: '$8.99' },
                      { name: 'Butter Chicken Combo', desc: 'Tender chicken with 2 butter naans', price: '$10.50' },
                      { name: 'Special Filter Coffee', desc: 'Brewed hot, direct from farm beans', price: '$2.20' }
                    ].map((dish, i) => (
                      <div key={i} className="p-2 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center gap-2">
                        <div className="max-w-[140px]">
                          <h5 className="text-[10px] font-bold text-white leading-tight truncate">{dish.name}</h5>
                          <p className="text-[8px] text-white/40 mt-0.5 line-clamp-1">{dish.desc}</p>
                          <span className="text-[10px] font-black text-blue-400 mt-1 block">{dish.price}</span>
                        </div>
                        <button className="h-6 w-9 rounded-lg bg-blue-600 hover:bg-blue-700 text-[9px] font-black text-white flex items-center justify-center shrink-0">
                          ADD
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Bottom Card info */}
                <div className="bg-blue-600 p-2.5 rounded-2xl flex justify-between items-center mt-2">
                  <div>
                    <p className="text-[8px] text-white/70">Selected: 2 items</p>
                    <p className="text-[11px] font-extrabold text-white leading-tight">$11.19</p>
                  </div>
                  <span className="text-[9px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg flex items-center gap-1">
                    Checkout <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </motion.div>

              {/* 📱 PHONE 2: GPS Tracking Screen (Right / Overlaying) */}
              <motion.div
                initial={{ opacity: 0, x: 40, rotate: 15, scale: 0.9 }}
                animate={{ opacity: 1, x: 30, rotate: 6, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.35 }}
                className="absolute right-4 z-20 w-[240px] h-[450px] rounded-[38px] border-[6px] border-slate-900 bg-slate-950 p-2.5 shadow-2xl flex flex-col justify-between overflow-hidden pointer-events-none"
                style={{
                  boxShadow: '0 30px 60px -10px rgba(0, 0, 0, 0.8)',
                  borderColor: '#1e293b'
                }}
              >
                {/* Dynamic Island */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-900 absolute left-[43%]" />
                </div>

                {/* Status Bar */}
                <div className="flex justify-between items-center px-3 text-[9px] font-bold text-white/40 leading-none">
                  <span>9:41</span>
                  <div className="flex gap-1.5">
                    <span>5G</span>
                    <span className="w-3.5 h-2 border border-white/30 rounded-sm" />
                  </div>
                </div>

                {/* App Screen Content */}
                <div className="flex-grow flex flex-col gap-4 mt-3 px-1 text-left overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Order Tracking</h4>
                      <h3 className="text-sm font-extrabold text-white leading-tight">Order #QD-9842</h3>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[9px] font-black text-white">
                      JD
                    </div>
                  </div>

                  {/* ETA Card */}
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2.5">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-white/60">Estimated Arrival</span>
                      <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        In 22 Mins
                      </span>
                    </div>
                    {/* Live Progress Bar animation mimicking the bus route */}
                    <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                        style={{ width: '70%', animation: 'progress-fill 6s ease-in-out infinite' }}
                      />
                    </div>
                    <div className="flex justify-between text-[8px] text-white/40 font-bold uppercase">
                      <span>Departed</span>
                      <span>Midway</span>
                      <span>Arrived</span>
                    </div>
                  </div>

                  {/* Status Steps */}
                  <div className="flex flex-col gap-3 px-1">
                    {[
                      { title: 'Order Confirmed', time: '11:05 AM', completed: true },
                      { title: 'Food Preparing', time: '11:15 AM', completed: true },
                      { title: 'Ready at Table', time: 'ETA 11:42 AM', completed: false }
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border ${
                          step.completed ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'border-white/10 text-white/20'
                        }`}>
                          <span className="text-[8px] font-bold">✓</span>
                        </div>
                        <div className="flex-grow">
                          <p className={`text-[10px] font-bold ${step.completed ? 'text-white' : 'text-white/40'}`}>{step.title}</p>
                          <p className="text-[8px] text-white/30">{step.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Show Dine-In QR Checkin Button */}
                <div className="mt-3 p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shrink-0">
                    {/* QR Code symbol */}
                    <svg className="w-10 h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm10 0h2v2h-2v-2zm2 2h2v2h-2v-2zm0-2h2v-2h-2v2zm-2-2h2v-2h-2v2zm0 6h2v-2h-2v2zm-2-2h2v-2h-2v2zm-2-2h2v-2h-2v2zm6-2h2V9h-2v2z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">Dine-In QR Code</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="text-white/30 hover:text-white/60 transition-colors text-[10px] font-semibold tracking-[0.2em] uppercase flex flex-col items-center gap-2"
        >
          Scroll
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
