import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Photo = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, type: string, delay: number}>>([]);
  const navigate = useNavigate();

  const handlePhotoClick = () => {
    setShowMessage(true);
    
    // Hide message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  // Generate floating sparkles and hearts
  useEffect(() => {
    const sparkleTypes = ['✦', '✧', '♡'];
    const newSparkles = [];
    
    for (let i = 0; i < 25; i++) {
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

      {/* Main photo container */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#FF69B4] mb-8">
          наша любовь ✨
        </h1>
        
        {/* Photo */}
        <div 
          onClick={handlePhotoClick}
          className="cursor-pointer transition-all duration-300 hover:scale-105 mb-8"
        >
          <img 
            src="https://cdn.poehali.dev/files/cfde35f9-96f8-42f0-9167-e901ba960209.jpg"
            alt="Наше фото"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-[#FFB6C1]"
          />
        </div>

        {/* Sweet message popup */}
        {showMessage && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-100 border-2 border-pink-300 rounded-full px-8 py-4 animate-bounce z-20">
            <p className="text-2xl md:text-3xl text-[#FF69B4] font-bold text-center">
              это мы! 💕
            </p>
          </div>
        )}

        {/* Instruction */}
        <p className="text-lg text-[#FFB6C1] mb-8 opacity-70">
          нажми на фото 📸
        </p>

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="bg-[#FFB6C1] hover:bg-[#FF69B4] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          назад к сердечку 💗
        </button>
      </div>
    </div>
  );
};

export default Photo;