import React from 'react';

const LocationModalContent: React.FC = () => {
  const address = "Rua Querência do Norte, nº315 - Olarias - Ponta Grossa - Rancho do Tuto";
  
  // A more robust and universal URL for Google Maps that works well on both mobile and desktop.
  // It directs users to a search result, which prompts to open the native app on mobile devices.
  const searchQuery = "Rancho do Tuto, Rua Querência do Norte, 315, Ponta Grossa, PR";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;

  return (
    <div className="space-y-4">
      <p className="text-center text-orange-100/90 text-sm sm:text-base italic">
        "Vós procurais o covil onde a magia acontece? Eis as coordenadas, gravadas em pedra:"
        <br/>
        <span className="font-semibold not-italic">{address}</span>
      </p>
      <div className="aspect-video w-full overflow-hidden rounded-lg border-2 border-orange-400/30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7733162077334!2d-50.13336312462113!3d-25.109533677767402!2m3!1f0!2f0!3f0!3m2!1i1024!i768!4f13.1!3m3!1m2!1s0x94e81b05c26da77b%3A0x17a574193ad94a89!2sRancho%20Do%20Tuto!5e0!3m2!1spt-BR!2sbr!4v1759329408518!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center text-gray-900 bg-orange-500 font-bold py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors"
      >
        Consultar o Oráculo dos Mapas
      </a>
    </div>
  );
};

export default LocationModalContent;
