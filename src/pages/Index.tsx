import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, type: string, delay: number}>>([]);
  const navigate = useNavigate();

  const handleHeartClick = () => {
    setIsAnimating(true);
    setIsHeartClicked(!isHeartClicked);
    setShowMessage(true);
    
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 300);
    
    // Hide message after 2 seconds
    setTimeout(() => setShowMessage(false), 2000);
  };

  // Generate floating sparkles and hearts
  useEffect(() => {
    const sparkleTypes = ['✦', '✧', '♡'];
    const newSparkles = [];
    
    for (let i = 0; i < 20; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)],
        delay: Math.random() * 5
      });
    }
    
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-['Playfair_Display'] relative overflow-hidden">
      {/* Floating sparkles and hearts background */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-pink-300 pointer-events-none animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            fontSize: sparkle.type === '♡' ? '1.5rem' : '1rem'
          }}
        >
          {sparkle.type}
        </div>
      ))}
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
      
      {/* Sweet message popup */}
      {showMessage && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-100 border-2 border-pink-300 rounded-full px-8 py-4 animate-bounce z-10">
          <p className="text-2xl text-[#FF69B4] font-bold text-center">
            ты лучшая! 💕
          </p>
        </div>
      )}
      
      {/* Subtle instruction */}
      <p className="text-sm text-[#FFB6C1] mt-8 opacity-70 text-center">
        нажми на сердечко ✨
      </p>
      
      {/* Navigation buttons */}
      <div className="flex flex-wrap gap-3 mt-8 justify-center">
        <button
          onClick={() => navigate('/photo')}
          className="bg-[#FFB6C1] hover:bg-[#FF69B4] text-white font-medium py-3 px-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm"
        >
          фото 📸
        </button>
        <button
          onClick={() => navigate('/calendar')}
          className="bg-[#DDA0DD] hover:bg-[#DA70D6] text-white font-medium py-3 px-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm"
        >
          календарь 📅
        </button>
        <button
          onClick={() => navigate('/stars')}
          className="bg-[#4A5568] hover:bg-[#2D3748] text-white font-medium py-3 px-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm"
        >
          звезды ⭐
        </button>
      </div>
    </div>
  );
};

export default Index;