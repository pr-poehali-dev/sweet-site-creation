import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

const Comfort = () => {
  const navigate = useNavigate();
  const [messageIndex, setMessageIndex] = useState(0);

  const comfortMessages = [
    "я тебя люблю",
    "я рядом сонечка",
    "я с тобой навсегда",
    "грусть временна, а наша любовь — нет",
    "обнимаю обнимаю!",
    "не грусти моя родная!",
    "целую целую!"
  ];

  const handleSOSClick = () => {
    // Выбираем случайное сообщение
    const randomIndex = Math.floor(Math.random() * comfortMessages.length);
    const message = comfortMessages[randomIndex];
    
    toast.success(message + " 💕", {
      duration: 5000,
      style: {
        background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f9a8d4 100%)',
        color: '#831843',
        fontSize: '20px',
        fontWeight: '700',
        border: '3px solid #ec4899',
        borderRadius: '25px',
        padding: '25px 30px',
        boxShadow: '0 25px 50px rgba(236, 72, 153, 0.4), 0 0 40px rgba(255, 182, 193, 0.3)',
        position: 'relative',
        textAlign: 'center',
        minWidth: '300px',
      },
    });

    setMessageIndex(randomIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 relative overflow-hidden">
      {/* Плавающие элементы поддержки */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-70 text-pink-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${Math.random() * 15 + 12}px`,
            }}
          >
            ♡
          </div>
        ))}
      </div>

      {/* Заголовок */}
      <div className="text-center pt-8 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
          не грусти, моя родная 💕
        </h1>
        <p className="text-xl text-pink-600 mb-4">
          я всегда рядом с тобой
        </p>
        <p className="text-lg text-pink-500 italic">
          нажми SOS когда нужна поддержка
        </p>
      </div>

      {/* Милый котёнок */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <img 
            src="https://cdn.poehali.dev/files/92b33181-dfd1-4883-ad02-11525355dad6.jpg" 
            alt="Милый котёнок"
            className="w-64 h-64 object-contain rounded-3xl bg-white/80 p-6 shadow-xl border-4 border-pink-200"
          />
          <div className="absolute -top-2 -right-2 text-3xl animate-bounce">💖</div>
          <div className="absolute -bottom-2 -left-2 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</div>
          <div className="absolute -top-2 -left-2 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
        </div>
      </div>

      {/* Центральная кнопка SOS */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleSOSClick}
          className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-8 px-12 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl border-4 border-white"
        >
          <div className="text-2xl font-black">SOS</div>
          <div className="text-sm font-medium mt-2">нажми меня!</div>
        </button>
      </div>

      {/* Милые сообщения вокруг */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200 text-center">
            <div className="text-3xl mb-3">🫂</div>
            <p className="text-pink-700 font-medium">
              виртуальные объятия всегда готовы!
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200 text-center">
            <div className="text-3xl mb-3">💌</div>
            <p className="text-pink-700 font-medium">
              любовь доставляется мгновенно
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200 text-center">
            <div className="text-3xl mb-3">🌈</div>
            <p className="text-pink-700 font-medium">
              после дождичка выходит солнышко
            </p>
          </div>
        </div>
      </div>

      {/* Дополнительные мотивирующие элементы */}
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl p-6 mx-6 shadow-lg border-2 border-pink-300">
          <p className="text-xl text-pink-800 font-bold mb-2">
            🌟 помни 🌟
          </p>
          <p className="text-lg text-pink-700 italic">
            "ты самая лучшая, самая дорогая, и я всегда буду рядом"
          </p>
        </div>
      </div>

      {/* Плавающие цитаты */}
      <div className="absolute top-1/4 left-8 bg-white/90 rounded-2xl p-4 shadow-lg border-2 border-pink-200 max-w-xs animate-pulse">
        <p className="text-pink-700 font-medium text-sm">
          "Грусть - это просто облачко, а ты - моё солнышко!" ☀️
        </p>
      </div>
      
      <div className="absolute top-1/3 right-8 bg-white/90 rounded-2xl p-4 shadow-lg border-2 border-pink-200 max-w-xs animate-pulse" style={{ animationDelay: '2s' }}>
        <p className="text-pink-700 font-medium text-sm">
          "Я верю в тебя больше, чем ты сама!" 💪
        </p>
      </div>

      {/* Навигация */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
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
          onClick={() => navigate('/gift')}
          variant="outline"
          size="sm"
          className="bg-white/80 hover:bg-white/90 border-pink-300 text-pink-700 hover:text-pink-800 backdrop-blur-sm text-xs px-3 py-1"
        >
          <Icon name="Gift" size={12} className="mr-1" />
          Подарок
        </Button>
      </div>

      {/* Дополнительные стили для анимации */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Comfort;