import React, { useState, useEffect, useRef } from 'react';

const LOGO_1 = '/iniciais.png';
const LOGO_2 = '/logohw.png';

const Profile: React.FC = () => {
  const [currentLogo, setCurrentLogo] = useState(LOGO_1);
  const [rotation, setRotation] = useState(0);
  const velocityRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Effect for alternating logo every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo === LOGO_1 ? LOGO_2 : LOGO_1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  // Animation loop function
  const animate = () => {
    velocityRef.current *= 0.97; // Apply friction
    setRotation((prev) => prev + velocityRef.current);

    if (Math.abs(velocityRef.current) > 0.1) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      velocityRef.current = 0;
    }
  };

  const handleSpin = () => {
    // Add a significant boost to velocity
    velocityRef.current += 15;
    
    // Start animation loop if not already running
    if (Math.abs(velocityRef.current) <= 15) {
       animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

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
      <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4" style={{ perspective: '1000px' }}>
        <img
          src={currentLogo}
          alt="Logo CarnaFolk"
          className="w-full h-full rounded-full object-cover cursor-pointer"
          onClick={handleSpin}
          style={{
            transform: `rotateY(${rotation}deg)`,
            transition: 'transform 0s linear' // ensure smooth JS animation
          }}
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold font-cinzel bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
        CarnaFolk
      </h1>
      <p className="text-base sm:text-lg font-semibold text-orange-300 mt-2 tracking-wide">
        25 de Outubro • Rancho do Tuto
      </p>
      <p className="text-sm sm:text-base text-orange-200/80 mt-2 italic">
        "Onde as brumas se erguem e as canções dos bardos ecoam na noite de Samhain."
      </p>
    </div>
  );
};

export default Profile;
