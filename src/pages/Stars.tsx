import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

const Stars = () => {
  const navigate = useNavigate();
  const [showStar, setShowStar] = useState(false);
  const [starPosition, setStarPosition] = useState({ x: 50, y: 0 });
  const [showText, setShowText] = useState(false);
  const [showStarMessage, setShowStarMessage] = useState(false);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    
    setStarPosition({ x, y: 0 });
    setShowStar(true);
    setShowText(false);
    setShowStarMessage(false);
    
    // Анимация падения звезды
    setTimeout(() => {
      setStarPosition({ x, y: 50 });
      setTimeout(() => {
        setShowText(true);
      }, 1000);
    }, 100);
  };

  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowStarMessage(true);
    
    toast.success("безумно тебя люблю до луны и обратно и даже больше, ты моя вселенная 🌙", {
      duration: 8000,
      style: {
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: '600',
        border: '2px solid #ffd700',
        borderRadius: '20px',
        padding: '20px 24px',
        boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.1)',
        position: 'relative',
      },
    });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden cursor-pointer"
      onClick={handleBackgroundClick}
      style={{
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="star" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:%23ffffff;stop-opacity:1" /><stop offset="100%" style="stop-color:%23ffffff;stop-opacity:0" /></radialGradient></defs>${Array.from({ length: 200 }, (_, i) => 
          `<circle cx="${Math.random() * 1000}" cy="${Math.random() * 1000}" r="${Math.random() * 2 + 0.5}" fill="url(%23star)" opacity="${Math.random() * 0.8 + 0.2}">`
        ).join('')}</svg>')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Звездное небо с мерцающими звездами */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              color: '#ffffff',
              fontSize: `${Math.random() * 8 + 4}px`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      {/* Падающая звезда */}
      {showStar && (
        <div
          className="absolute text-6xl cursor-pointer transition-all duration-2000 ease-out hover:scale-110"
          style={{
            left: `${starPosition.x}%`,
            top: `${starPosition.y}%`,
            transform: 'translate(-50%, -50%)',
            color: '#ffd700',
            textShadow: '0 0 20px #ffd700, 0 0 40px #ffd700, 0 0 60px #ffd700',
            filter: 'drop-shadow(0 0 10px #ffd700)',
          }}
          onClick={handleStarClick}
        >
          ⭐
        </div>
      )}

      {/* Романтичное сообщение под звездой */}
      {showText && (
        <div
          className="absolute text-center animate-fade-in"
          style={{
            left: `${starPosition.x}%`,
            top: `${starPosition.y + 15}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
            я достану тебе все звёздочки с неба!
          </p>
          <p className="text-lg text-yellow-200 opacity-80">
            нажми на звезду ⭐
          </p>
        </div>
      )}

      {/* Заголовок страницы */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          звездное небо для тебя
        </h1>
        <p className="text-xl text-blue-200 opacity-80">
          нажми на небо ✨
        </p>
      </div>

      {/* Навигация */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            navigate('/');
          }}
          variant="outline"
          className="bg-white/20 hover:bg-white/30 border-white/30 text-white hover:text-white backdrop-blur-sm"
        >
          <Icon name="Home" size={16} className="mr-2" />
          На главную
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            navigate('/photo');
          }}
          variant="outline"
          className="bg-white/20 hover:bg-white/30 border-white/30 text-white hover:text-white backdrop-blur-sm"
        >
          <Icon name="Camera" size={16} className="mr-2" />
          К фото
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            navigate('/calendar');
          }}
          variant="outline"
          className="bg-white/20 hover:bg-white/30 border-white/30 text-white hover:text-white backdrop-blur-sm"
        >
          <Icon name="Calendar" size={16} className="mr-2" />
          Календарь
        </Button>
      </div>

      {/* Дополнительные стили для анимации */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) translateY(0);
          }
        }
        
        .duration-2000 {
          transition-duration: 2s;
        }
      `}</style>
    </div>
  );
};

export default Stars;