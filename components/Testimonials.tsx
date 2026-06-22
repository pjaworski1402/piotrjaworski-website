import React from 'react';
import { getTestimonials } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  const testimonials = getTestimonials(language);

  return (
    <section id="testimonials" className="py-24 border-t border-neutral-900 bg-[#060606] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('testimonials.title')}</h2>
          <p className="text-neutral-400 max-w-2xl">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-neutral-800 bg-neutral-900/30 rounded-xl flex flex-col"
            >
              <Quote size={20} className="text-emerald-500/60 mb-4 shrink-0" />
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 flex-1">&ldquo;{item.quote}&rdquo;</p>
              <footer className="border-t border-neutral-800/80 pt-4">
                <p className="text-white text-sm font-medium">{item.role}</p>
                <p className="text-neutral-400 text-xs mt-1">{item.project}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
