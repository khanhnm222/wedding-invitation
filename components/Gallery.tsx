import React from 'react';
import { FloralDecoration } from './DecorativeElements';

const Gallery: React.FC = () => {
  const galleryImages = [
    { id: '1', span: 'md:col-span-1 md:row-span-2' },
    { id: '2', span: 'md:col-span-2 md:row-span-1' },
    { id: '3', span: 'md:col-span-1 md:row-span-1' },
    { id: '4', span: 'md:col-span-2 md:row-span-1' },
  ];

  return (
    <section id="gallery" className="relative py-20 bg-cream-100 overflow-hidden">
      <FloralDecoration position="top-left" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-sage-300 font-sans mb-4">
            Moments We've Created
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800">
            OUR GALLERY
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className={`${item.span} rounded-lg overflow-hidden group cursor-pointer`}
            >
              <div className="w-full h-full bg-gradient-to-br from-sage-100 via-cream-200 to-rose-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-gray-400 font-sans text-sm">Gallery Image {index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-sage-300 text-white font-sans text-sm uppercase tracking-wider hover:bg-sage-200 transition-colors">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
