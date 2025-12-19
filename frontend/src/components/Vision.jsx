import React from 'react';
import { Card } from './ui/card';
import { visionContent, images } from '../mock';
import { Globe, BookOpen, TrendingUp } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: Globe,
      title: 'No Child Left Behind',
      description: 'Access to quality education for every child, regardless of economic background'
    },
    {
      icon: BookOpen,
      title: 'Modern Yet Rooted',
      description: 'Education that is contemporary in method yet deeply grounded in Indian ethos'
    },
    {
      icon: TrendingUp,
      title: 'Knowledge for Growth',
      description: 'Path to inner growth, social harmony, and national service through education'
    }
  ];

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-saffron-800 mb-4">{visionContent.title}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-saffron-600 font-semibold mb-2 leading-relaxed">
              {visionContent.sanskritVerse}
            </p>
            <p className="text-base md:text-lg text-gray-600 italic mb-1 leading-relaxed">{visionContent.verseTranslation}</p>
            <p className="text-sm text-gray-500">— {visionContent.verseSource}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={images.vision} 
                alt="Vision for education" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {visionContent.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Vision Points */}
        <div className="grid md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card 
                key={index}
                className="p-8 border-2 border-saffron-100 hover:border-saffron-300 transition-all hover:shadow-xl bg-gradient-to-br from-white to-saffron-50"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-saffron-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-saffron-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-saffron-800 mb-3 text-center">{point.title}</h3>
                <p className="text-gray-600 text-center">{point.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-saffron-50 to-amber-50 border-2 border-saffron-200">
            <p className="text-xl md:text-2xl text-center text-gray-700 italic leading-relaxed">
              "Unlike other forms of charity that address immediate needs like food (Anna Daan), money (Dhana Daan) or land (Bhu Daan), knowledge multiplies when shared."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;