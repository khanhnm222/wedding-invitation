import React from 'react';
import { FloralDecoration, GoldAccent } from './DecorativeElements';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <FloralDecoration position="top-left" />
      <GoldAccent />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <p className="text-sm uppercase tracking-widest text-sage-300 font-sans">
              Let's Begin Your
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-gray-800 leading-tight">
              CREATING THE<br />
              <span className="text-sage-300">BEST DAY EVER</span>
            </h1>
            <p className="text-gray-600 font-sans leading-relaxed max-w-md">
              Every love story is unique, and your wedding should be too. We specialize in 
              creating unforgettable moments that reflect your personality, style, and dreams. 
              Let us turn your vision into reality with meticulous planning and creative design.
            </p>
            <button className="mt-6 px-8 py-3 bg-sage-300 text-white font-sans text-sm uppercase tracking-wider hover:bg-sage-200 transition-colors">
              Start Planning
            </button>
          </div>

          {/* Right Content - Image Collage */}
          <div className="relative h-[600px]">
            <div className="absolute top-0 right-0 w-80 h-96 bg-cream-200 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-sage-100 to-rose-100 flex items-center justify-center">
                {/* <span className="text-gray-400 font-sans text-sm">Hero Image Placeholder</span> */}
                <img src="/images/main-object.png" alt="Hero"/>
              </div>
            </div>
            <FloralDecoration position="bottom-right" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cream-300 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-rose-100 to-cream-200 flex items-center justify-center">
                <span className="text-gray-400 font-sans text-xs text-center">Small Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;