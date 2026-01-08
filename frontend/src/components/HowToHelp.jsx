import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { howToHelp } from '../mock';
import { Heart, Users, ArrowRight } from 'lucide-react';
import VolunteerDialog from './VolunteerDialog';
import DonateDialog from './DonateDialog';

const HowToHelp = () => {
  const [volunteerDialogOpen, setVolunteerDialogOpen] = useState(false);
  const [donateDialogOpen, setDonateDialogOpen] = useState(false);

  const handleDonate = () => {
    setDonateDialogOpen(true);
  };

  const handleVolunteer = () => {
    setVolunteerDialogOpen(true);
  };

  return (
    <section id="help" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-saffron-800 mb-4">{howToHelp.title}</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl text-saffron-600 font-semibold mb-2">
              {howToHelp.sanskritVerse}
            </p>
            <p className="text-lg text-gray-600 italic mb-1">{howToHelp.verseTranslation}</p>
            <p className="text-sm text-gray-500">— {howToHelp.verseSource}</p>
          </div>
        </div>

        {/* Help Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Donate Card */}
          <Card className="border-2 border-saffron-200 hover:border-saffron-400 transition-all hover:shadow-2xl bg-gradient-to-br from-white to-saffron-50">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-saffron-100 rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-saffron-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-saffron-800 mb-4 text-center">{howToHelp.donate.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-center">
                {howToHelp.donate.description}
              </p>
              <Button
                onClick={handleDonate}
                className="w-full bg-saffron-600 hover:bg-saffron-700 text-white py-6 text-lg flex items-center justify-center gap-2 group">

                Donate Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Volunteer Card */}
          <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-2xl bg-gradient-to-br from-white to-amber-50">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-amber-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-saffron-800 mb-4 text-center">{howToHelp.volunteer.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-center">
                {howToHelp.volunteer.description}
              </p>
              <Button
                onClick={handleVolunteer}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg flex items-center justify-center gap-2 group">

                Volunteer With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="!text-lg text-gray-600">Whether through financial contribution, supplies, or your time and skills, every form of support helps us bring the light of education to more children. Together, we can create a brighter future for the next generation.



          </p>
        </div>
      </div>

      {/* Dialogs */}
      <VolunteerDialog open={volunteerDialogOpen} onOpenChange={setVolunteerDialogOpen} />
      <DonateDialog open={donateDialogOpen} onOpenChange={setDonateDialogOpen} />
    </section>);

};

export default HowToHelp;