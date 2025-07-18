import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

const Gift = () => {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);

  const handleGiftClick = () => {
    if (!isOpened) {
      setIsOpened(true);
      
      toast.success("дарю тебе от меня бесконечные обнимашки и целовашки сонечка! 🤗💕", {
        duration: 10000,
        style: {
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f9a8d4 100%)',
          color: '#831843',
          fontSize: '18px',
          fontWeight: '700',
          border: '3px solid #ec4899',
          borderRadius: '25px',
          padding: '25px 30px',
          boxShadow: '0 25px 50px rgba(236, 72, 153, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)',
          position: 'relative',
          textAlign: 'center',
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 relative overflow-hidden">
      {/* Плавающие сердечки и подарочки на фоне */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${Math.random() * 20 + 15}px`,
            }}
          >
            {Math.random() > 0.7 ? '🎁' : Math.random() > 0.5 ? '💕' : '🌸'}
          </div>
        ))}
      </div>

      {/* Заголовок */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4 drop-shadow-lg">
          особенный подарок для тебя 🎁
        </h1>
        <p className="text-xl text-pink-600 opacity-90">
          нажми на подарочек чтобы открыть его
        </p>
      </div>

      {/* Огромный подарок в центре */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`cursor-pointer transition-all duration-500 hover:scale-105 ${
            isOpened ? 'animate-bounce' : ''
          }`}
          onClick={handleGiftClick}
        >
          <div className="relative">
            {/* Подарочная коробка */}
            <img
              src="/img/57652767-3e16-4415-bbda-5566859509b4.jpg"
              alt="Розовый подарок"
              className="w-80 h-80 md:w-96 md:h-96 drop-shadow-2xl"
              style={{
                filter: isOpened 
                  ? 'drop-shadow(0 0 40px #ec4899) brightness(1.2)' 
                  : 'drop-shadow(0 0 20px #f9a8d4)',
              }}
            />
            
            {/* Мерцающие звездочки вокруг подарка */}
            {isOpened && (
              <>
                <div className="absolute -top-4 -left-4 text-4xl animate-ping text-pink-400">✨</div>
                <div className="absolute -top-4 -right-4 text-4xl animate-ping text-pink-400" style={{ animationDelay: '0.5s' }}>💫</div>
                <div className="absolute -bottom-4 -left-4 text-4xl animate-ping text-pink-400" style={{ animationDelay: '1s' }}>⭐</div>
                <div className="absolute -bottom-4 -right-4 text-4xl animate-ping text-pink-400" style={{ animationDelay: '1.5s' }}>✨</div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Картинка с объятиями (появляется после клика) */}
      {isOpened && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center animate-fade-in-up">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-4 border-pink-300">
            <div className="text-6xl mb-4">🤗</div>
            <p className="text-2xl font-bold text-pink-800 mb-2">
              бесконечные обнимашки
            </p>
            <p className="text-2xl font-bold text-pink-800">
              и целовашки! 💕
            </p>
          </div>
        </div>
      )}

      {/* Дополнительные анимированные элементы */}
      <div className="absolute top-1/4 left-8 text-4xl animate-pulse text-pink-400">🎀</div>
      <div className="absolute top-1/3 right-8 text-4xl animate-pulse text-pink-400" style={{ animationDelay: '1s' }}>🌺</div>
      <div className="absolute bottom-1/4 left-12 text-4xl animate-pulse text-pink-400" style={{ animationDelay: '2s' }}>💖</div>
      <div className="absolute bottom-1/3 right-12 text-4xl animate-pulse text-pink-400" style={{ animationDelay: '3s' }}>🌸</div>

      {/* Навигация */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          size="sm"
          className="bg-white/80 hover:bg-white/90 border-pink-300 text-pink-700 hover:text-pink-800 backdrop-blur-sm text-xs px-3 py-1"
        >
          <Icon name="Home" size={12} className="mr-1" />
          Главная
        </Button>
        <Button
          onClick={() => navigate('/letters')}
          variant="outline"
          size="sm"
          className="bg-white/80 hover:bg-white/90 border-pink-300 text-pink-700 hover:text-pink-800 backdrop-blur-sm text-xs px-3 py-1"
        >
          <Icon name="Mail" size={12} className="mr-1" />
          Письма
        </Button>
        <Button
          onClick={() => navigate('/stars')}
          variant="outline"
          size="sm"
          className="bg-white/80 hover:bg-white/90 border-pink-300 text-pink-700 hover:text-pink-800 backdrop-blur-sm text-xs px-3 py-1"
        >
          <Icon name="Star" size={12} className="mr-1" />
          Звезды
        </Button>
      </div>

      {/* Дополнительные стили для анимации */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Gift;