import React, { useState } from 'react';
import { WhatsAppIcon } from '../icons';

interface ContactModalContentProps {
  onClose: () => void;
}

const GUILD_WHATSAPP_NUMBER = "5542998126208";

const ContactModalContent: React.FC<ContactModalContentProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [urgency, setUrgency] = useState('');
  const [customSubject, setCustomSubject] = useState('');
  const [error, setError] = useState('');

  const handleContact = () => {
    if (!name.trim() || !subject || !urgency || (subject === 'outro' && !customSubject.trim())) {
      setError('Por favor, preencha todos os campos do pergaminho.');
      return;
    }

    const finalSubject = subject === 'outro' ? customSubject : subject;

    const message = encodeURIComponent(
      `Saudações, Guilda do CarnaFolk!\n\n` +
      `*Remetente:* ${name}\n` +
      `*Assunto:* ${finalSubject}\n` +
      `*Urgência:* ${urgency}\n\n` +
      `Gostaria de tratar sobre o assunto acima.`
    );
    window.open(`https://wa.me/${GUILD_WHATSAPP_NUMBER}?text=${message}`, '_blank');
    onClose();
  };
  
  const optionClasses = "bg-[#1f0e2e] text-orange-100/90";
  const disabledOptionClasses = "bg-[#1f0e2e] text-gray-500";

  return (
    <div className="space-y-4">
      <p className="text-orange-100/90 text-center text-sm">
        Preencha este pergaminho para que nossos corvos-mensageiros encontrem o destinatário correto na Guilda.
      </p>
      <div className="space-y-3">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-orange-200 mb-1">Vosso Nome</label>
          <input
            type="text"
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black/20 border border-white/30 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
            placeholder="Como devemos vos chamar?"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-orange-200 mb-1">Assunto da Mensagem</label>
          <select
            id="contact-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-black/20 border border-white/30 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
          >
            <option className={disabledOptionClasses} value="" disabled>Selecione um motivo...</option>
            <option className={optionClasses} value="Proposta de Atração/Banda">Proposta de Atração/Banda</option>
            <option className={optionClasses} value="Parcerias e Apoio">Parcerias e Apoio</option>
            <option className={optionClasses} value="Dúvidas Gerais">Dúvidas Gerais</option>
            <option className={optionClasses} value="Imprensa/Mídia">Imprensa/Mídia</option>
            <option className={optionClasses} value="outro">Outro (especificar)</option>
          </select>
        </div>
        {subject === 'outro' && (
          <div className="animate-fade-in-up">
            <label htmlFor="contact-custom-subject" className="block text-sm font-medium text-orange-200 mb-1">Especifique o Assunto</label>
            <input
              type="text"
              id="contact-custom-subject"
              value={customSubject}
              onChange={(e) => setCustomSubject(e.target.value)}
              className="w-full bg-black/20 border border-white/30 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              placeholder="Descreva brevemente"
            />
          </div>
        )}
         <div>
          <label htmlFor="contact-urgency" className="block text-sm font-medium text-orange-200 mb-1">Nível de Urgência</label>
          <select
            id="contact-urgency"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="w-full bg-black/20 border border-white/30 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
          >
            <option className={disabledOptionClasses} value="" disabled>Selecione a urgência...</option>
            <option className={optionClasses} value="Baixa">Baixa (Pode aguardar o próximo ciclo lunar)</option>
            <option className={optionClasses} value="Média">Média (Requer atenção em breve)</option>
            <option className={optionClasses} value="Urgente">Urgente (O dragão se aproxima!)</option>
          </select>
        </div>
      </div>
      {error && <p className="text-red-400 text-xs text-center pt-2">{error}</p>}
      <button
        onClick={handleContact}
        className="!mt-6 w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-500 transition-colors"
      >
        <div className="w-6 h-6"><WhatsAppIcon /></div> Enviar Corvo Mensageiro
      </button>
    </div>
  );
};

export default ContactModalContent;