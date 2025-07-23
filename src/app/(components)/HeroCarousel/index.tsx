"use client"

import { scrollToSection } from '@/app/(utils)/scroll';
import { useState, useEffect } from 'react';
import image1 from '../../../../public/assets/1.jpeg';
import image2 from '../../../../public/assets/2.jpeg';
import image3 from '../../../../public/assets/3.jpeg';
import image4 from '../../../../public/assets/4.jpeg';
import image5 from '../../../../public/assets/5.jpeg';
import image6 from '../../../../public/assets/6.jpeg';
import image7 from '../../../../public/assets/7.jpeg';

const slides = [
  {
    image: image1.src,
    heading: 'Welcome to Shiv Mandir Gaushala',
    subheading: 'A sanctuary for the care and protection of cows.',
    cta: 'Donate Now',
  },
  {
    image: image4.src,
    heading: 'Cow Care Takers',
    subheading: 'Meet our dedicated team caring for our cows every day.',
    cta: 'Support Gauseva',
  },
  {
    image: image6.src,
    heading: 'Gaushala Cows',
    subheading: 'Experience the peace and divinity of our sacred cows.',
    cta: 'View Gallery',
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