
import React from 'react';

interface LinkButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  href?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ icon, text, onClick, href }) => {
  const commonClasses = "group w-full flex items-center py-2.5 px-4 sm:p-4 rounded-lg bg-black/30 border border-white/20 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-purple-900/30 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 hover:border-orange-400/50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75";
  const content = (
    <>
      <div className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="flex-grow text-center text-sm sm:text-base font-semibold text-orange-100 pr-5 sm:pr-6">
        {text}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses}>
      {content}
    </button>
  );
};

export default LinkButton;
