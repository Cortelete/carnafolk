
import React, { useState, useEffect, useRef, useCallback } from 'react';

const LOGO_1 = '/logo.png';

const Profile: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const isSettlingRef = useRef(false);

  // Animation loop function
  const animate = useCallback(() => {
    if (isSettlingRef.current) {
      const targetRotation = Math.round(rotationRef.current / 180) * 180;
      const diff = targetRotation - rotationRef.current;
      
      // If we are close enough, snap to the target and stop the animation.
      if (Math.abs(diff) < 0.1) {
        rotationRef.current = targetRotation;
        setRotation(targetRotation);
        isSettlingRef.current = false;
        animationFrameRef.current = null;
        return;
      }
      
      // Ease into the final position
      rotationRef.current += diff * 0.1;
      setRotation(rotationRef.current);
      
    } else {
      velocityRef.current *= 0.97; // Apply friction
      rotationRef.current += velocityRef.current;
      setRotation(rotationRef.current);

      // If velocity is low, start the settling process
      if (Math.abs(velocityRef.current) < 0.1) {
        velocityRef.current = 0;
        isSettlingRef.current = true;
      }
    }
    
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  const handleSpin = useCallback(() => {
    isSettlingRef.current = false; // Interrupt settling if user clicks again
    velocityRef.current += 15; // Add a spin boost
    
    // Start animation loop if it's not already running
    if (!animationFrameRef.current) {
       animationFrameRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      <div 
        className="w-20 h-20 sm:w-32 sm:h-32 mb-2 sm:mb-4 cursor-pointer" 
        style={{ perspective: '1000px' }}
        onClick={handleSpin}
        role="button"
        aria-label="Girar o logo"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSpin(); }}
      >
        <div 
            className="relative w-full h-full"
            style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotation}deg)`,
                transition: 'transform 0s linear'
            }}
        >
            {/* Front Face */}
            <img
                src={LOGO_1}
                alt="Logo CarnaFolk - Emblema do Evento"
                className="absolute w-full h-full"
                style={{ backfaceVisibility: 'hidden' }}
            />
            {/* Back Face */}
            <img
                src={LOGO_1}
                alt="Logo CarnaFolk - Emblema do Evento"
                className="absolute w-full h-full"
                style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                }}
            />
        </div>
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold font-cinzel bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
        CarnaFolk
      </h1>
      <p className="text-sm sm:text-lg font-semibold text-orange-300 mt-1 sm:mt-2 tracking-wide uppercase border-b border-orange-500/30 pb-1">
        14 de Março • A partir das 14h
      </p>
      <p className="hidden sm:block text-sm sm:text-base text-orange-200/80 mt-2 italic">
        "Onde as brumas se erguem e as canções dos bardos ecoam."
      </p>
    </div>
  );
};

export default Profile;
