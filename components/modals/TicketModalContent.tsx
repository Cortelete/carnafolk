
import React from 'react';
import { TicketIcon } from '../icons';

const TicketModalContent: React.FC = () => {
  return (
    <div className="space-y-6 text-center animate-fade-in-up">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-14 h-14 text-orange-400 animate-pulse-subtle">
          <TicketIcon />
        </div>
        <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-400 to-orange-200 text-xl font-cinzel">
          O Portal Encontra-se Fechado
        </h3>
        <p className="text-sm text-orange-100/80">
          O próximo conclave ainda não foi convocado.
        </p>
      </div>

      <div className="p-6 rounded-lg border bg-black/40 border-orange-500/30 shadow-[0_0_15px_rgba(251,146,60,0.1)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        <p className="font-cinzel font-bold text-orange-300 text-lg mb-2 relative z-10">
          Em Breve, Novas Revelações
        </p>
        <p className="text-sm text-gray-300 italic relative z-10">
          Os bardos estão compondo as novas canções e os magos preparando o terreno. Fique atento aos sinais em nossas redes para saber quando o portal se abrirá novamente para a aquisição de pergaminhos.
        </p>
      </div>

      <div className="pt-2">
        <a 
          href="https://www.instagram.com/carnafolk.pg/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-full bg-gradient-to-r from-purple-800 to-orange-900 font-bold text-white py-3 px-4 rounded-lg overflow-hidden shadow-lg hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-white/10 group-hover:translate-x-full transition-transform duration-700 ease-in-out -skew-x-12 origin-left" />
          <span className="relative z-10 font-cinzel tracking-wider">Acompanhar os Sinais</span>
        </a>
      </div>
    </div>
  );
};

export default TicketModalContent;

