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
          {/* Videos */}
          <div className="order-2 md:order-1 space-y-6">
            {videos.about.map((videoUrl, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  src={videoUrl} 
                  controls
                  className="w-full h-[300px] object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
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