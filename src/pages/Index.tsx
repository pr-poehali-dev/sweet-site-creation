import { useState } from 'react';

const Index = () => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHeartClick = () => {
    setIsAnimating(true);
    setIsHeartClicked(!isHeartClicked);
    
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-['Playfair_Display']">
      {/* Main title */}
      <h1 className="text-6xl md:text-8xl font-bold text-[#FF69B4] mb-4 text-center">
        милый сайт
      </h1>
      
      {/* Subtitle */}
      <p className="text-3xl md:text-4xl text-[#FFB6C1] mb-12 text-center font-light">
        для милой сонечки!
      </p>
      
      {/* Interactive heart */}
      <div 
        onClick={handleHeartClick}
        className={`cursor-pointer select-none transition-all duration-300 ${
          isAnimating ? 'animate-bounce scale-110' : 'hover:scale-105'
        }`}
      >
        {isHeartClicked ? (
          <div className="text-8xl text-[#FF1493] drop-shadow-lg">💖</div>
        ) : (
          <div className="text-8xl text-[#FF69B4] drop-shadow-lg">💗</div>
        )}
      </div>
      
      {/* Subtle instruction */}
      <p className="text-sm text-[#FFB6C1] mt-8 opacity-70 text-center">
        нажми на сердечко ✨
      </p>
    </div>
  );
};

export default Index;