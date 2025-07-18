import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Counter = () => {
  const navigate = useNavigate();
  const [timeData, setTimeData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Дата начала отношений - 12 сентября 2024
  const startDate = new Date('2024-09-12T00:00:00');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeData({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 relative overflow-hidden">
      {/* Плавающие сердечки на фоне */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-60 text-pink-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${Math.random() * 15 + 10}px`,
            }}
          >
            ♡
          </div>
        ))}
      </div>

      {/* Заголовок */}
      <div className="text-center pt-8 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
          наш счётчик любви 💕
        </h1>
        <p className="text-xl text-pink-600 mb-2">
          мы вместе уже...
        </p>
        <p className="text-lg text-pink-500 italic">
          с 12 сентября 2024 года
        </p>
      </div>

      {/* Милая картинка */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <img 
            src="https://cdn.poehali.dev/files/74e89a7c-24fe-4c20-8d3c-484a821c5d05.jpg" 
            alt="Милые девочки с едой"
            className="w-80 h-60 object-cover rounded-3xl shadow-xl border-4 border-pink-200"
          />
          <div className="absolute -top-3 -right-3 text-4xl animate-pulse">💝</div>
          <div className="absolute -bottom-3 -left-3 text-4xl animate-pulse">🌸</div>
        </div>
      </div>

      {/* Счётчик времени */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Дни */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200 text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-700 mb-2">
              {timeData.days}
            </div>
            <div className="text-lg text-pink-600 font-medium">
              {timeData.days === 1 ? 'день' : 
               timeData.days < 5 ? 'дня' : 'дней'}
            </div>
            <div className="text-2xl mt-2">📅</div>
          </div>

          {/* Часы */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200 text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-700 mb-2">
              {timeData.hours}
            </div>
            <div className="text-lg text-pink-600 font-medium">
              {timeData.hours === 1 ? 'час' : 
               timeData.hours < 5 ? 'часа' : 'часов'}
            </div>
            <div className="text-2xl mt-2">🕐</div>
          </div>

          {/* Минуты */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200 text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-700 mb-2">
              {timeData.minutes}
            </div>
            <div className="text-lg text-pink-600 font-medium">
              {timeData.minutes === 1 ? 'минута' : 
               timeData.minutes < 5 ? 'минуты' : 'минут'}
            </div>
            <div className="text-2xl mt-2">⏰</div>
          </div>

          {/* Секунды */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200 text-center">
            <div className="text-4xl md:text-5xl font-bold text-pink-700 mb-2">
              {timeData.seconds}
            </div>
            <div className="text-lg text-pink-600 font-medium">
              {timeData.seconds === 1 ? 'секунда' : 
               timeData.seconds < 5 ? 'секунды' : 'секунд'}
            </div>
            <div className="text-2xl mt-2">💫</div>
          </div>
        </div>

        {/* Романтичные сообщения */}
        <div className="bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl p-8 shadow-lg border-2 border-pink-300 mb-8">
          <h2 className="text-2xl font-bold text-pink-800 mb-4 text-center">
            💕 каждый день с тобой особенный 💕
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-center">
            <div className="bg-white/60 rounded-2xl p-4">
              <div className="text-3xl mb-2">🌟</div>
              <p className="text-pink-700 font-medium">
                счастливых моментов вместе: бесконечно!
              </p>
            </div>
            <div className="bg-white/60 rounded-2xl p-4">
              <div className="text-3xl mb-2">💖</div>
              <p className="text-pink-700 font-medium">
                сколько раз сказала "люблю": не сосчитать!
              </p>
            </div>
          </div>
        </div>

        {/* Милая надпись */}
        <div className="text-center mb-8">
          <p className="text-xl text-pink-700 font-medium italic">
            "и это только начало нашей прекрасной истории..." 💕
          </p>
        </div>
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
          onClick={() => navigate('/gift')}
          variant="outline"
          size="sm"
          className="bg-white/80 hover:bg-white/90 border-pink-300 text-pink-700 hover:text-pink-800 backdrop-blur-sm text-xs px-3 py-1"
        >
          <Icon name="Gift" size={12} className="mr-1" />
          Подарок
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
      </div>

      {/* Дополнительные стили для анимации */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Counter;