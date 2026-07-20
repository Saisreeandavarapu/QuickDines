import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Store, Bus, CheckCircle2, TrendingUp, Clock, Compass, Star, Sparkles, MapPin } from 'lucide-react';
import { companyData } from '../data';

// Custom sub-components representing the live dynamic dashboard mockups
const TravelerDashboard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
    className="w-full max-w-[340px] p-6 rounded-[32px] bg-slate-900/90 dark:bg-slate-950/90 text-white relative border border-white/10 shadow-2xl overflow-hidden"
  >
    {/* Background Glows */}
    <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
    <div className="absolute -bottom-12 -left-12 w-28 h-28 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />

    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[10px] font-extrabold tracking-widest text-emerald-400 uppercase">Live Pre-order</span>
      </div>
      <span className="text-[9px] font-bold text-white/40">QD App v1.4</span>
    </div>

    {/* Metric Box */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3 mb-4">
      <div>
        <p className="text-[9px] text-white/50 uppercase font-bold tracking-wider">Average Stop Savings</p>
        <h4 className="text-2xl font-black text-white font-poppins mt-1">28 Mins</h4>
      </div>
      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
        <Clock className="w-5 h-5" />
      </div>
    </div>

    {/* Order Hot & Fresh Indicator */}
    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2 mb-2">
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-bold text-white">Butter Chicken &amp; Naan</span>
        <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Hot &amp; Fresh</span>
      </div>
      <div className="flex gap-2 items-center text-[10px] text-white/60">
        <MapPin className="w-3.5 h-3.5 text-blue-400" />
        <span>Table 4 · Grand Trunk Dine</span>
      </div>
    </div>

    {/* Rating feedback */}
    <div className="flex justify-between items-center text-[9px] text-white/40 mt-4 pt-3 border-t border-white/10">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <span>12K+ positive reviews</span>
    </div>
  </motion.div>
);

const RestaurantDashboard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
    className="w-full max-w-[340px] p-6 rounded-[32px] bg-slate-900/90 dark:bg-slate-950/90 text-white relative border border-white/10 shadow-2xl overflow-hidden"
  >
    {/* Background Glows */}
    <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />
    <div className="absolute -bottom-12 -left-12 w-28 h-28 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />

    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-[10px] font-extrabold tracking-widest text-blue-400 uppercase">Merchant Panel</span>
      </div>
      <span className="text-[9px] font-bold text-white/40">Today's Revenue</span>
    </div>

    {/* Revenue Chart mock */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3 mb-4">
      <div>
        <p className="text-[9px] text-white/50 uppercase font-bold tracking-wider">Gross Sales Boost</p>
        <h4 className="text-2xl font-black text-emerald-400 font-poppins mt-1">+32.4%</h4>
      </div>
      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
        <TrendingUp className="w-5 h-5" />
      </div>
    </div>

    {/* Live Orders List preview */}
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center p-2 rounded-xl bg-white/5 text-[10px]">
        <span>Queue: 8 incoming pre-orders</span>
        <span className="text-blue-300 font-bold">100% Prepared</span>
      </div>
      <div className="flex justify-between items-center p-2 rounded-xl bg-white/5 text-[10px]">
        <span>Kitchen Waste Reduced</span>
        <span className="text-emerald-400 font-bold">-40% Food Loss</span>
      </div>
    </div>

    {/* bottom note */}
    <p className="text-[9px] text-white/30 text-center mt-5">Kitchen planning synchronized with bus live GPS tracking.</p>
  </motion.div>
);

