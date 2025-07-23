"use client";

import image3 from '../../../../public/assets/3.jpeg';

const MissionVision = () => (
  <section className="w-full bg-white py-20" id="mission-vision">
    <div className="w-4/5 lg:w-3/5 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange-700">Mission & Vision</h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <p className="text-gray-700 text-lg mb-4">
            <span className="font-semibold text-orange-700">हमारा मिशन (Our Mission):</span> शिव मंदिर गौशाला का मिशन है बेसहारा, बीमार और वृद्ध गायों को सुरक्षा, पोषण और सम्मानजनक जीवन प्रदान करना। हम गौसेवा के माध्यम से धार्मिक, सामाजिक और पारिस्थितिक संतुलन को बनाए रखते हुए समाज में करुणा, समर्पण और सेवा भाव को प्रोत्साहित करना चाहते हैं।
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold text-orange-700">हमारा विज़न (Our Vision):</span> हमारा लक्ष्य एक ऐसी आदर्श गौशाला स्थापित करना है जहाँ प्रत्येक गाय को संरक्षण, स्नेह और गरिमा के साथ जीवन जीने का अवसर मिले। हम गौ आधारित प्राकृतिक संसाधनों, जैविक खेती और आयुर्वेदिक उपयोगों को बढ़ावा देते हुए भारत में गौसंवर्धन का एक सशक्त और प्रेरणादायक मॉडल बनाना चाहते हैं।
          </p>
        </div>
        {/* Image */}
        <div className="flex-1 mb-8 md:mb-0 order-1 md:order-2">
          <img
            src={image3.src}
            alt="Mission and Vision Shiv Mandir Gaushala"
            className="rounded-2xl shadow-lg w-full object-cover max-h-96 border-4 border-orange-200"
          />
        </div>
      </div>
    </div>
  </section>
);

export default MissionVision; 