"use client";

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b',
  'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
];

const Gallery = () => (
  <section className="w-full bg-white py-20" id="gallery">
    <div className="w-4/5 lg:w-3/5 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-700">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-orange-200 hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <img
              src={src}
              alt={`Gaushala Gallery ${idx + 1}`}
              className="w-full h-64 object-cover md:h-72"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;