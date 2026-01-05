import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Background } from './Background';
import { Navbar } from './Navbar';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const goHome = () => {
    navigate(`/?lang=${language}`);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-900/30 selection:text-emerald-200">
      <Background />
      <Navbar />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-[clamp(8rem,20vw,12rem)] font-bold tracking-tight bg-gradient-to-r from-white via-emerald-400 to-white bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient-shift_3s_ease_infinite]">
              404
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-4"
          >
            {t('404.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-neutral-400 text-lg mb-8 max-w-md mx-auto leading-relaxed"
          >
            {t('404.message')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={goHome}
              className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10b981_50%,#E2E8F0_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-neutral-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-neutral-900 transition-colors">
                <Home size={16} />
                {t('404.home')}
              </span>
            </button>

            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-neutral-800 bg-neutral-900/50 text-neutral-300 font-medium rounded hover:bg-neutral-800 hover:text-white transition-all flex items-center justify-center h-12 gap-2"
            >
              <ArrowLeft size={16} />
              {t('404.back')}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

