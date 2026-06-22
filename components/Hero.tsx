import React, { useState, useEffect } from 'react';
import { getWhyHire } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const TypewriterText = ({ text, speed = 50 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => {
      clearInterval(timer);
    };
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse ml-1 text-emerald-500">_</span>
    </span>
  );
};

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const reasons = getWhyHire(language);

  const benefits = [
    t('hero.benefit1'),
    t('hero.benefit2'),
    t('hero.benefit3'),
  ];
    
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefitIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [benefits.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-[90vh] flex items-center pt-20 relative scroll-mt-20">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-4 pl-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-mono font-medium text-emerald-400 border border-emerald-900/50 bg-emerald-950/20 rounded-full backdrop-blur-sm">
            {t('hero.available')}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {t('hero.headline')}
          </h1>
          
          <h2 className="text-lg md:text-xl text-emerald-400/90 mb-4 font-medium h-8 flex items-center">
            <TypewriterText text={benefits[currentBenefitIndex]} />
          </h2>
          
          <p className="text-neutral-400 leading-relaxed mb-4 max-w-lg">
            {t('hero.desc')}
          </p>

          <p className="text-neutral-500 text-sm mb-8">
            {t('hero.author')}
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#393BB2_50%,#E2E8F0_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-neutral-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-neutral-900 transition-colors">
                {t('hero.contactMe')} <ArrowRight size={16} />
              </span>
            </button>

            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 border border-neutral-800 bg-neutral-900/50 text-neutral-300 font-medium rounded hover:bg-neutral-800 hover:text-white transition-all flex items-center justify-center h-12"
            >
              {t('hero.viewProjects')}
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative perspective-1000"
        >
          <motion.div 
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-8 border border-neutral-800/80 bg-neutral-900/30 backdrop-blur-md rounded-xl shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2 relative z-10">
              <Sparkles className="text-emerald-500" size={20} />
              {t('hero.whyHire')}
            </h3>
            
            <ul className="space-y-4 relative z-10">
              {reasons.map((reason, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-emerald-500/80 shrink-0 mt-0.5" size={18} />
                  <span className="text-neutral-300 text-sm leading-relaxed">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <div className="absolute -z-10 top-12 right-0 w-[calc(100%+2rem)] h-full border border-neutral-800/30 rounded-xl bg-neutral-900/10 blur-sm" />
        </motion.div>
      </div>
    </section>
  );
};
