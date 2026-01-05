import React from 'react';
import { getExperience } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  const { t, language } = useLanguage();
  const experience = getExperience(language);

  return (
    <section id="experience" className="py-24 border-t border-neutral-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">{t('experience.title')}</h2>
        
        <div className="space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1 mb-2 md:mb-0">
                   <span className="text-sm font-mono text-neutral-500 block">{job.period}</span>
                   <span className="text-xs text-neutral-600 uppercase tracking-widest mt-1 block">{job.company}</span>
                </div>
                
                <div className="md:col-span-3 relative">
                  {/* Timeline line visual for Desktop */}
                  <div className="hidden md:block absolute -left-9 top-1 w-3 h-3 rounded-full bg-neutral-800 border border-neutral-700" />
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{job.role}</h3>
                  <ul className="space-y-2">
                    {job.description.map((point, i) => (
                      <li key={i} className="text-neutral-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="block w-1.5 h-1.5 bg-neutral-700 rounded-full mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};