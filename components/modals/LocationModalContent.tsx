
import React from 'react';
import { LocationIcon } from '../icons';

const LocationModalContent: React.FC = () => {
  return (
    <div className="space-y-6 text-center animate-fade-in-up">
       <div className="flex flex-col items-center space-y-2">
          <div className="w-14 h-14 text-orange-400 animate-pulse-subtle">
              <LocationIcon />
          </div>
          <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-400 to-orange-200 text-xl font-cinzel">
            O Covil Oculto
          </h3>
      </div>
      
      <div className="p-6 rounded-lg border bg-black/40 border-orange-500/30 shadow-[0_0_15px_rgba(251,146,60,0.1)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        <p className="font-cinzel font-bold text-orange-300 text-lg mb-2 relative z-10">
          O Mapa Está Sendo Desenhado
        </p>
        <p className="text-sm text-gray-300 italic relative z-10">
          "As brumas ainda cobrem o local do nosso próximo encontro. Apenas no momento certo as coordenadas serão reveladas aos dignos."
        </p>
      </div>

      <div className="w-full h-32 sm:h-40 rounded-lg overflow-hidden border border-orange-500/30 shadow-lg shadow-black/50 relative group flex items-center justify-center bg-black/60">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-orange-900/40 opacity-50"></div>
        <div className="text-orange-500/50 animate-pulse">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
           </svg>
        </div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      <div className="pt-2">
        <p className="text-xs text-orange-200/60 mt-3">
          Aguarde as próximas convocações para descobrir o caminho.
        </p>
      </div>
    </div>
  );
};

export default LocationModalContent;
