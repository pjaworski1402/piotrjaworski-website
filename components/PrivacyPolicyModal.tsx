import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePrivacyModal } from '../context/PrivacyModalContext';
import { SITE_CONFIG } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const privacyContent = {
  pl: {
    intro: 'Niniejsza polityka prywatności opisuje, w jaki sposób przetwarzam dane osobowe przekazane przez formularz kontaktowy na stronie piotrjaworski.com.',
    sections: [
      {
        title: 'Administrator danych',
        body: `Administratorem danych jest Piotr Jaworski. Kontakt: ${SITE_CONFIG.email}, tel. ${SITE_CONFIG.phone}.`,
      },
      {
        title: 'Jakie dane zbieram',
        body: 'Przez formularz kontaktowy mogę otrzymać: imię, adres e-mail, numer telefonu (opcjonalnie), temat zapytania oraz treść wiadomości.',
      },
      {
        title: 'Cel przetwarzania',
        body: 'Dane przetwarzam wyłącznie w celu odpowiedzi na zapytanie, przygotowania oferty oraz kontaktu w sprawie współpracy.',
      },
      {
        title: 'Podstawa prawna',
        body: 'Podstawą przetwarzania jest zgoda (art. 6 ust. 1 lit. a RODO) wyrażona przez zaznaczenie checkboxa przy wysyłce formularza.',
      },
      {
        title: 'Okres przechowywania',
        body: 'Dane przechowuję przez okres niezbędny do udzielenia odpowiedzi i ewentualnej współpracy, nie dłużej niż 24 miesiące od ostatniego kontaktu.',
      },
      {
        title: 'Odbiorcy danych',
        body: 'Formularz korzysta z usługi EmailJS do dostarczenia wiadomości. EmailJS przetwarza dane zgodnie ze swoją polityką prywatności.',
      },
      {
        title: 'Twoje prawa',
        body: 'Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wycofania zgody oraz wniesienia skargi do Prezesa UODO.',
      },
    ],
  },
  en: {
    intro: 'This privacy policy describes how I process personal data submitted through the contact form on piotrjaworski.com.',
    sections: [
      {
        title: 'Data controller',
        body: `The data controller is Piotr Jaworski. Contact: ${SITE_CONFIG.email}, phone ${SITE_CONFIG.phone}.`,
      },
      {
        title: 'What data I collect',
        body: 'Through the contact form I may receive: name, email address, phone number (optional), subject and message content.',
      },
      {
        title: 'Purpose of processing',
        body: 'I process data solely to respond to your inquiry, prepare an offer and contact you regarding potential cooperation.',
      },
      {
        title: 'Legal basis',
        body: 'Processing is based on consent (Art. 6(1)(a) GDPR) given by checking the checkbox when submitting the form.',
      },
      {
        title: 'Retention period',
        body: 'I store data for as long as needed to respond and for potential cooperation, no longer than 24 months from last contact.',
      },
      {
        title: 'Data recipients',
        body: 'The form uses EmailJS to deliver messages. EmailJS processes data according to its own privacy policy.',
      },
      {
        title: 'Your rights',
        body: 'You have the right to access, rectify, delete or restrict processing of your data, withdraw consent and lodge a complaint with your supervisory authority.',
      },
    ],
  },
};

export const PrivacyPolicyModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { isOpen, closePrivacyModal } = usePrivacyModal();
  const content = privacyContent[language];

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePrivacyModal();
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closePrivacyModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closePrivacyModal}
            aria-label={t('privacy.close')}
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl"
          >
            <div className="sticky top-0 flex items-center justify-between gap-4 px-6 py-4 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-sm">
              <h2 id="privacy-modal-title" className="text-xl font-bold text-white">
                {t('privacy.title')}
              </h2>
              <button
                type="button"
                onClick={closePrivacyModal}
                className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
                aria-label={t('privacy.close')}
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-6 py-6 text-neutral-300">
              <p className="text-neutral-400 mb-8 leading-relaxed text-sm">{content.intro}</p>

              <div className="space-y-6">
                {content.sections.map((section) => (
                  <section key={section.title}>
                    <h3 className="text-base font-semibold text-white mb-2">{section.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{section.body}</p>
                  </section>
                ))}
              </div>

              <button
                type="button"
                onClick={closePrivacyModal}
                className="mt-8 w-full py-3 bg-neutral-900 border border-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors"
              >
                {t('privacy.close')}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
