import React from 'react';
import { getProcessSteps } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const Process: React.FC = () => {
  const { t, language } = useLanguage();
  const steps = getProcessSteps(language);

  return (
    <section id="process" className="py-24 border-t border-neutral-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('process.title')}</h2>
          <p className="text-neutral-400 max-w-2xl">{t('process.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <span className="text-emerald-500 font-mono text-sm mb-3 block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
