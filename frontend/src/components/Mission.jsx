import React from 'react';
import { Card } from './ui/card';
import { missionContent, images, videos } from '../mock';
import { Target, GraduationCap, Heart, Lightbulb } from 'lucide-react';

const Mission = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Holistic Education',
      description: 'Free, comprehensive education rooted in Sanatan Dharma values'
    },
    {
      icon: Lightbulb,
      title: 'Self-Reliance',
      description: 'Tools for personal growth and spiritual and material well-being'
    },
    {
      icon: Heart,
      title: 'Sacred Offering',
      description: 'Not charity, but a yajna for the upliftment of society'
    },
    {
      icon: Target,
      title: 'Future Citizens',
      description: 'Nurturing responsible, confident, and spiritually aware individuals'
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-saffron-50 via-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-saffron-800 mb-4">{missionContent.title}</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl text-saffron-600 font-semibold mb-2">
              {missionContent.sanskritVerse}
            </p>
            <p className="text-lg text-gray-600 italic mb-1">{missionContent.verseTranslation}</p>
            <p className="text-sm text-gray-500">— {missionContent.verseSource}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            {missionContent.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Video and Photo */}
          <div className="space-y-6">
            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video 
                src={videos.mission} 
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
                src={images.mission} 
                alt="Mission activities" 
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center border-2 border-white hover:border-saffron-300 transition-all hover:shadow-xl bg-white/80 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-saffron-100 rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7 text-saffron-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-saffron-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;