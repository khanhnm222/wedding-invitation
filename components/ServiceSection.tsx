import React from 'react';
import { FloralDecoration } from './DecorativeElements';
import type { ServiceItem } from '@/types';

interface ServiceSectionProps {
  service: ServiceItem;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <FloralDecoration position={service.reversed ? 'top-right' : 'top-left'} />
      
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${service.reversed ? 'md:grid-flow-col-dense' : ''}`}>
          {/* Image */}
          <div className={`relative ${service.reversed ? 'md:col-start-2' : ''}`}>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <img src={service.image} alt={service.title}/>
              </div>
            </div>
            <FloralDecoration position={service.reversed ? 'bottom-left' : 'bottom-right'} />
          </div>

          {/* Content */}
          <div className={`space-y-6 ${service.reversed ? 'md:col-start-1' : ''}`}>
            <p className="text-sm uppercase tracking-widest text-sage-300 font-sans">
              {service.subtitle}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 leading-tight">
              {service.title}
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed">
              {service.description}
            </p>
            <button className="mt-4 px-6 py-2 border border-sage-300 text-sage-300 font-sans text-sm uppercase tracking-wider hover:bg-sage-300 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;