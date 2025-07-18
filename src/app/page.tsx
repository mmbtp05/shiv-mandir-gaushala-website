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

export default function Home() {
  return (
    <main>
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
