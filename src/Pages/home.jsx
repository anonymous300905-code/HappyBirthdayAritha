import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.png';
import image4 from '../assets/image4.png';
import image3 from '../assets/image3.png';

const Home = () => {
    const [imagesLoaded, setImagesLoaded] = useState([false, false, false]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const handleImageLoad = (index) => {
        setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
        });
    };

    const images = [image4, image3, image1];

    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-8 md:py-12 h-[75vh]"
            id='home'
        >
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

            <div className="mx-auto max-w-7xl">
                {/* Main Flex Container */}
                <div className="relative flex lg:flex-row flex-col items-center gap-8 lg:gap-12">
                    
                    {/* Images Section - First flex item */}
                    <div className="flex-shrink-0 w-full lg:w-80">
                        {/* Desktop Layout - Image Gallery */}
                        <div className="hidden lg:block space-y-8">
                            {/* First Image */}
                            <div className={`group transition-all duration-1000 delay-300 transform rotate-6 relative ${
                                imagesLoaded[0] && isVisible 
                                    ? 'translate-y-0 opacity-100 scale-100' 
                                    : 'translate-y-12 opacity-0 scale-95'
                            }`}>
                                {/* Wavy Border Frame */}
                                <div 
                                    className="top-0 left-0 z-10 absolute shadow-lg border-[20px] border-white rounded-2xl w-64 height"
                                    style={{filter: 'url(#wavy1)'}}
                                ></div>
                                
                                <div className="relative shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden hover:rotate-12 transition-all hover:-translate-y-2 duration-500">
                                    <div className="w-64 overflow-hidden translate-x-5 translate-y-5 height">
                                        <img 
                                            src={images[0]}
                                            alt="Aritha - Portrait 1"
                                            className="rounded-2xl w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            onLoad={() => handleImageLoad(0)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Second Image */}
                            <div className={`group transition-all duration-1000 delay-500 transform -rotate-3 ml-8 relative ${
                                imagesLoaded[1] && isVisible 
                                    ? 'translate-y-0 opacity-100 scale-100' 
                                    : 'translate-y-12 opacity-0 scale-95'
                            }`}>
                                {/* Wavy Border Frame */}
                                <div 
                                    className="top-0 left-0 z-10 absolute shadow-lg border-[20px] border-white rounded-2xl w-56 height"
                                    style={{filter: 'url(#wavy2)'}}
                                ></div>
                                
                                <div className="relative shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden hover:-rotate-9 transition-all hover:-translate-y-2 duration-500">
                                    <div className="w-56 overflow-hidden translate-x-5 translate-y-5 height">
                                        <img 
                                            src={images[1]}
                                            alt="Aritha - Portrait 2"
                                            className="rounded-2xl w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            onLoad={() => handleImageLoad(1)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Third Image */}
                            <div className={`group transition-all duration-1000 delay-700 transform rotate-3 ml-4 relative ${
                                imagesLoaded[2] && isVisible 
                                    ? 'translate-y-0 opacity-100 scale-100' 
                                    : 'translate-y-12 opacity-0 scale-95'
                            }`}>
                                {/* Wavy Border Frame */}
                               
                               
                            </div>
                        </div>

                        {/* Mobile/Tablet Layout - Scattered Images */}
                        <div className="lg:hidden -top-10 left-0 absolute w-full h-full pointer-events-none">
                            {/* First Image - Top Left */}
                            <div className={`absolute -left-10 sm:left-0 top-20 z-20 transition-all duration-1000 delay-300 transform ${
                                imagesLoaded[0] && isVisible 
                                    ? 'translate-y-0 opacity-90 rotate-12' 
                                    : '-translate-y-4 opacity-0 rotate-6'
                            }`}>
                                <div className="shadow-lg p-2 rounded-lg">
                                    <img 
                                        src={images[0]}
                                        alt="Aritha"
                                        className="rounded-md w-28 sm:w-36 md:w-44 h-32 sm:h-40 md:h-48 object-cover"
                                        onLoad={() => handleImageLoad(0)}
                                    />
                                </div>
                            </div>

                            {/* Second Image - Top Right */}
                            <div className={`absolute -right-10 sm:right-8 -bottom-10 z-20 transition-all duration-1000 delay-500 transform ${
                                imagesLoaded[1] && isVisible 
                                    ? 'translate-y-0 opacity-90 -rotate-12' 
                                    : '-translate-y-4 opacity-0 -rotate-6'
                            }`}>
                                <div className="shadow-lg p-2 rounded-lg">
                                    <img 
                                        src={images[1]}
                                        alt="Aritha"
                                        className="rounded-md w-24 sm:w-32 md:w-40 h-28 sm:h-36 md:h-44 object-cover"
                                        onLoad={() => handleImageLoad(1)}
                                    />
                                </div>
                            </div>

                            {/* Third Image - Bottom Right */}
                          
                        </div>
                    </div>

                    {/* Content Section - Second flex item */}
                    <div className="flex-1">
                        {/* Header Section */}
                        <div className={`text-center lg:text-left mb-8 md:mb-16 transition-all duration-1000 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                            <h1 className="bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 md:mb-6 font-bold text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                It's Aritha
                            </h1>
                            <div className="bg-gradient-to-r from-purple-400 to-pink-400 mx-auto lg:mx-0 rounded-full w-16 md:w-24 h-1"></div>
                        </div>

                        {/* Paragraph Content */}
                        <div className={`transition-all duration-1000 delay-900 transform ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                            <p className="z-10 relative bg-black/20 backdrop-blur-sm p-10 px-4 sm:px-8 md:px-12 lg:px-0 py-8 rounded-xl font-medium text-gray-300 text-base lg:text-lg xl:text-xl text-center lg:text-justify lg:indent-8 leading-relaxed"
                                style={{padding : '10%'}}
                            >
                                A gurl who is deeply passionate about life and success. A drone enthusiast, future entrepreneur, and much more. She admires Smriti Mandhana, and perhaps loves cricket only because of her (though I'm not entirely sure). If she chose an topic for an competion to speak, it may be about Country or Technology there will be an reference for Smriti , that shows how much she admires her .She is also a YouTuber, a speaker, and so much more.
                            </p>
                        </div>
                    </div>
                </div>

             </div>
        </div>
    );
};

export default Home;