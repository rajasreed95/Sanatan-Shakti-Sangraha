import React from 'react';
import { contactInfo, foundationInfo } from '../mock';
import { MapPin, Mail, Phone, Heart, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-saffron-900 via-saffron-800 to-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Foundation Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2">सनातन शक्ति संग्रह</h3>
            <p className="!italic mb-4 text-saffron-200">|| तमसो मा ज्योतिर्गमय ||</p>
            <p className="text-saffron-100 leading-relaxed">
              Dedicated to uplifting underprivileged children through the transformative power of education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-saffron-200 hover:text-white transition-colors">

                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('mission')}
                  className="text-saffron-200 hover:text-white transition-colors">

                  Our Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('vision')}
                  className="text-saffron-200 hover:text-white transition-colors">

                  Our Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('founders')}
                  className="text-saffron-200 hover:text-white transition-colors">

                  Founders' Message
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('help')}
                  className="text-saffron-200 hover:text-white transition-colors">

                  Get Involved
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">{contactInfo.title}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron-300 mt-1 flex-shrink-0" />
                <span className="text-saffron-100">{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-saffron-300 mt-1 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-saffron-100 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              {contactInfo.phones.map((phone, index) =>
              <li key={index} className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-saffron-300 mt-1 flex-shrink-0" />
                  <a href={`tel:${phone}`} className="text-saffron-100 hover:text-white transition-colors">
                    {phone}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-saffron-300 mt-1 flex-shrink-0" />
                <a
                  href={foundationInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-saffron-100 hover:text-white transition-colors">

                  Visit our Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-saffron-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-saffron-200 text-center md:text-left">
              © {currentYear} सनातन शक्ति संग्रह (Sanatan Shakti Sangrah). All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-saffron-200">
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> for the children of Bharat
            </p>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;