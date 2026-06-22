import React, { useState } from 'react';
import { getFaqItems } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const { t, language } = useLanguage();
  const items = getFaqItems(language);
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section id="faq" className="py-24 border-t border-neutral-900 bg-[#060606] scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('faq.title')}</h2>
          <p className="text-neutral-400">{t('faq.subtitle')}</p>
        </motion.div>

        <div className="space-y-3">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border border-neutral-800 rounded-xl bg-neutral-900/30 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-neutral-900/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-medium text-sm">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-neutral-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-5 pb-4 text-neutral-400 text-sm leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
