import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, type: string, delay: number}>>([]);
  const navigate = useNavigate();

  const photos = [
    {
      url: 'https://cdn.poehali.dev/files/8c33e84d-e93e-4609-af03-264bee36ff9d.jpg',
      alt: 'Наше селфи дома'
    },
    {
      url: 'https://cdn.poehali.dev/files/0eaffc85-be2c-4ea0-b536-0b5fad12a8c1.jpg',
      alt: 'Зимняя прогулка'
    },
    {
      url: 'https://cdn.poehali.dev/files/fb96c774-acde-4d90-abce-0ab5d85aa873.jpg',
      alt: 'Веселое фото с масками'
    },
    {
      url: 'https://cdn.poehali.dev/files/5c22be7f-9f69-4863-a271-bc3b45e99831.jpg',
      alt: 'Блестящие маски'
    },
    {
      url: 'https://cdn.poehali.dev/files/9d098356-5582-42f4-8527-28700986eeb6.jpg',
      alt: 'Совместное фото'
    }
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index: number) => {
    setCurrentIndex(index);
  };

  // Generate floating sparkles and hearts
  useEffect(() => {
    const sparkleTypes = ['✦', '✧', '♡', '💕'];
    const newSparkles = [];
    
    for (let i = 0; i < 30; i++) {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 font-['Playfair_Display'] relative overflow-hidden">
      {/* Floating sparkles and hearts background */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-pink-300 pointer-events-none animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            fontSize: sparkle.type === '♡' || sparkle.type === '💕' ? '1.5rem' : '1rem'
          }}
        >
          {sparkle.type}
        </div>
      ))}

      {/* Main gallery container */}
      <div className="text-center relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#FF69B4] mb-8">
          наши воспоминания 💕
        </h1>
        
        {/* Photo gallery */}
        <div className="relative mb-8">
          {/* Main photo */}
          <div className="relative mx-auto w-fit">
            <img 
              src={photos[currentIndex].url}
              alt={photos[currentIndex].alt}
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-[#FFB6C1] transition-all duration-500 hover:scale-105"
            />
            
            {/* Navigation buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Icon name="ChevronLeft" size={24} className="text-[#FF69B4]" />
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Icon name="ChevronRight" size={24} className="text-[#FF69B4]" />
            </button>
          </div>

          {/* Photo counter */}
          <div className="mt-4 text-lg text-[#FFB6C1]">
            {currentIndex + 1} из {photos.length}
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => goToPhoto(index)}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                index === currentIndex 
                  ? 'border-[#FF69B4] shadow-lg' 
                  : 'border-[#FFB6C1] opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => navigate('/photo')}
            className="bg-[#FFB6C1] hover:bg-[#FF69B4] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            к фото 💗
          </button>
          <button
            onClick={() => navigate('/calendar')}
            className="bg-[#DDA0DD] hover:bg-[#DA70D6] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            наш календарь 📅
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;