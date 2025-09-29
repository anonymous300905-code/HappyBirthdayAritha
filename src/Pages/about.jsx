import React, { useEffect, useRef, useState } from 'react';
import about1 from '../assets/about1.png'
import yt from '../assets/yt.png'
import reel from '../assets/Screenshot_20250929_233531.jpg'

const AboutPage = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState({});
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setHeaderVisible(true);
            } else {
              // Find which card this is
              const cardIndex = cardRefs.current.findIndex(ref => ref === entry.target);
              if (cardIndex !== -1) {
                setCardVisibility(prev => ({
                  ...prev,
                  [cardIndex]: true
                }));
              }
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe each card
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      title: "Talkathon ",
      content:"She participated in the Talkathon conducted by the ICT last year, where she spoke about 'How to Become a Superpower Country'",
      image: about1,
      imagePosition: "left"
    },
    {
      id: 2,
      title: "Youtuber",
      content: "She is a YouTuber who creates content on various topics, including technology and country-related themes. Her channel reflects her passion for sharing knowledge and insights.",
      image: yt,
      imagePosition: "right"
    },
    {
      id: 3,
      title: "Reels Maker",
      content: "She made one reel and now she’s officially a reel content creator.",
      image: reel,
      imagePosition: "left"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-8 md:py-12 min-h-screen" id='about'>
      {/* SVG Filters for Wavy Border Effects (Desktop Only) */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="wavy1">
            <feTurbulence x="0" y="0" baseFrequency="0.15" numOctaves="3" seed="2"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="8" />
          </filter>
          <filter id="wavy2">
            <feTurbulence x="0" y="0" baseFrequency="0.08" numOctaves="4" seed="5"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="12" />
          </filter>
          <filter id="wavy3">
            <feTurbulence x="0" y="0" baseFrequency="0.12" numOctaves="3" seed="8"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="10" />
          </filter>
        </defs>
      </svg>

      <div className="mx-auto max-w-6xl">
        {/* Header with animation */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 font-bold text-transparent text-4xl md:text-6xl animate-pulse">
            About Her
          </h1>
        </div>

        {/* Cards with individual animations */}
        <div className="space-y-12 md:space-y-16">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={el => cardRefs.current[index] = el}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-all duration-800 hover:scale-[1.02] ${
                index === 0 ? 'md:filter-[url(#wavy1)]' : 
                index === 1 ? 'md:filter-[url(#wavy2)]' : 
                'md:filter-[url(#wavy3)]'
              } ${
                cardVisibility[index] 
                  ? 'opacity-100 translate-y-0 translate-x-0' 
                  : `opacity-0 ${
                      card.imagePosition === 'right' 
                        ? 'translate-x-16' 
                        : '-translate-x-16'
                    } translate-y-12`
              }`}
            >
            
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div
                className={`flex flex-col ${
                  card.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center p-4 md:p-6 lg:p-8 gap-6 md:gap-8`}
              >
                {/* Image with animation */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <div 
                    className={`relative overflow-hidden rounded-xl aspect-[5/3] group-hover:scale-105 transition-all duration-700 ${
                      cardVisibility[index] 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95'
                    }`}
                    style={{
                      transitionDelay: cardVisibility[index] ? '200ms' : '0ms'
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content with animation */}
                <div className="space-y-6 w-full md:w-1/2">
                  <h2 
                    className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent transition-all duration-700 ${
                      cardVisibility[index] 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: cardVisibility[index] ? '300ms' : '0ms'
                    }}
                  >
                    {card.title}
                  </h2>
                  <p 
                    className={`text-gray-300 text-lg md:text-xl leading-relaxed transition-all duration-700 ${
                      cardVisibility[index] 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: cardVisibility[index] ? '400ms' : '0ms'
                    }}
                  >
                    {card.content}
                  </p>
                  
                  {/* Decorative element with animation */}
                  <div 
                    className={`flex items-center space-x-2 pt-4 transition-all duration-700 ${
                      cardVisibility[index] 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}
                    style={{
                      transitionDelay: cardVisibility[index] ? '500ms' : '0ms'
                    }}
                  >
                    <div className={`w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform origin-left transition-transform duration-500 ${
                      cardVisibility[index] ? 'scale-x-100' : 'scale-x-0'
                    }`} 
                         style={{ transitionDelay: cardVisibility[index] ? '600ms' : '0ms' }}></div>
                    <div className={`w-6 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform origin-left transition-transform duration-500 ${
                      cardVisibility[index] ? 'scale-x-100' : 'scale-x-0'
                    }`} 
                         style={{ transitionDelay: cardVisibility[index] ? '700ms' : '0ms' }}></div>
                    <div className={`w-3 h-1 bg-pink-500 rounded-full transform origin-left transition-transform duration-500 ${
                      cardVisibility[index] ? 'scale-x-100' : 'scale-x-0'
                    }`} 
                         style={{ transitionDelay: cardVisibility[index] ? '800ms' : '0ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;