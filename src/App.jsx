import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      key="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen font-poppins selection:bg-primary selection:text-white overflow-x-hidden transition-colors duration-300 bg-slate-950 text-slate-100"
    >
      {/* Global sticky nav */}
      <Navbar />

      <main>
        <Hero />
        <Statistics />
        <About />
        <HowItWorks />
        <Features />
        <Benefits />
        <Partners />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;
