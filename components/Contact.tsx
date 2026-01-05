import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    if (!formRef.current) {
      setFormState('error');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS credentials missing');
      setFormState('error');
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setFormState('success');
      formRef.current.reset();
      setTimeout(() => setFormState('idle'), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20 bg-[#050505] border-t border-neutral-900">
      
      {/* Refined gradient */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-20">
          
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {t('contact.title')}
            </h2>
            <p className="text-neutral-400 mb-12 text-lg leading-relaxed">
              {t('contact.desc')}
            </p>

            <div className="flex gap-6">
              <a 
                href="mailto:hello@piotrjaworski.com" 
                className="group p-4 bg-neutral-900 border border-neutral-800 text-white rounded-full hover:border-emerald-500/50 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} className="group-hover:text-emerald-400 transition-colors" />
              </a>
              <a 
                href="https://github.com/pjaworski1402" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-neutral-900 border border-neutral-800 text-white rounded-full hover:border-white/50 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/piotr-jaworski00/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-neutral-900 border border-neutral-800 text-white rounded-full hover:border-[#0077b5] transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="group-hover:text-[#0077b5] transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-neutral-900/30 border border-neutral-800 p-8 rounded-2xl backdrop-blur-sm"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    {language === 'pl' ? 'Imię' : 'Name'}
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="from_name"
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="from_email"
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {language === 'pl' ? 'Temat' : 'Subject'}
                </label>
                <select 
                  id="subject"
                  name="subject"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all appearance-none"
                >
                  <option>{language === 'pl' ? 'Współpraca (Freelance)' : 'Freelance Project'}</option>
                  <option>{language === 'pl' ? 'Oferta Pracy' : 'Job Opportunity'}</option>
                  <option>{language === 'pl' ? 'Inne' : 'Other'}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {language === 'pl' ? 'Wiadomość' : 'Message'}
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  placeholder={language === 'pl' ? 'Opisz swój projekt...' : 'Tell me about your project...'}
                ></textarea>
              </div>

              {formState === 'error' && (
                <div className="text-red-400 text-sm text-center">
                  {language === 'pl' ? 'Błąd podczas wysyłania. Spróbuj ponownie.' : 'Error sending message. Please try again.'}
                </div>
              )}

              <button 
                type="submit"
                disabled={formState !== 'idle'}
                className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {formState === 'idle' && (
                  <>
                    {language === 'pl' ? 'Wyślij Wiadomość' : 'Send Message'}
                    <Send size={16} />
                  </>
                )}
                {formState === 'loading' && (
                  <Loader2 size={18} className="animate-spin" />
                )}
                {formState === 'success' && (
                  <span className="text-emerald-700 font-bold">
                    {language === 'pl' ? 'Wysłano!' : 'Sent!'}
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer Text - Moved outside the grid to sit at bottom on mobile */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} Piotr Jaworski.</p>
          <p>{t('contact.footer')}</p>
        </div>
      </div>
    </section>
  );
};