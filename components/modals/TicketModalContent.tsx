
import React from 'react';
import { TicketIcon, WhatsAppIcon } from '../icons';

const TicketModalContent: React.FC = () => {
  const whatsappNumber = "5542998126208";
  const message = encodeURIComponent("Olá! Desejo adquirir meu ingresso para o Arraieval.");

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
          Garanta seu salvo-conduto para o dia 20 de Junho às 14h.
        </p>
      </div>

      <div className="space-y-3">
        <div className="relative p-4 rounded-lg border transition-all duration-300 bg-gradient-to-r from-orange-900/40 to-purple-900/40 border-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.3)] scale-105 z-10">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="font-cinzel font-bold text-orange-300">
                Lote Antecipado
              </p>
              <p className="text-xs text-gray-400 italic mt-1">Disponível agora</p>
            </div>
            <div className="text-right">
                <p className="text-xl font-bold text-white">
                R$ 10,00
                </p>
                <span className="inline-block px-2 py-0.5 bg-green-900/50 border border-green-500/30 rounded text-[10px] text-green-300 uppercase tracking-wider mt-1">
                  Vigente
                </span>
            </div>
          </div>
        </div>

        <div className="relative p-4 rounded-lg border transition-all duration-300 bg-black/20 border-white/10 opacity-80 hover:opacity-100">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="font-cinzel font-bold text-gray-400">
                Na Portaria do Covil
              </p>
              <p className="text-xs text-gray-400 italic mt-1">No dia do evento</p>
            </div>
            <div className="text-right">
                <p className="text-xl font-bold text-gray-500">
                R$ 15,00
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 bg-red-900/10 border border-red-500/20 rounded-lg text-left space-y-2 mt-4 text-xs">
         <p className="text-orange-200/80 font-bold border-b border-orange-500/20 pb-1 mb-2">Regras do Conclave:</p>
         <ul className="list-disc pl-4 space-y-1 text-orange-100/70">
           <li>Crianças <strong className="text-orange-300">até 12 anos não pagam</strong> a travessia.</li>
           <li>Menores de idade só têm a passagem permitida <strong className="text-orange-300">acompanhados de um guardião/responsável</strong>.</li>
         </ul>
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
          <span className="relative z-10">Adquirir Pergaminho Agora</span>
        </a>
        <p className="text-xs text-orange-200/60 mt-3">
          Pagamento e envio do ticket mágico via Corvo (WhatsApp).
        </p>
      </div>
    </div>
  );
};

export default TicketModalContent;

