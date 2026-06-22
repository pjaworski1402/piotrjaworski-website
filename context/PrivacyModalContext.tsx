import React, { createContext, useContext, useState, useCallback } from 'react';

interface PrivacyModalContextType {
  isOpen: boolean;
  openPrivacyModal: () => void;
  closePrivacyModal: () => void;
}

const PrivacyModalContext = createContext<PrivacyModalContextType | undefined>(undefined);

export const PrivacyModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPrivacyModal = useCallback(() => setIsOpen(true), []);
  const closePrivacyModal = useCallback(() => setIsOpen(false), []);

  return (
    <PrivacyModalContext.Provider value={{ isOpen, openPrivacyModal, closePrivacyModal }}>
      {children}
    </PrivacyModalContext.Provider>
  );
};

export const usePrivacyModal = () => {
  const context = useContext(PrivacyModalContext);
  if (!context) throw new Error('usePrivacyModal must be used within PrivacyModalProvider');
  return context;
};
