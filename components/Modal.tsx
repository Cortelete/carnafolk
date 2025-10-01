
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  isClosableOnBackdrop?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, isClosableOnBackdrop = true }) => {
  if (!isOpen) return null;

  const handleBackdropClick = () => {
    if (isClosableOnBackdrop) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-[fadeIn_0.3s_ease-out]"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-lg bg-gradient-to-br from-[#1f0e2e] to-[#4a2a0b] rounded-2xl border border-orange-400/30 shadow-2xl shadow-purple-900/60 p-6 sm:p-8 text-white animate-[scaleUp_0.3s_ease-out_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold font-cinzel bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

// Add keyframes for animations in index.html for CDN compatibility
// For this component, let's define them here in comments for clarity
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes scaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

export default Modal;
