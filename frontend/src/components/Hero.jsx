import React from 'react';
import { Button } from './ui/button';
import { foundationInfo } from '../mock';
import { BookOpen, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 via-amber-50 to-orange-50 opacity-90" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sanskrit Quote */}
          <div className="mb-8 animate-fade-in">
            <p className="text-3xl md:text-5xl font-bold text-saffron-700 mb-2">
              || {foundationInfo.tagline} ||
            </p>
            <p className="text-lg md:text-xl text-saffron-600 italic mb-1">
              {foundationInfo.taglineEnglish}
            </p>
            <p className="text-base md:text-lg text-gray-700">
              {foundationInfo.taglineTranslation}
            </p>
            <p className="text-sm text-gray-600 mt-2">— {foundationInfo.taglineSource}</p>
          </div>

          {/* Foundation Name with Logo */}
          <div className="mb-8 animate-fade-in-delay flex items-center justify-center gap-4 max-w-6xl mx-auto" style={{ marginLeft: '-5rem' }}>
            <div className="flex-shrink-0">
              <img 
                src={foundationInfo.logoSmall} 
                alt="Sanatan Shakti Sangrah Logo" 
                className="h-28 md:h-36 w-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <div className="flex flex-col text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-saffron-800 mb-2">
                {foundationInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-saffron-600">
                {foundationInfo.nameEnglish}
              </h2>
            </div>
          </div>

          {/* Mission Statement */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dedicated to uplifting underprivileged children through the transformative power of education,
            rooted in the timeless values of Sanatan Dharma.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('help')}
              size="lg"
              className="bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              size="lg"
              variant="outline"
              className="border-2 border-saffron-600 text-saffron-700 hover:bg-saffron-50 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Learn More
            </Button>
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center items-center gap-4 text-saffron-400">
            <div className="h-px w-16 bg-saffron-300" />
            <div className="w-2 h-2 rounded-full bg-saffron-400" />
            <div className="w-3 h-3 rounded-full bg-saffron-500" />
            <div className="w-2 h-2 rounded-full bg-saffron-400" />
            <div className="h-px w-16 bg-saffron-300" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-saffron-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-saffron-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;