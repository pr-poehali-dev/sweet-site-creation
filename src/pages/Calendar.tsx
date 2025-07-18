import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

const Calendar = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  const handleDateClick = (date: number) => {
    if (date === 3) {
      setShowMessage(true);
      toast.success("спасибо тебе что ты у меня есть, я тебя очень сильно люблю!", {
        duration: 5000,
        style: {
          background: 'linear-gradient(135deg, #ffeef8 0%, #ffb3d9 100%)',
          color: '#d946ef',
          fontSize: '16px',
          fontWeight: '600',
          border: 'none',
          borderRadius: '20px',
          padding: '16px 24px',
          boxShadow: '0 10px 30px rgba(217, 70, 239, 0.3)',
        },
      });
    }
  };

  // Календарь ноября 2024
  const daysInMonth = 30;
  const firstDayOfWeek = 5; // Пятница (0 = воскресенье)
  const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const calendarDays = [];
  
  // Добавляем пустые ячейки для начала месяца
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Добавляем дни месяца
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Блестяшки */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              color: ['#ffd700', '#ff69b4', '#da70d6', '#ff1493'][Math.floor(Math.random() * 4)]
            }}
          >
            {['✦', '✧', '✨', '⭐'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
        
        {/* Сердечки */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random() * 1.5}s`,
              color: ['#ff69b4', '#ff1493', '#da70d6', '#ff6b9d'][Math.floor(Math.random() * 4)]
            }}
          >
            {['♡', '♥', '💕', '💖'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      {/* Основной контент */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Наш особенный календарь
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ноябрь 2024 - месяц, когда произошло что-то волшебное 💕
          </p>
        </div>

        {/* Милые котята */}
        <div className="flex justify-center gap-4 mb-8">
          <img 
            src="https://cdn.poehali.dev/files/e2cac8f4-0c2a-46fb-878d-91642ee4d3d3.jpg" 
            alt="Милый котенок"
            className="w-20 h-20 rounded-full object-cover border-4 border-pink-300 shadow-lg animate-bounce"
            style={{ animationDelay: '0s' }}
          />
          <img 
            src="https://cdn.poehali.dev/files/881b48f4-9922-4701-a080-645cf9cfc4a8.jpg" 
            alt="Радостный котенок"
            className="w-20 h-20 rounded-full object-cover border-4 border-purple-300 shadow-lg animate-bounce"
            style={{ animationDelay: '0.5s' }}
          />
        </div>

        {/* Календарь */}
        <Card className="max-w-md mx-auto p-6 bg-white/90 backdrop-blur-sm shadow-xl border-2 border-pink-200">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-pink-600 mb-2">Ноябрь 2024</h2>
            <div className="grid grid-cols-7 gap-1 text-sm text-gray-500 font-medium">
              {daysOfWeek.map((day) => (
                <div key={day} className="p-2 text-center">
                  {day}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`
                  relative p-2 text-center cursor-pointer rounded-lg transition-all duration-300
                  ${day === null ? 'invisible' : ''}
                  ${day === 3 ? 'bg-pink-100 hover:bg-pink-200' : 'hover:bg-gray-100'}
                  ${day === 3 ? 'text-pink-600 font-bold' : 'text-gray-700'}
                `}
                onClick={() => day && handleDateClick(day)}
              >
                {day === 3 ? (
                  <div className="relative">
                    <img 
                      src="https://cdn.poehali.dev/files/6b5d30bc-3cf5-4042-97ff-f5e934e511f6.jpg" 
                      alt="Сердечко"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30"
                    />
                    <div className="relative z-10 font-bold text-pink-600">
                      {day}
                    </div>
                    <div className="absolute -top-1 -right-1 text-pink-500 text-xs animate-pulse">
                      💕
                    </div>
                  </div>
                ) : (
                  day
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Нажмите на особенную дату ✨
            </p>
            <div className="flex items-center justify-center gap-2 text-pink-600">
              <Icon name="Heart" size={16} />
              <span className="text-sm font-medium">3 ноября - наша дата</span>
              <Icon name="Heart" size={16} />
            </div>
          </div>
        </Card>

        {/* Навигация */}
        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="bg-white/80 hover:bg-white/90 border-pink-300 text-pink-600 hover:text-pink-700"
          >
            <Icon name="Home" size={16} className="mr-2" />
            На главную
          </Button>
          <Button
            onClick={() => navigate('/photo')}
            variant="outline"
            className="bg-white/80 hover:bg-white/90 border-purple-300 text-purple-600 hover:text-purple-700"
          >
            <Icon name="Camera" size={16} className="mr-2" />
            К фото
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;