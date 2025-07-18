"use client"

import React from 'react';
import { scrollToSection } from '@/app/(utils)/scroll';

const Footer = () => {

  const handleNavClick = (e: any, id: any) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="w-4/5 lg:w-3/5 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500 mb-4 flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="18" fill="#ea580c" />
                <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial" dy=".3em">🐄</text>
              </svg>
              Shree <span className="text-white">Gaushala</span>
            </h3>
            <p className="text-sm">
              Dedicated to the care, protection, and service of cows. Join us in our journey of compassion, tradition, and sustainability.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-orange-400 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { title: 'Home', id: 'home' },
                { title: 'Products', id: 'products' },
                { title: 'Donate', id: 'donate' },
                { title: 'Gallery', id: 'gallery' },
                { title: 'Contact Us', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)} className="hover:text-orange-400 transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-orange-400 font-semibold">Address:</span> 5-8-354, room no:- 805, 8th floor, Raghava Ratna Towers, Chirag Ali Ln, Abids, Hyderabad, Telangana, 500001</li>
              <li><span className="text-orange-400 font-semibold">Phone:</span> +91 93931 19009, +91 40232 09009</li>
              <li><span className="text-orange-400 font-semibold">Email:</span> partanitoursandtravels@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="w-4/5 lg:w-3/5 mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {new Date().getFullYear()} Shree Gaushala. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;