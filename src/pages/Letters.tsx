import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

const Letters = () => {
  const navigate = useNavigate();
  const [openLetter, setOpenLetter] = useState<number | null>(null);

  const letters = [
    { id: 1, message: "мы можем говорить обо всем и ни о чём" },
    { id: 2, message: "с тобой никогда не скучно" },
    { id: 3, message: "ты веришь в меня и поддерживаешь, успокаиваешь" },
    { id: 4, message: "ты моё счастье, моя радость" },
    { id: 5, message: "твои объятия и поцелуи самые лучшие" },
    { id: 6, message: "люблю твою радость и улыбку, люблю всю тебя" },
    { id: 7, message: "тепло с тобой, ты мой дом" },
    { id: 8, message: "я люблю все что ты делаешь" },
    { id: 9, message: "с тобой всё лучше, без тебя мне плохо(" },
    { id: 10, message: "мне не нужны причины тебя любить ♡" },
  ];

  const handleLetterClick = (letterId: number) => {
    setOpenLetter(letterId === openLetter ? null : letterId);
    
    if (letterId !== openLetter) {
      const letter = letters.find(l => l.id === letterId);
      if (letter) {
        toast.success(letter.message, {
          duration: 6000,
          style: {
            background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f9a8d4 100%)',
            color: '#831843',
            fontSize: '16px',
            fontWeight: '600',
            border: '2px solid #ec4899',
            borderRadius: '20px',
            padding: '20px 24px',
            boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3), 0 0 30px rgba(255, 255, 255, 0.1)',
            position: 'relative',
          },
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 p-6">
      {/* Заголовок */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
          10 причин почему я люблю Соню 💌
        </h1>
        <p className="text-xl text-pink-600">
          нажми на конвертики чтобы прочитать письма
        </p>
      </div>

      {/* Сетка конвертиков */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-8">
        {letters.map((letter) => (
          <div
            key={letter.id}
            className={`relative cursor-pointer transition-all duration-300 hover:scale-110 ${
              letter.id === 10 ? 'transform rotate-3' : ''
            }`}
            onClick={() => handleLetterClick(letter.id)}
          >
            {/* Конвертик */}
            <div
              className={`w-20 h-16 mx-auto mb-2 relative ${
                letter.id === 10 
                  ? 'bg-gradient-to-r from-pink-400 to-red-400 shadow-lg shadow-pink-300' 
                  : 'bg-gradient-to-r from-pink-200 to-rose-200'
              } rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
            >
              {/* Треугольник сверху конверта */}
              <div
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 ${
                  letter.id === 10
                    ? 'border-l-[40px] border-r-[40px] border-t-[20px] border-l-transparent border-r-transparent border-t-pink-500'
                    : 'border-l-[40px] border-r-[40px] border-t-[20px] border-l-transparent border-r-transparent border-t-pink-300'
                }`}
              />
              
              {/* Номер письма */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className={`text-lg font-bold ${
                    letter.id === 10 ? 'text-white text-xl' : 'text-pink-700'
                  }`}
                >
                  {letter.id}
                </span>
              </div>

              {/* Сердечко для 10 конверта */}
              {letter.id === 10 && (
                <div className="absolute -top-2 -right-2 text-red-500 text-lg animate-pulse">
                  ♡
                </div>
              )}

              {/* Анимация открытия */}
              {openLetter === letter.id && (
                <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse" />
              )}
            </div>

            {/* Подпись */}
            <p 
              className={`text-center text-sm ${
                letter.id === 10 ? 'text-pink-700 font-bold' : 'text-pink-600'
              }`}
            >
              {letter.id === 10 ? '💖 особенное 💖' : `письмо ${letter.id}`}
            </p>
          </div>
        ))}
      </div>

      {/* Плавающие сердечки */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <span className="text-pink-300 opacity-60">
              {Math.random() > 0.5 ? '💕' : '💖'}
            </span>
          </div>
        ))}
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
          onClick={() => navigate('/stars')}
          variant="outline"
          size="sm"
          className="bg-white/80 hover:bg-white/90 border-pink-300 text-pink-700 hover:text-pink-800 backdrop-blur-sm text-xs px-3 py-1"
        >
          <Icon name="Star" size={12} className="mr-1" />
          Звезды
        </Button>
        <Button
          onClick={() => navigate('/calendar')}
          variant="outline"
          size="sm"
          className="bg-white/80 hover:bg-white/90 border-pink-300 text-pink-700 hover:text-pink-800 backdrop-blur-sm text-xs px-3 py-1"
        >
          <Icon name="Calendar" size={12} className="mr-1" />
          Календарь
        </Button>
      </div>

      {/* Дополнительные стили */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Letters;