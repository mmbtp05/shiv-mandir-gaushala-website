"use client"

import { scrollToSection } from '@/app/(utils)/scroll';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://saveindiancows.org/wp-content/uploads/2022/02/IMG_4152-1024x683-1.jpg',
    heading: 'Purity by Cow\'s Sight',
    subheading: 'Experience the divine presence and blessings of our cows at Shree Gaushala.',
    cta: 'Donate Now',
  },
  {
    image: 'https://www.worldsankirtan.org/images/14.jpg',
    heading: 'Nourish with Gauseva',
    subheading: 'Support the care, feeding, and well-being of our beloved cows.',
    cta: 'Support Gauseva',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbr11sKI9TRid8o2zxLg_PmEpsnHlki-q04w&s',
    heading: 'Pure Products, Pure Heart',
    subheading: 'Discover our range of natural, cow-based products for your family.',
    cta: 'View Products',
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  const goToSlide = (idx: number) => setCurrent(idx);

  return (
    <div className="relative h-[calc(100vh-200px)] mt-[100px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/60 to-orange-700/60" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 drop-shadow-lg">
              {slide.heading}
            </h1>
            <p className="text-lg md:text-2xl text-center max-w-2xl mb-8 drop-shadow">
              {slide.subheading}
            </p>
            <button
              onClick={() => scrollToSection(idx === 2 ? 'products' : 'donate')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition-colors duration-200 text-lg font-semibold shadow-lg"
            >
              {slide.cta}
            </button>
          </div>
        </div>
      ))}
      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${current === idx ? 'bg-orange-600 border-orange-600 scale-110' : 'bg-white/40'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;