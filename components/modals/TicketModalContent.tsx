import React from 'react';
import { OracleIcon } from '../icons';

const TicketModalContent: React.FC = () => {
  return (
    <div className="space-y-4 text-center animate-fade-in-up">
      <div className="w-16 h-16 mx-auto text-orange-300/70">
        <OracleIcon />
      </div>
      <h3 className="font-bold text-orange-300 text-lg font-cinzel">
        As Brumas do Tempo se Agitam...
      </h3>
      <div className="p-4 bg-black/20 border border-orange-400/30 rounded-lg text-orange-100/90 text-sm sm:text-base space-y-3">
        <p>
          O grande conclave de Samhain chegou ao fim, mas os ecos das canções e o clangor das forjas ainda ressoam no vale.
        </p>
        <p className="font-bold text-orange-200">
          O Oráculo observa o fluxo do tempo, buscando sinais da próxima grande reunião.
        </p>
        <p>
          As estrelas ainda não revelaram a data, mas sussurram sobre uma celebração ainda maior. Mantenha seus olhos no <strong className="text-orange-300">Espelho CarnaFolk</strong> (nosso Instagram) para não perder o chamado.
        </p>
      </div>
      <div className="pt-2">
        <a 
          href="https://www.instagram.com/carnafolk.pg/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center text-gray-900 bg-orange-500 font-bold py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors animate-pulse-subtle"
        >
          Consultar o Espelho CarnaFolk
        </a>
      </div>
      <p className="text-xs text-orange-200/80 italic">A lenda continua...</p>
    </div>
  );
};

export default TicketModalContent;