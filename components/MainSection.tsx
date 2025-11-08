import React from 'react';
import Image from 'next/image';

const MainSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream-50">
      {/* Gold Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10 relative">
            <p className="text-sm uppercase tracking-[0.3em] text-rose-300 font-sans">
              Life is an Event
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-rose-300 leading-tight">
              CREATING THE<br />
              BEST DAY EVER
            </h1>
            <p className="text-gray-600 font-sans leading-relaxed max-w-md text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mi at augue ultrices, in tempus elit tristique. Aliquam ultrices sem non.
            </p>
            <button className="mt-6 px-10 py-3 border-2 border-rose-300 text-rose-300 font-sans text-xs uppercase tracking-[0.2em] hover:bg-rose-300 hover:text-white transition-colors rounded-full">
              Explore
            </button>
          </div>

          {/* Right Content - Couple Image with Decorative Elements */}
          <div className="relative h-[500px] md:h-[600px] z-10">
            {/* Decorative Leaf Branches - Top Left */}
            <svg 
              className="absolute -top-10 -left-10 w-48 h-48 text-rose-200 opacity-60 z-20"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50 150 Q 60 120, 70 100 Q 80 80, 90 60" stroke="currentColor" strokeWidth="1" fill="none"/>
              <ellipse cx="55" cy="140" rx="8" ry="15" fill="currentColor" transform="rotate(-30 55 140)"/>
              <ellipse cx="62" cy="125" rx="7" ry="13" fill="currentColor" transform="rotate(-25 62 125)"/>
              <ellipse cx="68" cy="110" rx="8" ry="14" fill="currentColor" transform="rotate(-20 68 110)"/>
              <ellipse cx="75" cy="95" rx="7" ry="12" fill="currentColor" transform="rotate(-15 75 95)"/>
              <ellipse cx="82" cy="80" rx="8" ry="13" fill="currentColor" transform="rotate(-10 82 80)"/>
              <ellipse cx="88" cy="65" rx="7" ry="12" fill="currentColor" transform="rotate(-5 88 65)"/>
            </svg>

            {/* Decorative Leaf Branches - Bottom Right */}
            <svg 
              className="absolute -bottom-10 -right-10 w-48 h-48 text-rose-200 opacity-60 z-20"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M150 50 Q 140 80, 130 100 Q 120 120, 110 140" stroke="currentColor" strokeWidth="1" fill="none"/>
              <ellipse cx="145" cy="60" rx="8" ry="15" fill="currentColor" transform="rotate(30 145 60)"/>
              <ellipse cx="138" cy="75" rx="7" ry="13" fill="currentColor" transform="rotate(25 138 75)"/>
              <ellipse cx="132" cy="90" rx="8" ry="14" fill="currentColor" transform="rotate(20 132 90)"/>
              <ellipse cx="125" cy="105" rx="7" ry="12" fill="currentColor" transform="rotate(15 125 105)"/>
              <ellipse cx="118" cy="120" rx="8" ry="13" fill="currentColor" transform="rotate(10 118 120)"/>
              <ellipse cx="112" cy="135" rx="7" ry="12" fill="currentColor" transform="rotate(5 112 135)"/>
            </svg>

            {/* Geometric Circle Frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              {/* Outer decorative circle with partial border */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                <circle 
                  cx="250" 
                  cy="250" 
                  r="240" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  strokeDasharray="20 10"
                  className="text-rose-300 opacity-40"
                />
                <circle 
                  cx="250" 
                  cy="250" 
                  r="235" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5"
                  className="text-amber-300 opacity-30"
                />
              </svg>

              {/* Geometric lines */}
              <svg className="absolute bottom-0 right-0 w-32 h-32 text-amber-400 opacity-40" viewBox="0 0 100 100">
                <line x1="10" y1="90" x2="50" y2="10" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="50" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="90" y1="90" x2="10" y2="90" stroke="currentColor" strokeWidth="0.5"/>
              </svg>

              {/* Main Circular Image Container */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-2xl border-8 border-white">
                {/* Background - Beach/Ocean Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-blue-100 to-cyan-50">
                  {/* Placeholder for beach background - Replace with actual image */}
                  <div className="w-full h-full flex items-end justify-center pb-20">
                    <span className="text-sky-300 text-xs font-sans opacity-50">Beach Background</span>
                  </div>
                </div>
                
                {/* Couple Image Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for couple image - Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-b from-transparent via-transparent to-white/20 flex items-center justify-center">
                    <img src="/images/main-object.png" alt="Hero"/>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Gold Sparkles around the image */}
            <div className="absolute top-20 right-20 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-10 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-40 left-10 w-1 h-1 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;