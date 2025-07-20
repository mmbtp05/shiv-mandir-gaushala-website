"use client";

import Image from 'next/image';
import image1 from '../../../../public/assets/1.jpeg';
import image2 from '../../../../public/assets/2.jpeg';
import image3 from '../../../../public/assets/3.jpeg';
import image4 from '../../../../public/assets/4.jpeg';
import image5 from '../../../../public/assets/5.jpeg';
import image6 from '../../../../public/assets/6.jpeg';

// Static images array using imported images
const images = [
  { src: image1, alt: 'Gaushala Enterence' },
  { src: image2, alt: 'Gaushala Glimpse' },
  { src: image3, alt: 'Gaushala Shed' },
  { src: image4, alt: 'Cow Care Takers' },
  { src: image5, alt: 'Gaushala Cows' }, 
  { src: image6, alt: 'Gaushala Cows' },
  // Add more static images if available
  // { src: image1, alt: 'Cow Feeding Time' },
  // { src: image2, alt: 'Gaushala Maintenance' },
  // { src: image3, alt: 'Sacred Cow Sanctuary' },
  // { src: image4, alt: 'Daily Cow Care' },
  // { src: image5, alt: 'Gaushala Community' },
  // { src: image1, alt: 'Cow Health Care' },
  // { src: image2, alt: 'Gaushala Volunteers' },
];

const Gallery = () => (
  <section className="w-full bg-white py-20" id="gallery">
    <div className="w-4/5 lg:w-3/5 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-orange-700">
        Our <span className="text-orange-600">Gallery</span>
      </h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Take a look at our gaushala activities, cow care services, and the beautiful sanctuary we maintain for these sacred animals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, idx) => (
          <div key={idx} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-orange-200 hover:scale-105 transition-all duration-300">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              width={300}
              height={300}
              priority={idx < 4} // Load first 4 images with priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-sm">{image.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;