'use client';

import React, { useState } from 'react';
import { FloralDecoration } from './DecorativeElements';
import type { FormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <FloralDecoration position="top-right" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-sage-300 font-sans">
              Ready to Start?
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 leading-tight">
              WE WILL PLAN YOUR DAY,<br />
              <span className="text-sage-300">YOUR WAY.</span>
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed">
              Let's discuss your dream wedding. Fill out the form and we'll get back to you 
              within 24 hours to schedule a consultation.
            </p>
            
            <div className="space-y-4 pt-8">
              <div>
                <h3 className="font-serif text-lg text-gray-800 mb-2">Our Office</h3>
                <p className="text-gray-600 font-sans text-sm">
                  123 Wedding Lane<br />
                  Dream City, DC 12345
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-gray-800 mb-2">Contact</h3>
                <p className="text-gray-600 font-sans text-sm">
                  hello@enchantedmoments.com<br />
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-sans text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-300 font-sans"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-sans text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-300 font-sans"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-sans text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-300 font-sans"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-sans text-gray-700 mb-2">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-300 font-sans"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-sans text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-300 font-sans"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-sans text-gray-700 mb-2">
                  Tell us about your dream wedding
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-cream-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-300 font-sans resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-sage-300 text-white font-sans text-sm uppercase tracking-wider hover:bg-sage-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;