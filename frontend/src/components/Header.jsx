import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { foundationInfo } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-saffron-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Foundation Name */}
          <div className="flex items-center gap-2">
            <img 
              src={foundationInfo.logo} 
              alt="Sanatan Shakti Sangrah Logo" 
              className="h-16 md:h-20 w-auto object-contain"
              style={{ mixBlendMode: 'multiply', filter: 'contrast(1.2)' }}
            />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-saffron-700">{foundationInfo.name}</h1>
              <p className="text-xs md:text-sm text-saffron-600 italic">{foundationInfo.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-saffron-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-saffron-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-saffron-600 transition-colors font-medium">
              Mission
            </button>
            <button onClick={() => scrollToSection('vision')} className="text-gray-700 hover:text-saffron-600 transition-colors font-medium">
              Vision
            </button>
            <button onClick={() => scrollToSection('founders')} className="text-gray-700 hover:text-saffron-600 transition-colors font-medium">
              Founders
            </button>
            <button onClick={() => scrollToSection('help')} className="text-gray-700 hover:text-saffron-600 transition-colors font-medium">
              Get Involved
            </button>
            <Button 
              onClick={() => scrollToSection('help')} 
              className="bg-saffron-600 hover:bg-saffron-700 text-white"
            >
              Donate Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-saffron-700 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-saffron-600 transition-colors font-medium py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-saffron-600 transition-colors font-medium py-2">
              About
            </button>
            <button onClick={() => scrollToSection('mission')} className="text-left text-gray-700 hover:text-saffron-600 transition-colors font-medium py-2">
              Mission
            </button>
            <button onClick={() => scrollToSection('vision')} className="text-left text-gray-700 hover:text-saffron-600 transition-colors font-medium py-2">
              Vision
            </button>
            <button onClick={() => scrollToSection('founders')} className="text-left text-gray-700 hover:text-saffron-600 transition-colors font-medium py-2">
              Founders
            </button>
            <button onClick={() => scrollToSection('help')} className="text-left text-gray-700 hover:text-saffron-600 transition-colors font-medium py-2">
              Get Involved
            </button>
            <Button 
              onClick={() => scrollToSection('help')} 
              className="bg-saffron-600 hover:bg-saffron-700 text-white w-full"
            >
              Donate Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;