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
      'OpenAI API': 'skills.tooltip.openai',
      'Google Gemini': 'skills.tooltip.gemini',
      'Custom AI Agents': 'skills.tooltip.customAgents',
      'RAG': 'skills.tooltip.rag',
      'Prompt Engineering': 'skills.tooltip.promptEngineering',
      'n8n': 'skills.tooltip.n8n',
      'Webhooks': 'skills.tooltip.webhooks',
      'React': 'skills.tooltip.react',
      'Next.js 14+': 'skills.tooltip.nextjs',
      'TypeScript': 'skills.tooltip.typescript',
      'Tailwind CSS': 'skills.tooltip.tailwind',
      'Framer Motion': 'skills.tooltip.framerMotion',
      'Figma': 'skills.tooltip.figma',
      'Node.js': 'skills.tooltip.nodejs',
      'PostgreSQL': 'skills.tooltip.postgresql',
      'PayloadCMS': 'skills.tooltip.payload',
      'Strapi': 'skills.tooltip.strapi',
      'Stripe Integration': 'skills.tooltip.stripe',
      'Serverless Functions': 'skills.tooltip.serverless',
      'Vercel': 'skills.tooltip.vercel',
      'Git & GitHub': 'skills.tooltip.git',
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
    // Changed bg-neutral-950/30 (transparent) to bg-[#080808] (solid) to block the grid background
    <section className="py-24 border-y border-neutral-900 bg-[#080808] relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-3xl font-bold mb-12 text-white"
        >
          {t('skills.title')}
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((group, idx) => (
            <div key={group.category} className="space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-emerald-900" />
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
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 1)", borderColor: "rgba(75, 85, 99, 1)" }}
                        className="px-3 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded transition-colors cursor-pointer select-none hover:text-white"
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
      
      {/* Decorative gradient for the solid section */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-900/20 to-transparent pointer-events-none" />
    </section>
  );
};