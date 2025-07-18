"use client"

import { useEffect, useState } from 'react';
import React from 'react';

const donationOptions = [
  {
    title: 'Adopt a Cow',
    description: 'Provide lifelong care and love to a cow in need. Your support covers food, shelter, and medical care.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    cta: 'Adopt Now',
  },
  {
    title: 'Feed a Cow',
    description: 'Sponsor daily nutritious meals for our cows. Help us keep them healthy and happy.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    cta: 'Feed Now',
  },
  {
    title: 'Medical Care',
    description: 'Support the medical needs of our cows, including vaccinations, treatments, and emergency care.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b',
    cta: 'Support Care',
  },
  {
    title: 'Shelter & Comfort',
    description: 'Contribute to building and maintaining safe, comfortable shelters for our cows.',
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd',
    cta: 'Donate Shelter',
  },
  {
    title: 'General Donation',
    description: 'Make a general donation to support all aspects of our gaushala and Gauseva mission.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    cta: 'Donate',
  },
];

const getVisibleCount = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
  }
  return 1;
};

const DonateCarousel = () => {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // Always start with 1 for SSR
  const [isClient, setIsClient] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setIsClient(true);
    setVisibleCount(getVisibleCount());
  }, []);

  // Responsive visible count
  useEffect(() => {
    if (!isClient) return;
    
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  const maxStart = Math.max(0, donationOptions.length - visibleCount);

  // Infinite carousel logic
  const goLeft = () => {
    if (start === 0) {
      setStart(maxStart);
    } else {
      setStart((prev) => prev - 1);
    }
  };
  
  const goRight = () => {
    if (start === maxStart) {
      setStart(0);
    } else {
      setStart((prev) => prev + 1);
    }
  };

  return (
    <section className="w-full bg-white py-20" id="donate">
      <div className="w-4/5 lg:w-3/5 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-700">Donate to Serve Gomata</h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* Left Arrow */}
          <button
            onClick={goLeft}
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-full p-2 shadow transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Scroll left"
            style={{ minWidth: 40, minHeight: 40 }}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          {/* Carousel */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${start * (100 / visibleCount)}%)` }}
            >
              {donationOptions.map((option, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="flex flex-col items-center bg-orange-50 rounded-2xl shadow-lg p-8 h-full">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="rounded-xl shadow w-full object-cover max-h-48 border-4 border-orange-200 mb-4"
                    />
                    <h3 className="text-xl md:text-2xl font-bold text-orange-700 mb-2 text-center">{option.title}</h3>
                    <p className="text-gray-700 mb-6 text-center">{option.description}</p>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors duration-200">
                      {option.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={goRight}
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-full p-2 shadow transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Scroll right"
            style={{ minWidth: 40, minHeight: 40 }}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonateCarousel;