"use client"

import HeroCarousel from './(components)/HeroCarousel';
import GaushalaInsights from './(components)/GaushalaInsights';
import DonateCarousel from './(components)/DonateCarousel';
import Gallery from './(components)/Gallery';
import ContactForm from './(components)/ContactForm';
import React from 'react'; 
import AboutUs from './(components)/AboutUs';
import MissionVision from './(components)/MissionVision';
import ProductsCarousel from './(components)/ProductsCarousel';
import { useVideoModal } from './(components)/VideoModalContext';

function VideoModal() {
  const { showVideoModal, setShowVideoModal } = useVideoModal();
  if (!showVideoModal) return null;
  const closeVideoModal = () => setShowVideoModal(false);
  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={closeVideoModal}
          className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors duration-200 z-10"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/QpApIi3SRRk?autoplay=1&mute=1&rel=0&showinfo=0&controls=1&loop=1&playlist=QpApIi3SRRk"
            title="Shiv Mandir Gaushala"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; mute;"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={closeVideoModal}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Skip Video & Visit Website
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <VideoModal />
      <section id="home">
        <HeroCarousel />
      </section>
      <AboutUs />
      <GaushalaInsights />
      <MissionVision />
      <DonateCarousel />
      <ProductsCarousel />
      <Gallery />
      <ContactForm />
    </main>
  );
}
