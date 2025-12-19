import React from 'react';
import { Card } from './ui/card';
import { foundersMessage } from '../mock';
import { Quote } from 'lucide-react';

const Founders = () => {
  return (
    <section id="founders" className="py-20 bg-gradient-to-br from-amber-50 via-saffron-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-saffron-800 mb-4">{foundersMessage.title}</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl text-saffron-600 font-semibold mb-2">
              {foundersMessage.sanskritVerse}
            </p>
            <p className="text-lg text-gray-600 italic mb-1">{foundersMessage.verseTranslation}</p>
            <p className="text-sm text-gray-500">— {foundersMessage.verseSource}</p>
          </div>
        </div>

        {/* Message Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative p-8 md:p-12 bg-white border-2 border-saffron-200 shadow-2xl">
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-16 h-16 text-saffron-600" />
            </div>
            
            <div className="relative z-10 space-y-6">
              {foundersMessage.message.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-lg md:text-xl">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Decorative Quote Icon */}
            <div className="absolute bottom-6 right-6 opacity-10 transform rotate-180">
              <Quote className="w-16 h-16 text-saffron-600" />
            </div>
          </Card>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-xl md:text-2xl text-saffron-700 font-semibold mb-4">
              Join us in this noble endeavor
            </p>
            <p className="text-gray-600 text-lg">
              Even a small offering, when done with a pure heart, becomes a blessing for many.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;