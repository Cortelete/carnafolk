
import React from 'react';
import { LocationIcon } from '../icons';

const LocationModalContent: React.FC = () => {
  const address = "R. Querência do Norte, 315 - Olarias, Ponta Grossa - PR";
  const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Rancho Do Tuto Ponta Grossa")}`;

  return (
    <div className="space-y-4 text-center animate-fade-in-up">
       <div className="flex flex-col items-center space-y-2">
          <div className="w-14 h-14 text-orange-400 animate-pulse-subtle">
              <LocationIcon />
          </div>
          <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-yellow-400 to-orange-200 text-xl font-cinzel">
            O Covil do Reencontro
          </h3>
      </div>
      
      <div className="text-orange-100/90 text-sm space-y-1">
        <p className="italic text-orange-200/80">
          "Onde as lendas nasceram, a história continua..."
        </p>
        <p>
          O conclave retorna ao solo sagrado do <strong>Rancho do Tuto</strong>.
        </p>
        <p className="text-xs text-gray-400 mt-2 border-t border-white/10 pt-2">
          {address}
        </p>
      </div>

      <div className="w-full h-48 sm:h-56 rounded-lg overflow-hidden border border-orange-500/30 shadow-lg shadow-black/50 relative group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.773315550764!2d-50.1307882!3d-25.109533700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81b05c26da77b%3A0x17a574193ad94a89!2sRancho%20Do%20Tuto!5e0!3m2!1spt-BR!2sbr!4v1770217739363!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa do Rancho do Tuto"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>

      <a 
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-full bg-gradient-to-r from-blue-700 to-indigo-600 font-bold text-white py-3 px-4 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 relative z-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
        <span className="relative z-10">Traçar Rota Real (GPS)</span>
      </a>
    </div>
  );
};

export default LocationModalContent;
