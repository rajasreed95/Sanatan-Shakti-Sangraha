import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { X } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const VolunteerDialog = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    volunteerType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your name",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      toast({
        title: "Contact information required",
        description: "Please provide either email or phone number",
        variant: "destructive"
      });
      return;
    }

    if (!formData.volunteerType.trim()) {
      toast({
        title: "Volunteer type is required",
        description: "Please tell us how you would like to volunteer",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/volunteer`, formData);
      
      toast({
        title: "Thank you for volunteering!",
        description: "We have received your information and will contact you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        volunteerType: '',
        message: ''
      });

      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-saffron-800">Volunteer With Us</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Name <span className="text-red-600">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="border-saffron-200 focus:border-saffron-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email <span className="text-sm text-gray-500">(Either email or phone required)</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="border-saffron-200 focus:border-saffron-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              Phone Number <span className="text-sm text-gray-500">(Either email or phone required)</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXXXXXXX"
              className="border-saffron-200 focus:border-saffron-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="volunteerType" className="text-gray-700">
              How would you like to volunteer? <span className="text-red-600">*</span>
            </Label>
            <Input
              id="volunteerType"
              name="volunteerType"
              value={formData.volunteerType}
              onChange={handleChange}
              placeholder="e.g., Teaching, Mentoring, Organizing events, etc."
              className="border-saffron-200 focus:border-saffron-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700">
              Any message for us? <span className="text-sm text-gray-500">(Optional)</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about yourself or your interests..."
              className="border-saffron-200 focus:border-saffron-500 min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-saffron-600 hover:bg-saffron-700 text-white py-6 text-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VolunteerDialog;
