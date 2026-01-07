import React from 'react';
import { Card } from './ui/card';
import { aboutContent, images, videos } from '../mock';
import { BookHeart, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-saffron-800 mb-4">{aboutContent.title}</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl text-saffron-600 font-semibold mb-2">
              {aboutContent.sanskritVerse}
            </p>
            <p className="text-lg text-gray-600 italic mb-1">{aboutContent.verseTranslation}</p>
            <p className="text-sm text-gray-500">— {aboutContent.verseSource}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Video and Photo */}
          <div className="order-2 md:order-1 space-y-6">
            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video 
                src={videos.about} 
                controls
                className="w-full h-[350px] object-cover"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={images.about} 
                alt="Children at the foundation" 
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            {aboutContent.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Gurukul Parampara Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-saffron-800 mb-6">
              {aboutContent.gurukulSection.title}
            </h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-saffron-600 font-semibold mb-2 leading-relaxed">
                {aboutContent.gurukulSection.sanskritVerse}
              </p>
              <p className="text-base text-saffron-500 italic mb-2">
                {aboutContent.gurukulSection.verseTransliteration}
              </p>
              <p className="text-lg text-gray-600 italic leading-relaxed">
                {aboutContent.gurukulSection.verseTranslation}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {aboutContent.gurukulSection.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {paragraph.split('**').map((part, i) => {
                  if (i % 2 === 1) {
                    return <strong key={i} className="font-bold text-saffron-700">{part}</strong>;
                  }
                  return part.split('*').map((subpart, j) => {
                    if (j % 2 === 1) {
                      return <em key={j} className="italic">{subpart}</em>;
                    }
                    return subpart;
                  });
                })}
              </p>
            ))}

            {/* Activities Section */}
            <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-2xl p-8 my-8">
              <h4 className="text-2xl font-bold text-saffron-800 mb-6 text-center">
                Activities in the Ashram
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {aboutContent.gurukulSection.activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-saffron-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              {aboutContent.gurukulSection.conclusion.split('**').map((part, i) => {
                if (i % 2 === 1) {
                  return <strong key={i} className="font-bold text-saffron-700">{part}</strong>;
                }
                return part.split('*').map((subpart, j) => {
                  if (j % 2 === 1) {
                    return <em key={j} className="italic">{subpart}</em>;
                  }
                  return subpart;
                });
              })}
            </p>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-8 text-center border-2 border-saffron-100 hover:border-saffron-300 transition-all hover:shadow-xl bg-gradient-to-br from-white to-saffron-50">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center">
                <BookHeart className="w-8 h-8 text-saffron-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-saffron-800 mb-3">विद्या दान</h3>
            <h4 className="text-lg font-semibold text-saffron-600 mb-2">Vidya Daan</h4>
            <p className="text-gray-600">The gift of knowledge - the greatest offering one can make to society</p>
          </Card>

          <Card className="p-8 text-center border-2 border-saffron-100 hover:border-saffron-300 transition-all hover:shadow-xl bg-gradient-to-br from-white to-amber-50">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-saffron-800 mb-3">परमार्थ</h3>
            <h4 className="text-lg font-semibold text-amber-600 mb-2">Parmaarth</h4>
            <p className="text-gray-600">Selfless service - our commitment to uplifting the underprivileged</p>
          </Card>

          <Card className="p-8 text-center border-2 border-saffron-100 hover:border-saffron-300 transition-all hover:shadow-xl bg-gradient-to-br from-white to-orange-50">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-saffron-800 mb-3">धर्म</h3>
            <h4 className="text-lg font-semibold text-orange-600 mb-2">Dharma</h4>
            <p className="text-gray-600">Righteous duty - our sacred responsibility to serve society</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;