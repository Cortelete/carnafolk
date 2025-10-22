import React from 'react';
import { TicketIcon } from '../icons';

const TicketModalContent: React.FC = () => {
  return (
    <div className="space-y-4 text-center animate-fade-in-up">
      <div className="w-16 h-16 mx-auto text-orange-300/70">
        <TicketIcon />
      </div>
      <h3 className="font-bold text-orange-300 text-lg font-cinzel">
        A Forja de Pergaminhos foi Selada!
      </h3>
      <div className="p-4 bg-black/20 border border-orange-400/30 rounded-lg text-orange-100/90 text-sm sm:text-base space-y-3">
        <p>
          Saudações, nobre aventureiro! Os escribas encerraram a confecção de
          salvo-condutos antecipados. A demanda do reino foi avassaladora!
        </p>
        <p className="font-bold text-orange-200">
          Mas não tema! Ainda haverá uma chance para os bravos e pontuais.
        </p>
        <p>
          Um lote limitado de pergaminhos estará disponível{' '}
          <strong className="text-orange-300">
            diretamente no portal da fortaleza
          </strong>
          , no dia do conclave.
        </p>
      </div>
      <div className="pt-2 text-center p-3 rounded-lg border bg-orange-500/10 border-orange-400/50">
        <p className="font-bold text-lg">Tributo no Portal: 10 moedas de ouro</p>
        <p className="text-xs text-orange-200/80">
          Chegue cedo para garantir vossa entrada e não ficar de fora desta
          saga!
        </p>
      </div>
    </div>
  );
};

export default TicketModalContent;
