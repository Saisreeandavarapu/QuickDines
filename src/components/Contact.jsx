import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { companyData } from '../data';

export const Contact = () => {
  const { email, phone, address } = companyData.contact;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ ok: null, msg: '' });

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: 'Please fill in all required fields.' });
      return;
    }
    setStatus({ ok: true, msg: 'Thank you! Your message has been sent successfully.' });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const infos = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email Us', value: email, href: `mailto:${email}`, bg: 'rgba(255,107,53,0.1)', color: '#FF6B35' },
    { icon: <Phone className="w-5 h-5" />, label: 'Call Us', value: phone, href: `tel:${phone}`, bg: 'rgba(22,163,74,0.1)', color: '#16A34A' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Address', value: address, href: null, bg: 'rgba(59,130,246,0.1)', color: '#3B82F6' },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 section-bg-alt overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'var(--surface-alt)', color: 'var(--txt)' }}
          >
            Connect
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand dark:text-white font-poppins"
          >
            Partner With Us or Get In Touch
          </motion.h2>
          <div className="w-12 h-1.5 rounded-full mx-auto mt-4" style={{ background: '#FF6B35' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">

          {/* Info + Map */}
          <div className="lg:col-span-5 flex flex-col gap-7">
            <h3 className="text-xl font-bold text-brand dark:text-white font-poppins">Contact Information</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Questions about partnerships or want to learn more? Our team is ready to help.
            </p>

            <div className="flex flex-col gap-5">
              {infos.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl flex-shrink-0" style={{ background: info.bg, color: info.color }}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-bold text-brand dark:text-white hover:text-primary transition-colors mt-0.5 block">{info.value}</a>
                    ) : (
                      <p className="text-xs sm:text-sm font-bold text-brand dark:text-white leading-relaxed mt-0.5 max-w-xs">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="h-[200px] sm:h-[240px] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md">
              <iframe
                title="QuickDines Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.887258416629!2d78.43577317519128!3d17.512903283398918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90469b61bb19%3A0x6a053c027415494d!2sSaibaba%20Nagar%2C%20Jeedimetla%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/10 shadow-xl h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-brand dark:text-blue-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-brand dark:text-white font-poppins">Send a Message</h3>
                </div>

                {status.msg && (
                  <div className={`p-4 mb-5 rounded-xl text-xs font-semibold ${status.ok ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                    {status.msg}
                  </div>
                )}

                <form onSubmit={submit} className="flex flex-col gap-4">
                  {[
                    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe', required: true },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
                    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Partnership, feedback…', required: false },
                  ].map(f => (
                    <div key={f.id} className="flex flex-col gap-1.5">
                      <label htmlFor={f.id} className="text-[10px] font-bold text-slate-500 dark:text-slate-450 uppercase tracking-wider">
                        {f.label}{f.required && <span className="text-red-500 ml-0.5">*</span>}
                      </label>
                      <input
                        id={f.id} name={f.id} type={f.type} placeholder={f.placeholder}
                        value={form[f.id]} onChange={change} required={f.required}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-800/40 text-sm text-brand dark:text-white focus:border-brand dark:focus:border-blue-500 focus:ring-2 focus:ring-brand/15 outline-none transition-all"
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold text-slate-500 dark:text-slate-450 uppercase tracking-wider">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message" name="message" rows="4" required
                      placeholder="Hi, I'm interested in partnering with QuickDines…"
                      value={form.message} onChange={change}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-800/40 text-sm text-brand dark:text-white focus:border-brand dark:focus:border-blue-500 focus:ring-2 focus:ring-brand/15 outline-none transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex items-center justify-center gap-2 text-white px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-300 mt-1"
                    style={{ background: 'linear-gradient(135deg,#0B1F5A,#162880)', boxShadow: '0 8px 24px rgba(11,31,90,0.25)' }}
                  >
                    Send Message <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
