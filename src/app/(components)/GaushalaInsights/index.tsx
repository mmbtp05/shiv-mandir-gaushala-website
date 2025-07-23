"use client"

import React from 'react';

const stats = [
  {
    label: 'Cows Sheltered',
    value: '2200+',
    icon: (
      <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
  },
  {
    label: 'Volunteers',
    value: '100+',
    icon: (
      <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" /></svg>
    ),
  },
  {
    label: 'Products',
    value: '10+',
    icon: (
      <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21V7a2 2 0 00-2-2H6a2 2 0 00-2 2v14" /><path d="M16 3v4M8 3v4" /></svg>
    ),
  },
  {
    label: 'Acres of Land',
    value: '7+',
    icon: (
      <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
  },
];

const GaushalaInsights = () => (
  <section className="w-full bg-orange-50 py-16" id="insights">
    <div className="w-4/5 lg:w-3/5 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-700">Gaushala Insights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 border-t-4 border-orange-600 hover:scale-105 transition-transform duration-300">
            <div className="mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold text-orange-700 mb-2">{stat.value}</div>
            <div className="text-gray-700 text-lg font-medium text-center">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GaushalaInsights;