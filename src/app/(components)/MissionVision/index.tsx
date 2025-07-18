"use client";

const MissionVision = () => (
  <section className="w-full bg-white py-20" id="mission-vision">
    <div className="w-4/5 lg:w-3/5 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-700">Mission & Vision</h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <p className="text-gray-700 text-lg mb-4">
            <span className="font-semibold text-orange-700">Our Mission:</span> To rescue, protect, and nurture cows, spreading awareness about their importance in our culture and environment. We provide a safe, loving home for every cow and promote the values of Gauseva in society.
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold text-orange-700">Our Vision:</span> A world where every cow is respected, cared for, and cherished. We envision a future where Gauseva is a way of life, and our gaushala stands as a beacon of compassion, sustainability, and tradition.
          </p>
        </div>
        {/* Image */}
        <div className="flex-1 mb-8 md:mb-0 order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b"
            alt="Cow Mission"
            className="rounded-2xl shadow-lg w-full object-cover max-h-96 border-4 border-orange-200"
          />
        </div>
      </div>
    </div>
  </section>
);

export default MissionVision; 