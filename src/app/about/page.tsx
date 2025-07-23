"use client";

import Image from 'next/image';
import image1 from '../../../public/assets/1.jpeg';
import DonateCarousel from '../(components)/DonateCarousel';

const aboutText = `
शिव मंदिर गौशाला एक सेवा-भावना से प्रेरित संस्था है, जिसका उद्देश्य गायों की सुरक्षा, पालन-पोषण और संरक्षण करना है। हमारी गौशाला में बेसहारा, बीमार और वृद्ध गायों को स्नेहपूर्वक आश्रय, पौष्टिक आहार और चिकित्सकीय देखभाल प्रदान की जाती है। हम न केवल गौसेवा को धर्म और संस्कृति का हिस्सा मानते हैं, बल्कि इसे पर्यावरण और समाज के हित में भी एक महत्वपूर्ण कदम मानते हैं।

शिव मंदिर गौशाला में गौमाता की सेवा के साथ-साथ प्राकृतिक संसाधनों का उपयोग कर गौ-उत्पाद जैसे गोबर, गौमूत्र, और जैविक खाद का निर्माण भी किया जाता है, जिससे स्वच्छता, जैविक खेती और आयुर्वेद को बढ़ावा मिलता है। हम समाज के हर वर्ग को गौसेवा से जुड़ने और इस पुण्य कार्य में सहभागी बनने के लिए आमंत्रित करते हैं।

गौ सेवा ही श्रेष्ठ सेवा है, आइए इस पुण्य कार्य में हमारा साथ दें।
`;

const extraContent = `
हमारी गौशाला न केवल गायों के लिए एक सुरक्षित आश्रय है, बल्कि यह एक सांस्कृतिक और आध्यात्मिक केंद्र भी है। यहाँ नियमित रूप से धार्मिक अनुष्ठान, गौपूजन, और सामुदायिक कार्यक्रम आयोजित किए जाते हैं, जिससे समाज में गौमाता के प्रति श्रद्धा और सेवा-भावना को बढ़ावा मिलता है।

हमारे सेवक और स्वयंसेवक दिन-रात गायों की देखभाल में समर्पित रहते हैं। हम आधुनिक पशु चिकित्सा, पौष्टिक आहार, और स्वच्छता का विशेष ध्यान रखते हैं। साथ ही, बच्चों और युवाओं को गौसंवर्धन, जैविक खेती, और भारतीय संस्कृति के प्रति जागरूक करने के लिए शैक्षिक कार्यशालाएँ भी आयोजित की जाती हैं।

शिव मंदिर गौशाला का उद्देश्य न केवल गायों की रक्षा करना है, बल्कि समाज में करुणा, सेवा और पर्यावरण संरक्षण की भावना को भी प्रोत्साहित करना है।
`;

const historyText = `
शिव मंदिर गौशाला, शमशेरगंज में स्थित शिवालय में विराजमान शिव लिंग लगभग 425 वर्ष प्राचीन है, जिनकी महिमा अपरंपार है और गौशाल के मुख्य प्रांगण में विराजमान श्री हनुमान जी महाराज का इतिहास लगभग 700 वर्षों से भी प्राचीन है जो बावड़ी से प्राप्त हुए थे। इसी श्रृंखला के अंतर्गत गौशाल में एक प्राचीन बावड़ी है जिसका जल ग्रहण करने मात्र से साधारण प्रसव होता है, गर्भवती महिलाओं को इसका जल नियमित रूप से पहले महीने से प्रसव पर्यंत ग्रहण करना चाहिए इसके परिणाम स्वरूप गर्भवती महिला को प्रसव वेदना नहीं होती है और साधारण प्रसव होता है,शल्य चिकित्सा की कोई जरूरत नहीं होती है, विश्वास ही फलदायक है।
`;

export default function AboutPage() {
  return (
    <section className="w-full bg-white min-h-screen" id="about">
      {/* Full-width image */}
      <div className="relative w-full h-96 md:h-[500px] mb-10">
        <Image
          src={image1}
          alt="Shiv Mandir Gaushala"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
        <h1 className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl md:text-5xl font-bold text-white drop-shadow-lg text-center">About Shiv Mandir Gaushala</h1>
      </div>

      {/* Main About Content */}
      <div className="w-4/5 lg:w-3/5 mx-auto">
        <div className="mb-10">
          <p className="text-gray-700 text-lg mb-6 whitespace-pre-line">{aboutText}</p>
          <p className="text-gray-700 text-lg mb-6 whitespace-pre-line">{extraContent}</p>
        </div>
        {/* Historical Section - highlighted */}
        <div className="bg-orange-50 border-l-4 border-orange-600 rounded-xl p-8 shadow-md mb-0">
          <h2 className="text-2xl font-bold text-orange-700 mb-4">Our Ancient Heritage</h2>
          <p className="text-gray-800 text-lg whitespace-pre-line">{historyText}</p>
        </div>
      </div>

      <DonateCarousel />
    </section>
  );
} 