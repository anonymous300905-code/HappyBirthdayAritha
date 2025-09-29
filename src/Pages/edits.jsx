import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Edit } from 'lucide-react';
import edit1 from '../assets/Edit1.mp4'
import edit2 from '../assets/Edit2.mp4'

export default function VideoShowcase() {
  const [videos, setVideos] = useState([
    { id: 1, playing: false, muted: true, title: "Edit #1", currentTime: 0, duration: 0 },
    { id: 2, playing: false, muted: true, title: "Edit #2", currentTime: 0, duration: 0 }
  ]);
  
  const videoRefs = useRef([]);

  const handleTimeUpdate = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      setVideos(prev => prev.map((v, i) => 
        i === index ? { ...v, currentTime: video.currentTime, duration: video.duration } : v
      ));
    }
  };

  const handleLoadedMetadata = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      setVideos(prev => prev.map((v, i) => 
        i === index ? { ...v, duration: video.duration } : v
      ));
    }
  };

  const handleSeek = (index, e) => {
    const video = videoRefs.current[index];
    const timeline = e.currentTarget;
    const rect = timeline.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (video) {
      video.currentTime = pos * video.duration;
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        // Pause all other videos first
        videoRefs.current.forEach((v, i) => {
          if (i !== index && v) {
            v.pause();
          }
        });
        video.play();
        setVideos(prev => prev.map((v, i) => 
          i === index ? { ...v, playing: true } : { ...v, playing: false }
        ));
      } else {
        video.pause();
        setVideos(prev => prev.map((v, i) => 
          i === index ? { ...v, playing: false } : v
        ));
      }
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setVideos(prev => prev.map((v, i) => 
        i === index ? { ...v, muted: video.muted } : v
      ));
    }
  };

  const toggleFullscreen = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 py-8 md:py-12 min-h-screen"
        id='edits'
    >
      {/* SVG Filters */}
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

      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-white text-4xl md:text-6xl tracking-tight">
            My <span className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">Video Edits</span>
          </h1>
          <p className="text-gray-400 text-lg">Whenever I felt low i just edit your videos . I know thats not right without a prior knowledge of you but still i wish to make this..</p>
        </div>

        {/* Video Containers Grid */}
        <div className="gap-6 md:gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl hover:shadow-purple-500/20 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 transform"
            >
              {/* Video Container */}
              <div className="relative bg-black aspect-video">
                <video
                  ref={el => videoRefs.current[index] = el}
                  className= {`w-full h-full object-contain ${index === 0 ? '-rotate-90' : " "}`  }
                  loop
                  playsInline
                  onTimeUpdate={() => handleTimeUpdate(index)}
                  onLoadedMetadata={() => handleLoadedMetadata(index)}
           >
                  <source src={`${index === 0 ? edit1 : edit2}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Play/Pause Button Overlay */}
                {/* Play/Pause Button Overlay - Only shown when paused */}
                {!video.playing && (
                  <button
                    onClick={() => togglePlay(index)}
                    className="absolute inset-0 flex justify-center items-center bg-black/20"
                  >
                    <div className="flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full w-20 h-20 hover:scale-110 transition-all">
                      <Play className="ml-1 w-10 h-10 text-white" fill="white" />
                    </div>
                  </button>
                )}
                
                {/* Invisible click area when playing - allows pausing */}
                {video.playing && (
                  <button
                    onClick={() => togglePlay(index)}
                    className="absolute inset-0 bg-transparent"
                    aria-label="Pause video"
                  />
                )}
              </div>

              {/* Controls Bar */}
              <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/90 to-transparent p-4">
                {/* Timeline */}
                <div className="mb-3">
                  <div 
                    className="group/timeline relative bg-white/20 rounded-full w-full h-1.5 cursor-pointer"
                    onClick={(e) => handleSeek(index, e)}
                  >
                    <div 
                      className="relative bg-gradient-to-r from-purple-500 to-pink-600 rounded-full h-full"
                      style={{ width: `${(video.currentTime / video.duration) * 100 || 0}%` }}
                    >
                      <div className="top-1/2 right-0 absolute bg-white opacity-0 group-hover/timeline:opacity-100 shadow-lg rounded-full w-3 h-3 transition-opacity -translate-y-1/2"></div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-1 text-gray-400 text-xs">
                    <span>{formatTime(video.currentTime)}</span>
                    <span>{formatTime(video.duration)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-white text-lg">{video.title}</h3>
                  
                 
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="top-0 right-0 absolute bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full w-32 h-32 transition-transform -translate-y-16 translate-x-16 group-hover:-translate-y-12 group-hover:translate-x-12 duration-500 transform"></div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
      </div>
    </div>
       
       
  );
}