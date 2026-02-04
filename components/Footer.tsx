
import React from 'react';

interface FooterProps {
  onCtaClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCtaClick }) => {
  return (
    <footer className="w-full max-w-lg text-center mt-3 sm:mt-8 text-xs sm:text-sm text-gray-400 z-10 pb-2 sm:pb-0">
      <div className="mb-2 sm:mb-4">
        <button
          onClick={onCtaClick}
          className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 text-white font-semibold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-gradient text-xs sm:text-sm"
        >
          Deseja um site encantado como este? Fale com o Mago! 🧙‍♂️
        </button>
      </div>
      <p>
        Forjado por{' '}
        <a
          href="https://www.instagram.com/inteligenciarte.ia"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-gray-300 hover:text-orange-300 transition-colors"
        >
          InteligenciArte.IA ✨
        </a>
      </p>
    </footer>
  );
};

export default Footer;
