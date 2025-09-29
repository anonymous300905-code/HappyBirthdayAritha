export const Footer = () => {
    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-8 md:py-12 min-h-[75vh]"
            id='footer'
        >
            {/* SVG Filters for Wavy Border Effects (Desktop Only) */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="wavyFooter">
                        <feTurbulence x="0" y="0" baseFrequency="0.12" numOctaves="3" seed="10"></feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="10" />
                    </filter>
                </defs>
            </svg>

            <div className="w-full max-w-3xl">
                {/* Main Content Card */}
                <div className="group relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 shadow-2xl backdrop-blur-sm md:filter-[url(#wavyFooter)] p-8 md:p-12 border border-gray-700/30 hover:border-gray-600/50 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-800">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Decorative Corner Accents */}
                    <div className="top-0 left-0 absolute border-gray-300/40 border-t-2 border-l-2 rounded-tl-3xl w-20 h-20"></div>
                    <div className="right-0 bottom-0 absolute border-gray-300/40 border-r-2 border-b-2 rounded-br-3xl w-20 h-20"></div>

                    {/* Sparkle Icons */}
                    <div className="-top-4 -right-4 z-111 absolute text-gray-200 text-4xl animate-pulse">✨</div>
                    <div className="-bottom-4 -left-4 absolute text-gray-200 text-4xl animate-pulse" style={{ animationDelay: '1s' }}>✨</div>

                    {/* Content */}
                    <div className="z-10 relative space-y-6 text-center">
                        <h2 className="bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-300 font-bold text-transparent text-3xl md:text-4xl">
                            With All My Heart
                        </h2>

                        <div className="bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto w-32 h-px"></div>

                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            Every element of this Website has been crafted with care to honor your special day.
                            I sincerely hope it brings a smile to your face and warmth to your heart.
                        </p>

                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            A little surprise awaits you—tucked away in the desk where you sat yesterday,
                            just as I mentioned before. I hope it finds you today.
                        </p>

                        <div className="pt-4">
                            <p className="mb-2 font-semibold text-gray-200 text-2xl md:text-3xl">
                                Once Again,
                            </p>
                            <p className="bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-200 font-bold text-transparent text-3xl md:text-4xl">
                                Happiest 20th Birthday! 
                            </p>
                        </div>

                        {/* Decorative Hearts */}
                        <div className="flex justify-center gap-4 pt-6 text-red-400/60">
                            <span className="text-2xl animate-pulse">💛</span>
                            <span className="text-3xl animate-pulse" style={{ animationDelay: '0.5s' }}>💛</span>
                            <span className="text-2xl animate-pulse" style={{ animationDelay: '1s' }}>💛</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="-z-10 absolute inset-0 bg-gradient-to-t from-gray-500/5 to-transparent blur-2xl rounded-3xl"></div>
            </div>
        </div>
    )
}