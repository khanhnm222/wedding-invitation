'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FloralDecoration } from './DecorativeElements';

const GallerySlides: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  
  const galleryImages = [
    { id: '1', title: 'Rustic Barn Wedding', src: '/images/' },
    { id: '2', title: 'Garden Ceremony', src: '' },
    { id: '3', title: 'Beach Wedding', src: '' },
    { id: '4', title: 'Elegant Reception', src: '' },
    { id: '5', title: 'Romantic Decor', src: '' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getVisibleImages = () => {
    const prev = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    const next = (currentIndex + 1) % galleryImages.length;
    return [prev, currentIndex, next];
  };

  const visibleIndices = getVisibleImages();

  return (
    <section id="gallery" className="relative py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-50">
        {/* Large decorative circle */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cream-200 rounded-full opacity-40 translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-sage-100 rounded-full opacity-30 -translate-x-1/2"></div>
      </div>

      <FloralDecoration position="top-left" />
      <FloralDecoration position="bottom-right" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-sage-300 font-sans mb-4">
            The Wedding Party
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800">
            OUR GALLERY
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all md:relative md:left-auto hover:cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Images Container */}
            <div className="flex items-center justify-center gap-4 md:gap-6 w-full px-12 md:px-0">
              {visibleIndices.map((imageIndex, idx) => {
                const isCenter = idx === 1;
                const image = galleryImages[imageIndex];
                
                return (
                  <div
                    key={`${imageIndex}-${idx}`}
                    className={`transition-all duration-500 rounded-lg overflow-hidden shadow-xl ${
                      isCenter
                        ? 'w-64 h-80 md:w-96 md:h-[500px] scale-100 opacity-100 z-10'
                        : 'hidden md:block w-48 h-64 md:w-64 md:h-80 scale-90 opacity-60'
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-sage-100 via-cream-200 to-rose-100 flex items-center justify-center relative group">
                      <span className="text-gray-400 font-sans text-sm text-center px-4">
                        {image.title}<br />
                        <span className="text-xs">Image Placeholder {imageIndex + 1}</span>
                      </span>
                      
                      {/* Overlay on hover */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all md:relative md:right-auto hover:cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-sage-300 w-8'
                    : 'bg-cream-300 hover:bg-sage-200'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-3 border-2 border-sage-300 text-sage-300 font-sans text-sm uppercase tracking-wider hover:bg-sage-300 hover:text-white transition-colors rounded-full">
            Explore
          </button>
        </div>
      </div>

      {/* Decorative gold dots */}
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-amber-300 rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-amber-300 rounded-full opacity-50"></div>
    </section>
  );
};

export default GallerySlides;