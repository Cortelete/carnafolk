import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { InfoIcon, InstagramIcon, TicketIcon, LocationIcon, SealedLetterIcon } from './components/icons';
import WhatIsModalContent from './components/modals/WhatIsModalContent';
import TicketModalContent from './components/modals/TicketModalContent';
import LocationModalContent from './components/modals/LocationModalContent';
import DeveloperCTAModalContent from './components/modals/DeveloperCTAModalContent';
import ContactModalContent from './components/modals/ContactModalContent';

type ModalType = 'what-is' | 'ticket' | 'location' | 'dev-cta' | 'contact' | null;

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    const faviconElement = document.getElementById('favicon') as HTMLLinkElement;
    if (!faviconElement) return;

    const favicons = ['/logo.png', '/logohw.png'];
    let currentFaviconIndex = 0;

    const faviconInterval = setInterval(() => {
      currentFaviconIndex = (currentFaviconIndex + 1) % favicons.length;
      faviconElement.href = favicons[currentFaviconIndex];
    }, 3000);

    return () => clearInterval(faviconInterval);
  }, []);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  const renderModalContent = () => {
    switch (activeModal) {
      case 'what-is':
        return <WhatIsModalContent />;
      case 'ticket':
        return <TicketModalContent />;
      case 'location':
        return <LocationModalContent />;
      case 'dev-cta':
        return <DeveloperCTAModalContent onClose={closeModal} />;
      case 'contact':
        return <ContactModalContent onClose={closeModal} />;
      default:
        return null;
    }
  };

  const getModalTitle = () => {
     switch (activeModal) {
      case 'what-is':
        return 'O Pergaminho Ancestral';
      case 'ticket':
        return 'Forjar Pergaminho de Entrada';
      case 'location':
        return 'O Mapa para o Covil';
      case 'dev-cta':
        return 'Invocar um Mago Digital?';
      case 'contact':
        return 'Enviar Mensagem à Guilda';
      default:
        return '';
    }
  }

  return (
    <div className="bg-gradient-to-br from-[#1a0c2e] via-[#0d0d0d] to-[#4a2507] min-h-screen text-white flex flex-col items-center justify-between p-4 pt-8 sm:p-6 animate-gradient font-sans">
      <main className="w-full max-w-lg mx-auto flex flex-col items-center z-10">
        <div className="w-full bg-black/40 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-orange-400/20 shadow-2xl shadow-purple-900/50">
          <Profile />
          <div className="flex flex-col space-y-4 mt-8">
            <LinkButton
              icon={<InfoIcon />}
              text="O Pergaminho Ancestral"
              onClick={() => openModal('what-is')}
            />
            <LinkButton
              icon={<InstagramIcon />}
              text="Espelho CarnaFolk"
              href="https://www.instagram.com/carnafolk.pg/"
            />
            <LinkButton
              icon={<TicketIcon />}
              text="Forjar Pergaminho de Entrada"
              onClick={() => openModal('ticket')}
            />
            <LinkButton
              icon={<LocationIcon />}
              text="O Mapa para o Covil"
              onClick={() => openModal('location')}
            />
             <LinkButton
              icon={<SealedLetterIcon />}
              text="Contatar a Guilda"
              onClick={() => openModal('contact')}
            />
          </div>
        </div>
      </main>
      
      <Footer onCtaClick={() => openModal('dev-cta')} />

      <Modal 
        isOpen={activeModal !== null} 
        onClose={closeModal} 
        title={getModalTitle()}
        isClosableOnBackdrop={activeModal !== 'ticket'}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default App;