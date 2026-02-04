
import React, { useState } from 'react';
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { InfoIcon, InstagramIcon, OracleIcon, LocationIcon, SealedLetterIcon, CameraIcon } from './components/icons';
import WhatIsModalContent from './components/modals/WhatIsModalContent';
import TicketModalContent from './components/modals/TicketModalContent';
import LocationModalContent from './components/modals/LocationModalContent';
import DeveloperCTAModalContent from './components/modals/DeveloperCTAModalContent';
import ContactModalContent from './components/modals/ContactModalContent';

type ModalType = 'what-is' | 'ticket' | 'location' | 'dev-cta' | 'contact' | null;

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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
        return 'Sobre o Evento';
      case 'ticket':
        return 'Ingressos e Valores';
      case 'location':
        return 'Localização';
      case 'dev-cta':
        return 'Crie seu Site Mágico';
      case 'contact':
        return 'Fale Conosco';
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
              icon={<CameraIcon />}
              text="Galeria de Fotos"
              href="https://drive.google.com/drive/folders/12a4-zVKfK6nYJG4tMi6aLAfWq8t82yi4"
            />
            <LinkButton
              icon={<InfoIcon />}
              text="O que é o CarnaFolk?"
              onClick={() => openModal('what-is')}
            />
            <LinkButton
              icon={<InstagramIcon />}
              text="Nosso Instagram"
              href="https://www.instagram.com/carnafolk.pg/"
            />
            <LinkButton
              icon={<OracleIcon />}
              text="Ingressos e Lotes"
              onClick={() => openModal('ticket')}
            />
            <LinkButton
              icon={<LocationIcon />}
              text="Localização"
              onClick={() => openModal('location')}
            />
             <LinkButton
              icon={<SealedLetterIcon />}
              text="Contato e Dúvidas"
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
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default App;
