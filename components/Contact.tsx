import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail, Phone, Send, Loader2 } from 'lucide-react';
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
      
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-20">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {t('contact.title')}
            </h2>
            <p className="text-neutral-400 mb-6 text-lg leading-relaxed">
              {t('contact.desc')}
            </p>

            <p className="text-white font-bold mb-4">
              {t('contact.vat')}
            </p>
            <p className="text-emerald-400/90 text-sm mb-8 leading-relaxed">
              {t('contact.audit')}
            </p>

            <a
              href="tel:+48608423576"
              className="inline-flex items-center gap-3 text-white font-medium mb-8 hover:text-emerald-400 transition-colors"
            >
              <Phone size={20} className="text-emerald-500" />
              +48 608 423 576
            </a>

            <div className="flex gap-6">
              <a 
                href="mailto:hello@piotrjaworski.com" 
                className="group p-4 bg-neutral-900 border border-neutral-800 text-white rounded-full hover:border-emerald-500/50 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} className="group-hover:text-emerald-400 transition-colors" />
              </a>
              <a 
                href="tel:+48608423576"
                className="group p-4 bg-neutral-900 border border-neutral-800 text-white rounded-full hover:border-emerald-500/50 transition-all hover:scale-110"
                aria-label="Phone"
              >
                <Phone size={24} className="group-hover:text-emerald-400 transition-colors" />
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
                    placeholder="Jan Kowalski"
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
                    placeholder="jan@example.com"
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
                  <option>{t('contact.subject.newSite')}</option>
                  <option>{t('contact.subject.audit')}</option>
                  <option>{t('contact.subject.other')}</option>
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
                  placeholder={t('contact.messagePlaceholder')}
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
      </div>
    </section>
  );
};
