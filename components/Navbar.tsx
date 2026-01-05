import React, { useState, useEffect } from 'react';
import { getNavLinks } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = getNavLinks(t);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen 
            ? 'bg-[#050505]/80 backdrop-blur-lg border-b border-neutral-800/60' 
            : 'bg-transparent border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, '#')}
            className="group flex items-center gap-2 cursor-pointer z-50"
          >
            <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white group-hover:border-emerald-500/50 group-hover:bg-neutral-800 transition-all">
               <Code2 size={16} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
              PJ<span className="text-emerald-500">.com</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <div className="h-4 w-px bg-neutral-800 mx-2" />
            
            <button 
              onClick={toggleLang}
              className="text-xs font-mono font-medium text-neutral-400 hover:text-white flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 transition-colors cursor-pointer"
            >
              <Globe size={12} />
              <span>{language === 'pl' ? 'EN' : 'PL'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden z-50">
             {/* Small lang toggle for mobile */}
            <button 
              onClick={toggleLang}
              className="text-xs font-mono font-medium text-neutral-400 hover:text-white border border-neutral-800 rounded px-2 py-1"
            >
              {language.toUpperCase()}
            </button>
            <button 
              className="text-white p-2 hover:bg-neutral-800 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl font-bold text-neutral-300 hover:text-white hover:pl-4 transition-all"
                >
                  <span className="text-emerald-500 text-base font-mono mr-4">0{idx + 1}.</span>
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="mt-8 pt-8 border-t border-neutral-800"
              >
                <p className="text-neutral-500 text-sm mb-4">Contact</p>
                <a href="mailto:hello@piotrjaworski.com" className="text-white text-lg font-medium">hello@piotrjaworski.com</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};