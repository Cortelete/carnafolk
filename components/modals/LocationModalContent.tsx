import React from 'react';
import { LocationIcon } from '../icons';

const LocationModalContent: React.FC = () => {
  return (
    <div className="space-y-4 text-center">
       <div className="w-16 h-16 mx-auto text-orange-300/70">
          <LocationIcon />
      </div>
      <h3 className="font-bold text-orange-300 text-lg font-cinzel">
        As Coordenadas do Próximo Encontro
      </h3>
      <div className="p-4 bg-black/20 border border-orange-400/30 rounded-lg text-orange-100/90 text-sm sm:text-base space-y-3">
        <p className="italic">
          "O último conclave se tornou lenda, e a localização de seu covil agora repousa sob um véu de névoa..."
        </p>
        <p>
          O mapa para a próxima jornada ainda está sendo traçado pelos cartógrafos astrais. Quando os presságios forem claros, as coordenadas serão reveladas aqui.
        </p>
        <p className="font-semibold text-orange-200">
          Fique atento, nobre aventureiro! O chamado para a próxima saga será proclamado em breve.
        </p>
      </div>
    </div>
  );
};

export default LocationModalContent;