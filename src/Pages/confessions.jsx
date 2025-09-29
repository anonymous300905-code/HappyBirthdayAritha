import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Confessions() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [animating, setAnimating] = useState(false);
  const contentRef = useRef(null);

  // Sample letter content - replace with your actual content
  const letterContent = {
    header: {
      date: "September 30, 2025",
      from: "Anonymous",
      to: "Aritha",
      subject: "Birthday Wishes & Confession"
    },
    body: [
      "Dear Aritha,",
      "I am someone from somewhere in your college. First of all, I wish you a very Happy Birthday! Since your teenage years are over, I wanted to make this one special for you. But since we don't usually talk, it would feel awkward if I suddenly made a move towards you. So instead, I made this website and prepared a small present for you.",
      "Yes, there is a present as well—it's placed on the bench where you sat yesterday in class. If your class has been shifted today, don't worry, I'll place the gift on the first bench, since I've seen you sit there many times.",
      "Don't worry—I won't try to use this as a way to talk to you or to connect with you. I just wanted to do something for you, without mentioning my name or revealing who I am. I'll just keep admiring you from a distance, like I've always done.",
      "Since today is your birthday, take a break from responsibilities, commitments, and all the worries in your mind. Spend time with your loved ones, talk with your parents, go wherever you like. It's a holiday too, so no need to worry about academics. Go to the temple or watch a movie—just do whatever makes you happy. Don't let sad thoughts take over today. Make this birthday a remarkable one, because it's your first step into adulthood. Until yesterday you were a teenager, but now you've stepped into a new phase of life—so make it count.",
      "I've seen all your YouTube videos (I've probably watched those three videos more times than I can count). They're amazing, and the content is really good. If you improve your audio quality, I'm sure your videos will reach a much wider audience someday. I'll be looking forward to seeing more content from you, girl!",
      "About your Talkathon speech—it was an amazing topic, honestly. I've watched it many times. You've got talent, and with more practice you'll only keep getting better. One day, I truly believe you'll become a TED Talk speaker or even something greater. Even if no one is there to support you or feel proud of you, I will always be proud and silently supporting you. If you ever participate in any event as a speaker, please share a video of it—I'll be there watching it, again and again.",
      "I've been admiring you since our second semester. I don't know if you know me or not, but I remember clearly when I saw you for the first time—it was during the second Internal Assessment English exam. I was sitting in the 509 in CITAR, and you were talking to the staff in charge of my class before going to lunch. That moment has stayed with me. Since that day, I've admired you deeply.",
      "What started as just a crush has now turned into something I can't even express in words. I've felt worried whenever you weren't well, and I've been happy whenever you were happy. I don't know why—it's just the way it is.",
      "There is one point that made me fall harder for you. I was working at a company last year, and because of that, my LinkedIn profile used to appear on Google when the company was searched. But here’s the twist — instead of my photo, your image showed up on my profile. I don’t know how, but to me, it felt like a sign that you’re the one. Still, I never approached you.",
      "Next month, it will be three years since then. And yet, I never approached you, even though I wanted to. I've always stopped myself because I didn't want to disturb you. I know you have big dreams and goals, and I believe you should run towards them without any distractions—whether positive or negative. So, don't worry, I won't disturb you. I just wanted to tell you all this. Even though I wish I could talk with you and spend time with you, I've accepted that it won't happen. Still, I'm happy as long as you're happy, just like you are now.",
      "Once again, Happy Birthday to you, Aritha",
      "With admiration,",
      "Someone who cares"
    ]
  };

  useEffect(() => {
    paginateContent();
    window.addEventListener('resize', paginateContent);
    return () => window.removeEventListener('resize', paginateContent);
  }, []);

  const paginateContent = () => {
    if (!contentRef.current) return;

    const pageHeight = 600; // Approximate height of one page
    const tempPages = [];
    let currentPageContent = [];
    let currentHeight = 0;

    // Add header to first page
    const headerHeight = 120;
    currentHeight += headerHeight;

    letterContent.body.forEach((paragraph, index) => {
      const paragraphHeight = 60; // Approximate height per paragraph

      if (currentHeight + paragraphHeight > pageHeight) {
        tempPages.push([...currentPageContent]);
        currentPageContent = [paragraph];
        currentHeight = paragraphHeight;
      } else {
        currentPageContent.push(paragraph);
        currentHeight += paragraphHeight;
      }
    });

    if (currentPageContent.length > 0) {
      tempPages.push(currentPageContent);
    }

    setPages(tempPages);
    setCurrentPage(0);
  };

  const changePage = (newPage) => {
    if (animating) return;

    setAnimating(true);
    setDirection(newPage > currentPage ? -1 : 1);
    setCurrentPage(newPage);

    // Reset animation state after transition completes
    setTimeout(() => {
      setAnimating(false);
      setDirection(0);
    }, 100);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      changePage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      changePage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-8 md:py-12 min-h-screen"
        id='confessions'>
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

      <div className="mx-auto max-w-4xl">
        {/* Page Counter */}
        <div className="mb-6 text-center">
          <span className="text-gray-400 text-sm">
            Page {currentPage + 1} of {pages.length}
          </span>
        </div>

        {/* Letter Container */}
        <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl border border-gray-700 rounded-lg overflow-hidden" style={{ minHeight: '700px' }}>
          {/* Glowing accent effects */}
          <div className="top-10 right-20 absolute bg-blue-500 opacity-10 blur-3xl rounded-full w-32 h-32"></div>
          <div className="bottom-20 left-16 absolute bg-purple-500 opacity-10 blur-3xl rounded-full w-40 h-40"></div>
          <div className="top-1/2 left-1/2 absolute bg-cyan-500 opacity-5 blur-3xl rounded-full w-64 h-64"></div>

          {/* Letter Content */}
          <div
            ref={contentRef}
            className={`relative p-12 md:p-16 transition-all duration-300 ease-in-out transform ${animating
                ? direction < 0
                  ? 'translate-x-[-100vw] opacity-0'
                  : 'translate-x-[100vw] opacity-0'
                : 'translate-x-0 opacity-100'
              }`}>
            {/* Decorative Birthday Elements */}
            <div className="top-0 left-0 absolute opacity-20 w-full h-full overflow-hidden pointer-events-none">
              <div className="-top-4 -left-4 absolute bg-pink-400 blur-xl rounded-full w-24 h-24"></div>
              <div className="top-1/4 -right-4 absolute bg-purple-400 blur-xl rounded-full w-20 h-20"></div>
              <div className="bottom-1/4 -left-4 absolute bg-blue-400 blur-xl rounded-full w-16 h-16"></div>
              <div className="-right-4 -bottom-4 absolute bg-pink-400 blur-xl rounded-full w-24 h-24"></div>
            </div>

            {/* Header - Only on first page */}
            {currentPage === 0 && (
              <div className="relative mb-8 pb-6 border-purple-500/30 border-b-2 transition-all duration-500">
                <div className="mb-4 text-purple-300 text-sm text-right italic">
                  {letterContent.header.date}
                </div>
                <div className="mb-4">
                  <div className="font-semibold text-pink-200">From:</div>
                  <div className="font-light text-purple-200">{letterContent.header.from}</div>
                </div>
                <div className="mb-4">
                  <div className="font-semibold text-pink-200">To:</div>
                  <div className="font-light text-purple-200">{letterContent.header.to}</div>
                </div>
                <div>
                  <div className="font-semibold text-pink-200">Subject:</div>
                  <div className="font-light text-purple-200">{letterContent.header.subject}</div>
                </div>

                {/* Birthday Greeting */}
                <div className="-top-5 -right-2 absolute transform">
                  <div className="font-dancing text-pink-400 text-xs">Happy Birthday! 🎉</div>
                </div>
              </div>
            )}

            {/* Body Content */}
            <div className="relative space-y-4 font-light text-purple-100 leading-relaxed transition-all duration-500">
              {pages[currentPage]?.map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Page watermark */}
            <div className="right-12 bottom-8 absolute font-light text-purple-400/50 text-xs transition-all duration-300">
              {currentPage + 1}/{pages.length}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`p-2 rounded-full transition-all hover:bg-gray-800/50 ${currentPage === 0
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-purple-400 hover:text-pink-400'
                }`}
            >
              <ChevronLeft size={24} />
            </button>
            <span className={`text-xs ${currentPage === 0 ? 'text-gray-600' : 'text-purple-400'}`}>
              Previous
            </span>
          </div>

          <div className="flex gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => index !== currentPage && changePage(index)}
                className={`w-6 h-6 rounded-full transition-all flex items-center justify-center text-sm ${currentPage === index
                    ? 'bg-purple-400 text-white'
                    : 'bg-gray-600/50 hover:bg-purple-400/50 text-gray-300 hover:text-white'
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-1">
            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className={`p-2 rounded-full transition-all hover:bg-gray-800/50 ${currentPage === pages.length - 1
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-purple-400 hover:text-pink-400'
                }`}
            >
              <ChevronRight size={24} />
            </button>
            <span className={`text-xs ${currentPage === pages.length - 1 ? 'text-gray-600' : 'text-purple-400'}`}>
              Next
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}