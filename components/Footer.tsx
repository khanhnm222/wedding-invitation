import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 border-2 border-sage-300 rounded-full flex items-center justify-center">
                <span className="text-sage-300 text-xl font-serif">E</span>
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-800">Enchanted</h3>
                <p className="text-xs text-gray-600 font-sans">Moments</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 font-sans">
              Creating unforgettable moments for your special day.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2 text-sm font-sans text-gray-600">
              <li><a href="#" className="hover:text-sage-300 transition-colors">Full Planning</a></li>
              <li><a href="#" className="hover:text-sage-300 transition-colors">Partial Planning</a></li>
              <li><a href="#" className="hover:text-sage-300 transition-colors">Day Coordination</a></li>
              <li><a href="#" className="hover:text-sage-300 transition-colors">Design Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans text-gray-600">
              <li><a href="#about" className="hover:text-sage-300 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-sage-300 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-sage-300 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-sage-300 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg text-gray-800 mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-600 font-sans mb-4">
              Subscribe to our newsletter for wedding tips and inspiration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-sage-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-sage-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-sage-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream-300 pt-8 text-center">
          <p className="text-sm text-gray-600 font-sans">
            © 2025 Enchanted Moments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;