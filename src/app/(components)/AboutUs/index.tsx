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
          <span className="font-semibold text-orange-700">शिव मंदिर गौशाला</span> एक सेवा-भावना से प्रेरित संस्था है, जिसका उद्देश्य गायों की सुरक्षा, पालन-पोषण और संरक्षण करना है। हमारी गौशाला में बेसहारा, बीमार और वृद्ध गायों को स्नेहपूर्वक आश्रय, पौष्टिक आहार और चिकित्सकीय देखभाल प्रदान की जाती है। हम न केवल गौसेवा को धर्म और संस्कृति का हिस्सा मानते हैं, बल्कि इसे पर्यावरण और समाज के हित में भी एक महत्वपूर्ण कदम मानते हैं।
        </p>
        <p className="text-gray-600 mb-4">
        शिव मंदिर गौशाला में गौमाता की सेवा के साथ-साथ प्राकृतिक संसाधनों का उपयोग कर गौ-उत्पाद जैसे गोबर, गौमूत्र, और जैविक खाद का निर्माण भी किया जाता है, जिससे स्वच्छता, जैविक खेती और आयुर्वेद को बढ़ावा मिलता है। हम समाज के हर वर्ग को गौसेवा से जुड़ने और इस पुण्य कार्य में सहभागी बनने के लिए आमंत्रित करते हैं।
        <br />
        <br />
        <span className="font-semibold text-orange-700">गौ सेवा ही श्रेष्ठ सेवा है, आइए इस पुण्य कार्य में हमारा साथ दें।</span>
        </p>
        <div className="mt-6">
          <a href="#donate" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors duration-200">Support Our Mission</a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs; 