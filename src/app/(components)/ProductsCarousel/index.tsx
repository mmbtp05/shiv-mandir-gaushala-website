"use client";

import { useEffect, useState } from 'react';

const products = [
  {
    title: '100% Pure Desi Cow Ghee – Shiv Mandir Gaushala',
    image: 'https://shop.omshivmandirgaushala.org/cdn/shop/files/DSC06998.jpg?v=1753278646&width=823',
    price: 'From Rs. 400.00',
    link: 'https://shop.omshivmandirgaushala.org/products/100-pure-desi-gir-cow-ghee-shiv-mandir-gaushala',
  },
  {
    title: 'Gaunyle – Natural Cow Dung Floor Cleaner (Shiv Mandir Gaushala)',
    image: 'https://shop.omshivmandirgaushala.org/cdn/shop/files/DSC07042.jpg?v=1753280860&width=823',
    price: 'From Rs. 90.00',
    link: 'https://shop.omshivmandirgaushala.org/products/gaunyle-natural-cow-dung-floor-cleaner-shiv-mandir-gaushala',
  },
  {
    title: 'Natural Cow Dung Dhoop Batti – Rose, Sandal, Mogra, Jasmine (Shiv Mandir Gaushala)',
    image: 'https://shop.omshivmandirgaushala.org/cdn/shop/files/DSC07030.jpg?v=1753280187&width=823',
    price: 'From Rs. 60.00',
    link: 'https://shop.omshivmandirgaushala.org/products/natural-cow-dung-dhoop-batti-shiv-mandir-gaushala',
  },
  {
    title: 'Pure Cow Dung Upli / Kanda – Shiv Mandir Gaushala',
    image: 'https://shop.omshivmandirgaushala.org/cdn/shop/files/DSC07036.jpg?v=1753280594&width=823',
    price: 'From Rs. 20.00',
    link: 'https://shop.omshivmandirgaushala.org/products/pure-cow-dung-upli-kanda-shiv-mandir-gaushala',
  },
];

const getVisibleCount = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
  }
  return 1;
};

const ProductsCarousel = () => {
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setVisibleCount(getVisibleCount());
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  const maxStart = Math.max(0, products.length - visibleCount);

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
    <section className="w-full bg-white py-16" id="products">
      <div className="w-4/5 lg:w-3/5 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-700">Our Products</h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={goLeft}
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-full p-2 shadow transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Scroll left"
            style={{ minWidth: 40, minHeight: 40 }}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${start * (100 / visibleCount)}%)` }}
            >
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <a
                    // href={product.link}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 h-full border border-gray-200 hover:shadow-xl transition-shadow duration-200">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="rounded-xl shadow w-full object-cover max-h-64 mb-4"
                      />
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                        {/* <div className="text-orange-700 font-bold text-base mb-1">{product.price}</div> */}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={goRight}
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-full p-2 shadow transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Scroll right"
            style={{ minWidth: 40, minHeight: 40 }}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          For purchase please contact us at <a href="tel:+919849379735" className="text-orange-600 hover:text-orange-700">+91 98493 79735</a> or <a href="tel:+919100353375" className="text-orange-600 hover:text-orange-700">+91 91003 53375</a>
        </p>
      </div>
    </section>
  );
};

export default ProductsCarousel;