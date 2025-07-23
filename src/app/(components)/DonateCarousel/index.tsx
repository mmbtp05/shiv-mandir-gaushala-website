"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import img1 from '../../../../public/assets/1.jpeg';
import img2 from '../../../../public/assets/2.jpeg';
import img3 from '../../../../public/assets/3.jpeg';
import img4 from '../../../../public/assets/4.jpeg';
import img5 from '../../../../public/assets/5.jpeg';
import img6 from '../../../../public/assets/6.jpeg';
import img7 from '../../../../public/assets/7.jpeg';
import qrCode from '../../../../public/assets/donationQr.jpeg';

const donationOptions = [
  {
    title: 'आजीवन सदस्यता',
    description: 'गौशाला के आजीवन सदस्य बनें और गौसेवा के इस पुण्य कार्य में स्थायी योगदान दें।',
    amount: '₹1,11,111',
    image: img1,
  },
  {
    title: 'एक दिन का चारा',
    description: 'पूरे गौशाला के लिए एक दिन का चारा उपलब्ध कराएं और सभी गायों को तृप्त करें।',
    amount: '₹21,000',
    image: img2,
  },
  {
    title: 'एक दिन की कुट्टी',
    description: 'गौमाताओं के लिए पौष्टिक खिचड़ी सेवा का आयोजन करें।',
    amount: '₹14,000',
    image: img3,
  },
  {
    title: 'एक दिवसीय हरी घास',
    description: 'गौमाताओं के लिए ताजा हरी घास की सेवा करें।',
    amount: '₹11,000',
    image: img4,
  },
  {
    title: 'एक दिवसीय चुन्नी भैँसाँ',
    description: 'गौमाताओं के लिए चुनी भूसी की सेवा करें।',
    amount: '₹3,100',
    image: img5,
  },
  {
    title: 'एक दिवसीय गुड़',
    description: 'गौमाताओं के लिए गुड़ की सेवा करें।',
    amount: '₹2,100',
    image: img6,
  },
  {
    title: 'एक दिन की लाप्सी सेवा',
    description: 'गौमाताओं के लिए ताजगी भरी लस्सी की सेवा करें।',
    amount: '₹7,100',
    image: img7,
  },
  {
    title: 'प्रति दिन की चिकित्सा सेवा',
    description: 'गौमाताओं के लिए चिकित्सा सेवा का सहयोग करें।',
    amount: '₹2,100',
    image: img1,
  },
  {
    title: 'एक गाय बछडे का प्रतिमाह चारा खर्च',
    description: 'एक गाय या बछड़े के लिए प्रतिमाह चारे का खर्च उठाएं।',
    amount: '₹1,100',
    image: img2,
  },
  {
    title: 'एक कट्टा हरी घांस एक महिने तक',
    description: 'एक महीने तक हरी घास का सहयोग करें।',
    amount: '₹500',
    image: img3,
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
                    <Image
                      src={option.image}
                      alt={option.title}
                      className="rounded-xl shadow w-full object-cover max-h-48 border-4 border-orange-200 mb-4"
                      width={300}
                      height={180}
                    />
                    <h3 className="text-xl md:text-2xl font-bold text-orange-700 mb-2 text-center">{option.title}</h3>
                    <div className="text-orange-600 font-bold text-lg mb-2">{option.amount}</div>
                    <p className="text-gray-700 mb-6 text-center">{option.description}</p>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors duration-200">
                      Donate
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
        {/* Tax/CSR/FCRA Info and Bank Details */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1 bg-orange-50 border-l-4 border-orange-600 rounded-xl p-6 shadow mb-4 md:mb-0">
            <div className="text-xl md:text-2xl font-bold text-orange-700 mb-2">Do Gau Seva &amp; Save 50% Tax</div>
            <div className="text-gray-700 font-medium mb-1">under 80G of Income Tax Act</div>
            <div className="text-lg font-bold text-orange-700 mt-4">We accept Donations under CSR</div>
            <div className="text-gray-700 text-sm">Donations to OM Shiv Mandir Gowshala are exempted under Section 80G of Income Tax Act.</div>
          </div>
          <div className="flex-1 flex flex-col items-center bg-white rounded-lg p-6 shadow-lg border-2 border-orange-200">
            <Image 
              src={qrCode} 
              alt="Donation QR Code" 
              className="w-40 h-40 object-contain rounded-lg mb-2"
              width={160}
              height={160}
            />
            <div className="text-gray-800 text-sm text-center mb-2">
              <div className="font-bold text-orange-700">Bank Details</div>
              <div>Account Name: <span className="font-semibold">OM SHIV MANDIR GOWSHALA (TRUST)</span></div>
              <div>Bank: <span className="font-semibold">MAHAVEER CO-OPERATIVE URBAN BANK LTD.</span></div>
              <div>Branch: <span className="font-semibold">Shamshergunj</span></div>
              <div>Account No.: <span className="font-semibold">003103000000072</span></div>
              <div>IFSC: <span className="font-semibold">HDFCCMCUBL</span></div>
            </div>
            <p className="text-gray-600 text-xs text-center">Scan the QR or use the above details to donate and support our gaushala.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCarousel;