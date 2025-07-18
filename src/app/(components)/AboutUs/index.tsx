"use client";

const AboutUs = () => (
  <section className="w-full bg-white py-20" id="about">
    <div className="w-4/5 lg:w-3/5 mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="flex-1 mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Cow at Gaushala"
          className="rounded-2xl shadow-lg w-full object-cover max-h-96 border-4 border-orange-200"
        />
      </div>
      {/* Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-600">About Us</h2>
        <p className="text-gray-700 text-lg mb-4">
          <span className="font-semibold text-orange-700">Shree Gaushala</span> is dedicated to the care, protection, and service of cows. Nestled in a serene environment, our gaushala is a sanctuary for cows, where they are nurtured with love and respect. We believe in the sacredness of Gauseva and strive to spread awareness about the importance of cows in our culture and ecosystem.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to provide a safe haven for cows, promote traditional values, and offer pure, natural cow-based products to the community. Join us in our journey of compassion, service, and sustainability.
        </p>
        <div className="mt-6">
          <a href="#donate" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors duration-200">Support Our Mission</a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs; 