import React from 'react';

export const FloralDecoration: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ position }) => {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-32 h-32 opacity-30 pointer-events-none`}>
      <svg viewBox="0 0 100 100" className="w-full h-full text-sage-200">
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="30" cy="25" r="2" fill="currentColor" />
        <circle cx="25" cy="35" r="2.5" fill="currentColor" />
        <path
          d="M20,20 Q30,30 25,40"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export const GoldAccent: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-amber-200 rounded-full opacity-60"></div>
    <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber-300 rounded-full opacity-40"></div>
    <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-amber-200 rounded-full opacity-50"></div>
  </div>
);