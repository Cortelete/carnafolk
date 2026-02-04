
import React from 'react';
import { TicketIcon, WhatsAppIcon } from '../icons';

const TicketModalContent: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date();
  
  // Datas limites (ajustadas para o ano atual para garantir lógica correta)
  const batch1End = new Date(currentYear, 2, 1); // 1 de Março (Mês é base 0, então 2 = Março)
  const eventDate = new Date(currentYear, 2, 14); // 14 de Março

  // Função auxiliar para determinar se um lote está ativo, expirado ou futuro
  const getBatchStatus = (type: 'batch1' | 'batch2' | 'door') => {
    if (type === 'batch1') {
      return currentDate < batch1End ? 'active' : 'expired';
    }
    if (type === 'batch2') {
      return currentDate >= batch1End && currentDate < eventDate ? 'active' : (currentDate >= eventDate ? 'expired' : 'future');
    }
    if (type === 'door') {
      return currentDate >= eventDate ? 'active' : 'future';
    }
    return 'future';
  };

  const batches = [
    {
      id: 'batch1',
      title: '1º Lote (Antecipado)',
      price: 'R$ 5,00',
      condition: 'Até 1 de Março',
      status: getBatchStatus('batch1')
    },
    {
      id: 'batch2',
      title: '2º Lote (Chamado Tardio)',
      price: 'R$ 10,00',
      condition: 'Após 01/03 até o dia',
      status: getBatchStatus('batch2')
    },
    {
      id: 'door',
      title: 'No Portão do Covil',
      price: 'R$ 15,00',
      condition: 'Dia 14 de Março',
      status: getBatchStatus('door')
    }
  ];

  const whatsappNumber = "5542998126208";
  const message = encodeURIComponent("Olá! Desejo adquirir meu ingresso para o CarnaFolk.");

  return (
    <div className="space-y-6 text-center animate-fade-in-up">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-14 h-14 text-orange-400 animate-pulse-subtle">
          <TicketIcon />
        </div>
        <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-400 to-orange-200 text-xl font-cinzel">
          O Valor da Travessia
        </h3>
        <p className="text-sm text-orange-100/80">
          Garanta seu salvo-conduto antes que o portal se feche.
        </p>
      </div>

      <div className="space-y-3">
        {batches.map((batch) => {
          const isActive = batch.status === 'active';
          const isExpired = batch.status === 'expired';
          
          return (
            <div 
              key={batch.id}
              className={`
                relative p-4 rounded-lg border transition-all duration-300
                ${isActive 
                  ? 'bg-gradient-to-r from-orange-900/40 to-purple-900/40 border-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.3)] scale-105 z-10' 
                  : 'bg-black/20 border-white/10 opacity-80 hover:opacity-100'}
                ${isExpired ? 'opacity-50 grayscale' : ''}
              `}
            >
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className={`font-cinzel font-bold ${isActive ? 'text-orange-300' : 'text-gray-400'}`}>
                    {batch.title}
                  </p>
                  <p className="text-xs text-gray-400 italic mt-1">{batch.condition}</p>
                </div>
                <div className="text-right">
                   <p className={`text-xl font-bold ${isActive ? 'text-white' : 'text-gray-500'}`}>
                    {batch.price}
                   </p>
                   {isActive && (
                     <span className="inline-block px-2 py-0.5 bg-green-900/50 border border-green-500/30 rounded text-[10px] text-green-300 uppercase tracking-wider mt-1">
                       Vigente
                     </span>
                   )}
                   {isExpired && (
                     <span className="inline-block px-2 py-0.5 bg-red-900/30 border border-red-500/20 rounded text-[10px] text-red-400 uppercase tracking-wider mt-1">
                       Encerrado
                     </span>
                   )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-2">
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-full bg-gradient-to-r from-green-700 to-emerald-600 font-bold text-white py-3 px-4 rounded-lg overflow-hidden shadow-lg hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-700 ease-in-out -skew-x-12 origin-left" />
          <div className="w-5 h-5 mr-2">
            <WhatsAppIcon />
          </div>
          <span className="relative z-10">Adquirir Ingresso Agora</span>
        </a>
        <p className="text-xs text-orange-200/60 mt-3">
          Pagamento e envio do ticket mágico via Corvo (WhatsApp).
        </p>
      </div>
    </div>
  );
};

export default TicketModalContent;
