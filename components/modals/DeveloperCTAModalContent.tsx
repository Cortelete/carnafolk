
import React, { useState } from 'react';
import { WhatsAppIcon, QuillIcon } from '../icons';

interface DeveloperCTAModalContentProps {
  onClose: () => void;
}

const DeveloperCTAModalContent: React.FC<DeveloperCTAModalContentProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const developerWhatsapp = "5541988710303";

  const handleContact = () => {
    if (!name.trim()) {
      alert('Por favor, diga-me como devo me dirigir a Vossa Graça.');
      return;
    }

    const message = encodeURIComponent(
      `Saudações, nobre mago! Vi o portal encantado do CarnaFolk e desejo forjar um para meu próprio reino. Meu nome é ${name}.`
    );
    window.open(`https://wa.me/${developerWhatsapp}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="space-y-4">
      <p className="text-orange-100/90 text-center">
        Desejas forjar um portal digital como este para teu próprio reino? Para um pacto mais direto, diga-me vosso nome.
      </p>
      <div>
        <label htmlFor="dev-contact-name" className="flex items-center gap-2 text-orange-200 mb-1">
          <div className="w-4 h-4"><QuillIcon /></div>
          Vossa Graça
        </label>
        <input
          type="text"
          id="dev-contact-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-black/20 border border-white/30 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Digite vosso nome aqui"
        />
      </div>
      <button
        onClick={handleContact}
        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-500 transition-colors"
      >
        <WhatsAppIcon /> Enviar Corvo Mensageiro
      </button>
    </div>
  );
};

export default DeveloperCTAModalContent;