const OperatorDashboard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
    className="w-full max-w-[340px] p-6 rounded-[32px] bg-slate-900/90 dark:bg-slate-950/90 text-white relative border border-white/10 shadow-2xl overflow-hidden"
  >
    {/* Background Glows */}
    <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
    <div className="absolute -bottom-12 -left-12 w-28 h-28 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />

    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        <span className="text-[10px] font-extrabold tracking-widest text-amber-400 uppercase">Operator Synced</span>
      </div>
      <span className="text-[9px] font-bold text-white/40">Fleet Live Map</span>
    </div>

    {/* GPS Sync */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3 mb-4">
      <div>
        <p className="text-[9px] text-white/50 uppercase font-bold tracking-wider">Passenger Rating</p>
        <h4 className="text-2xl font-black text-blue-300 font-poppins mt-1">98.6%</h4>
      </div>
      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
        <Compass className="w-5 h-5" />
      </div>
    </div>

    {/* Scheduling Sync stats */}
    <div className="flex flex-col gap-2.5">
      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center text-[10px]">
        <span className="text-white/60">Route Delay Avoided</span>
        <span className="text-emerald-400 font-bold">100% On-Time</span>
      </div>
      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center text-[10px]">
        <span className="text-white/60">Fleet Partners</span>
        <span className="text-blue-300 font-bold">150+ Buses Active</span>
      </div>
    </div>

    <p className="text-[9px] text-white/30 text-center mt-4">Automated arrival alerts sent to restaurants seamlessly.</p>
  </motion.div>
);

export const Benefits = () => {
  const { title, subtitle, travelers, restaurants, operators } = companyData.benefits;
  const [activeTab, setActiveTab] = useState('travelers');

  // Map stakeholder details dynamically
  const tabs = [
    { id: 'travelers', label: 'For Travelers', icon: <User className="w-4 h-4" />, data: travelers, color: '#FF6B35' },
    { id: 'restaurants', label: 'For Restaurants', icon: <Store className="w-4 h-4" />, data: restaurants, color: '#16A34A' },
    { id: 'operators', label: 'For Fleet Operators', icon: <Bus className="w-4 h-4" />, data: operators, color: '#3B82F6' },
  ];

  const activeData = tabs.find(t => t.id === activeTab);

  return (
    <section id="benefits" className="relative py-24 sm:py-32 section-bg overflow-hidden transition-colors duration-300">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" />
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'var(--surface-alt)', color: 'var(--txt)' }}
          >
            Ecosystem Value
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
          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light max-w-xl mx-auto">
            {subtitle}
          </p>
          <div className="w-12 h-1.5 rounded-full mx-auto mt-4" style={{ background: '#FF6B35' }} />
        </div>

        {/* ── INTERACTIVE GRID CONTAINER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── LEFT COLUMN: Animated Premium Dashboard Panel ── */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[380px]">
            {/* Spinning decorative frame background */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-slate-200 dark:border-white/5 animate-spin-slow pointer-events-none" />

            <AnimatePresence mode="wait">
              {activeTab === 'travelers' && <TravelerDashboard key="travelers" />}
              {activeTab === 'restaurants' && <RestaurantDashboard key="restaurants" />}
              {activeTab === 'operators' && <OperatorDashboard key="operators" />}
            </AnimatePresence>
          </div>

          {/* ── RIGHT COLUMN: Segmented Tabs & Bullet Checkpoints ── */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Segmented Tab Controls */}
            <div className="p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 flex gap-2 w-full max-w-md overflow-x-auto no-scrollbar self-center lg:self-start">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 select-none ${activeTab === tab.id
                    ? 'text-white'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                    }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-blue-600 rounded-xl z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Checklist Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-blue-500">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest">Key Advantage</span>
                  </div>
                  <h3 className="text-2xl font-black text-brand dark:text-white font-poppins">
                    {activeData.data.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                  {activeData.data.points.map((pt, pIdx) => (
                    <motion.div
                      key={pIdx}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: pIdx * 0.08 }}
                      className="flex gap-3 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: activeData.color }} />
                      <div>
                        <h4 className="text-sm font-bold text-brand dark:text-white">{pt.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed mt-1">{pt.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* dynamic contextual CTA button */}
                <div className="mt-4 pt-6 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-4 items-center justify-between">
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    * Results may vary depending on restaurant partner kitchen capacities.
                  </p>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all duration-300"
                  >
                    <span>Get Started</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;
