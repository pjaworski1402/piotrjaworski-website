import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePrivacyModal } from '../context/PrivacyModalContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { openPrivacyModal } = usePrivacyModal();

  return (
    <footer className="border-t border-neutral-900/50 bg-[#050505] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Piotr Jaworski.</p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>{t('contact.footer')}</p>
          <button
            type="button"
            onClick={openPrivacyModal}
            className="text-neutral-300 hover:text-white transition-colors underline-offset-2 hover:underline"
          >
            {t('contact.privacyLink')}
          </button>
        </div>
      </div>
    </footer>
  );
};
