import React, { useRef, useState, useEffect } from 'react';
import { getProjects } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { Badge } from './ui/Badge';
import { Globe, ArrowUpRight, X, Loader2, Lock, RotateCw, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface SpotlightCardProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SpotlightCard = ({ children, className = "", onClick }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => setOpacity(1);
  const handleBlur = () => setOpacity(0);
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const ProjectWindow = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState(0);
  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileSize(window.innerWidth < 1920);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const reloadIframe = () => {
    setIsLoading(true);
    setKey(prev => prev + 1);
  };

  const windowClasses = isMobileSize
    ? "relative w-[375px] h-[calc(100vh-12rem)] bg-[#1e1e1e]/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden"
    : "relative w-full max-w-[1400px] h-[calc(100vh-12rem)] bg-[#1e1e1e]/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
    >
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={windowClasses}
      >
        <div className="h-12 bg-[#252525] border-b border-black/50 flex items-center px-4 justify-between shrink-0">
          <div className="flex gap-2 w-20 group">
            <button 
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-75 transition-all flex items-center justify-center"
            >
              <X size={8} className="text-black/50 opacity-0 group-hover:opacity-100" />
            </button>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <div className="bg-[#1a1a1a] border border-white/5 rounded-md h-7 flex items-center px-3 text-xs text-neutral-400 font-mono gap-2 shadow-inner">
              <Lock size={10} className="text-emerald-500" />
              <span className="truncate flex-1 text-center opacity-70">
                {project.link || 'local://preview'}
              </span>
              <button onClick={reloadIframe} className="hover:text-white transition-colors">
                <RotateCw size={10} />
              </button>
            </div>
          </div>

          <div className="w-20 flex justify-end">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                title={t('projects.visit')}
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="flex-1 relative bg-white w-full">
          {project.link ? (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 z-10">
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 className="animate-spin text-neutral-400" size={32} />
                    <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
                      {t('projects.preview')}...
                    </span>
                  </div>
                </div>
              )}
              <iframe 
                key={key}
                src={project.link} 
                className="w-full h-full border-0"
                onLoad={() => setIsLoading(false)}
                title={`Preview of ${project.title}`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </>
          ) : (
            <div className="flex items-center justify-center h-full bg-[#111] text-neutral-400 flex-col gap-4 px-6 text-center">
              <Globe size={48} className="opacity-20" />
              <p>{project.description}</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const projects = getProjects(language);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const handleProjectClick = (project: Project) => {
    if (project.link) {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-neutral-900 scroll-mt-20">
      <AnimatePresence>
        {selectedProject && (
          <ProjectWindow 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('projects.title')}</h2>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <SpotlightCard 
                className={`h-full group hover:border-neutral-600 transition-colors duration-500 ${project.link ? 'cursor-pointer' : ''}`}
                onClick={() => handleProjectClick(project)}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-5">
                    <div className="p-2.5 bg-neutral-900 rounded-lg text-neutral-400 group-hover:text-emerald-400 group-hover:bg-emerald-950/30 transition-all duration-300">
                      <Globe size={20} />
                    </div>
                    <Badge>{project.category}</Badge>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <ArrowUpRight className="text-neutral-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" size={16} />
                    )}
                  </div>
                  
                  <p className="text-neutral-400 text-sm mb-5 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-neutral-900 mt-auto">
                    <ul className="text-sm text-neutral-400 space-y-2">
                      {project.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={14} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    {project.link && (
                      <p className="text-xs text-emerald-400 mt-4 font-medium">
                        {t('projects.preview')}
                      </p>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
