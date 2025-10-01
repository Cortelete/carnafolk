import React, { useState, useMemo } from 'react';

interface Ticket {
  id: number;
  name: string;
  rg: string;
  age: string;
  observation: string;
}

const TicketModalContent: React.FC = () => {
  const [step, setStep] = useState(1); // 1: Form, 2: Age Check, 3: Payment
  const [tickets, setTickets] = useState<Ticket[]>([{ id: Date.now(), name: '', rg: '', age: '', observation: '' }]);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'local'>('pix');
  const [hasConfirmedAgePolicy, setHasConfirmedAgePolicy] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const PIX_KEY = "henrygabri2000@gmail.com";
  const WHATSAPP_NUMBER = "5542998126208";

  const pricePerTicket = useMemo(() => paymentMethod === 'pix' ? 5 : 10, [paymentMethod]);
  const totalPrice = useMemo(() => tickets.length * pricePerTicket, [tickets.length, pricePerTicket]);

  const addTicket = () => {
    setTickets([...tickets, { id: Date.now(), name: '', rg: '', age: '', observation: '' }]);
  };

  const removeTicket = (id: number) => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
  };

  const handleTicketChange = (id: number, field: keyof Omit<Ticket, 'id'>, value: string) => {
    if (field === 'rg' && !/^\d*$/.test(value)) return;
    setTickets(tickets.map(ticket => ticket.id === id ? { ...ticket, [field]: value } : ticket));
  };

  const handleProceedToAgeCheck = () => {
    setErrorMessage('');
    const isAnyFieldMissing = tickets.some(ticket => !ticket.name.trim() || !ticket.rg.trim() || !ticket.age.trim());
    if (isAnyFieldMissing) {
      setErrorMessage('Nobre aventureiro, preencha Nome, Registro e Ciclos Solares de todos.');
      return;
    }
    const hasUnderageTicket = tickets.some(ticket => parseInt(ticket.age, 10) < 18);
    if (hasUnderageTicket) {
      setStep(2);
    } else {
      setStep(3);
    }
  };
  
  const handleProceedToPayment = () => {
      setErrorMessage('');
      if (!hasConfirmedAgePolicy) {
          setErrorMessage('Deves declarar ciência do édito para prosseguir.');
          return;
      }
      setStep(3);
  }

  const generateWhatsAppMessage = () => {
    const ticketsDetails = tickets.map((ticket, index) => (
      `\n📜 --- Pergaminho de Entrada ${index + 1} ---\n` +
      `👤 *Nome de Guerra:* ${ticket.name}\n` +
      `🛡️ *Registro do Reino:* ${ticket.rg}\n` +
      `☀️ *Ciclos Solares:* ${ticket.age}` +
      `${ticket.observation ? `\n✍️ *Anotação do Escriba:* ${ticket.observation}` : ''}`
    )).join('');

    let message = `Saudações, Mestre da Guilda! Venho por meio deste corvo-mensageiro selar meu pacto para o CarnaFolk.\n`;
    message += `\n*Pergaminhos dos Aventureiros:*${ticketsDetails}\n\n`;
    
    if (paymentMethod === 'pix') {
      message += `*Forma de Tributo:* 🔮 Magia Arcana (PIX Antecipado)\n`;
      message += `*Valor Total:* 💰 ${totalPrice} moedas de ouro\n\n`;
      message += `Anexarei a prova do ritual de pagamento.`;
    } else {
      message += `*Forma de Tributo:* 🤝 Pagamento no Portal (Local)\n`;
      message += `*Valor Total:* 💰 ${totalPrice} moedas de ouro\n\n`;
      message += `Honrarei o tributo no portal da fortaleza, mas desejo registrar meu nome no livro dos convidados.`;
    }
    
    return encodeURIComponent(message);
  };
  
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(PIX_KEY);
    alert('✨ Encantamento PIX copiado para seu grimório! ✨');
  };

  const renderFormStep = () => (
    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
      {tickets.map((ticket, index) => (
        <div key={ticket.id} className="p-3 bg-black/20 border border-orange-400/20 rounded-lg space-y-3 relative">
          {tickets.length > 1 && (
            <button
              onClick={() => removeTicket(ticket.id)}
              className="absolute top-2 right-2 text-red-400 hover:text-red-300 transition-colors"
              aria-label="Banir Aventureiro"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}
          <h4 className="text-md font-semibold text-orange-200">📜 Aventureiro {index + 1}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="text" value={ticket.name} onChange={(e) => handleTicketChange(ticket.id, 'name', e.target.value)} className="w-full bg-black/30 border border-white/30 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400" placeholder="Nome de Guerra (Completo)" required />
            <input type="text" inputMode="numeric" pattern="\d*" value={ticket.rg} onChange={(e) => handleTicketChange(ticket.id, 'rg', e.target.value)} className="w-full bg-black/30 border border-white/30 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400" placeholder="Registro do Reino (RG)" required />
            <input type="number" value={ticket.age} onChange={(e) => handleTicketChange(ticket.id, 'age', e.target.value)} className="w-full bg-black/30 border border-white/30 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400" placeholder="Ciclos Solares (Idade)" required />
            <input type="text" value={ticket.observation} onChange={(e) => handleTicketChange(ticket.id, 'observation', e.target.value)} className="w-full bg-black/30 border border-white/30 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400" placeholder="Anotação do Escriba (Opc.)" />
          </div>
        </div>
      ))}
      <button onClick={addTicket} className="w-full text-orange-200 border border-orange-400/50 rounded-lg py-2 text-sm hover:bg-orange-400/10 transition-colors">+ Convocar outro aventureiro</button>
      
      <div className="pt-2">
        <h4 className="text-md font-semibold text-orange-200 mb-2">Forma de Tributo</h4>
        <div className="flex gap-4">
          <button onClick={() => setPaymentMethod('pix')} className={`flex-1 p-3 rounded-lg border text-sm transition-all ${paymentMethod === 'pix' ? 'bg-orange-500/20 border-orange-400 text-white' : 'bg-black/20 border-gray-600 text-gray-400 hover:border-orange-500'}`}>
            <p className="font-bold">🔮 Tributo Arcano (PIX)</p>
            <p className="font-bold text-lg">5 <span className="text-xs">moedas</span></p>
          </button>
          <button onClick={() => setPaymentMethod('local')} className={`flex-1 p-3 rounded-lg border text-sm transition-all ${paymentMethod === 'local' ? 'bg-orange-500/20 border-orange-400 text-white' : 'bg-black/20 border-gray-600 text-gray-400 hover:border-orange-500'}`}>
            <p className="font-bold">🤝 Tributo no Portal</p>
            <p className="font-bold text-lg">10 <span className="text-xs">moedas</span></p>
          </button>
        </div>
      </div>

      <div className="text-right font-bold text-lg text-orange-100 mt-4">
        Tributo Total: <span className="text-xl text-orange-300">{totalPrice}</span> moedas de ouro
      </div>

      {errorMessage && <p className="text-red-400 text-sm text-center">{errorMessage}</p>}
      
      <button onClick={handleProceedToAgeCheck} className="w-full text-gray-900 bg-orange-500 font-bold py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors text-base">
        Continuar Jornada
      </button>
    </div>
  );

  const renderAgeCheckStep = () => (
    <div className="space-y-4 text-center">
        <h3 className="font-bold text-orange-200 text-lg">📜 Um Édito aos Jovens Escudeiros!</h3>
        <p className="text-orange-100/90 text-sm">
            Nossos batedores notaram um aventureiro com menos de <strong className="text-orange-300">18 ciclos solares</strong>.
        </p>
        <p className="text-orange-100/90 text-sm bg-black/20 p-3 rounded-lg border border-orange-500/30">
            Por ordem do conselho, jovens aprendizes só podem adentrar a fortaleza <strong className="text-orange-300">acompanhados de seus guardiões legais</strong>.
        </p>
        <div className="flex items-center justify-center gap-2 pt-2">
            <input type="checkbox" id="age-policy" checked={hasConfirmedAgePolicy} onChange={(e) => setHasConfirmedAgePolicy(e.target.checked)} className="h-4 w-4 rounded bg-black/30 border-gray-500 text-orange-500 focus:ring-orange-500" />
            <label htmlFor="age-policy" className="text-sm text-orange-100/90">Declaro estar ciente deste decreto.</label>
        </div>
        {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}
        <div className="flex gap-4 pt-2">
            <button onClick={() => setStep(1)} className="flex-1 text-orange-200 bg-black/20 border border-orange-400/50 rounded-lg py-2 text-sm hover:bg-orange-400/10 transition-colors">Retornar</button>
            <button onClick={handleProceedToPayment} disabled={!hasConfirmedAgePolicy} className="flex-1 text-gray-900 bg-orange-500 font-bold py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors text-base disabled:bg-gray-600 disabled:cursor-not-allowed">
                Prosseguir
            </button>
        </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="space-y-4 text-center">
      {paymentMethod === 'pix' ? (
        <>
          <p className="text-orange-100/90 text-sm">
            Honre o pacto com um tributo de <strong className="text-orange-300">{totalPrice} moedas de ouro</strong>. Use o encantamento abaixo (Chave PIX) em seu grimório financeiro.
          </p>
          <div className="p-3 bg-black/30 border border-orange-400/30 rounded-lg">
            <p className="text-sm text-orange-100/70">🔮 Encantamento PIX (E-mail):</p>
            <p className="font-mono text-lg text-orange-200 tracking-wider">{PIX_KEY}</p>
          </div>
          <button onClick={handleCopyToClipboard} className="w-full text-orange-200 border border-orange-400/50 rounded-lg py-2 text-sm hover:bg-orange-400/10 transition-colors">Copiar Encantamento</button>
          
          <div className="!mt-6 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
              <p className="font-bold text-red-200 text-sm">⚠️ ATENÇÃO, HERÓI: ⚠️</p>
              <p className="text-red-200/90 text-xs">
                Após o ritual, <strong className="text-red-100">SELE O PACTO ABAIXO</strong> para enviar seus dados e a <strong className="text-red-100">prova de vossa lealdade</strong> via corvo-mensageiro (WhatsApp).
              </p>
          </div>
        </>
      ) : (
        <>
          <p className="text-orange-100/90 text-sm">
            Vossa reserva para <strong className="text-orange-300">{tickets.length} aventureiro(s)</strong> por <strong className="text-orange-300">{totalPrice} moedas de ouro</strong> está quase selada!
          </p>
          <p className="text-orange-100/90 text-sm">
            Clique para enviar vossos nomes ao nosso Mestre da Guilda e garantir seu lugar no conclave. O tributo será honrado no portal.
          </p>
        </>
      )}

      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`} target="_blank" rel="noopener noreferrer" className="block w-full text-gray-900 bg-orange-500 font-bold py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors text-base">
        {paymentMethod === 'pix' ? 'Selar Pacto e Enviar Prova' : 'Selar Reserva'}
      </a>
      <button onClick={() => setStep(1)} className="w-full text-orange-200 mt-2 text-sm hover:underline">Voltar à forja</button>
    </div>
  );

  switch (step) {
    case 1:
      return renderFormStep();
    case 2:
      return renderAgeCheckStep();
    case 3:
      return renderPaymentStep();
    default:
      return null;
  }
};

export default TicketModalContent;