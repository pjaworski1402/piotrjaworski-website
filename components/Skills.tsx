import React from 'react';
import { getSkills } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Tooltip } from './ui/Tooltip';

export const Skills: React.FC = () => {
  const { t, language } = useLanguage();
  const skills = getSkills(language);

  const getTooltipKey = (skill: string): string => {
    const skillMap: Record<string, string> = {
      'Next.js': 'skills.tooltip.nextjs',
      'React': 'skills.tooltip.react',
      'Directus': 'skills.tooltip.directus',
      'GitHub Pages': 'skills.tooltip.githubPages',
      'Mikrus': 'skills.tooltip.mikrus',
    };
    return skillMap[skill] || '';
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-16 border-t border-neutral-900/50 bg-[#060606] relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-2xl font-semibold mb-3 text-neutral-300"
        >
          {t('skills.title')}
        </motion.h2>
        <p className="text-neutral-500 text-sm mb-10 max-w-2xl">
          {t('skills.subtitle')}
        </p>
        
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-neutral-800" />
                {group.category}
              </h3>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map(skill => {
                  const tooltipKey = getTooltipKey(skill);
                  const tooltipContent = tooltipKey ? t(tooltipKey) : '';
                  
                  return (
                    <Tooltip key={skill} content={tooltipContent}>
                      <motion.span 
                        variants={item}
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(23, 23, 23, 1)", borderColor: "rgba(64, 64, 64, 1)" }}
                        className="px-3 py-2 bg-neutral-900/50 border border-neutral-800/80 text-neutral-400 text-sm rounded transition-colors cursor-pointer select-none hover:text-neutral-200"
                      >
                        {skill}
                      </motion.span>
                    </Tooltip>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 border-t border-neutral-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-sm">
        <p>© {new Date().getFullYear()} Piotr Jaworski.</p>
        <p>{t('contact.footer')}</p>
      </div>
    </section>
  );
};
