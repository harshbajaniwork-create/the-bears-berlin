import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MotionGallery = ({ videoIds = [] }) => {
  const containerRef = useRef();
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // GSAP scroll animation for gallery items
    gsap.fromTo(
      ".motion-gallery-item",
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleVideoClick = (videoId, index) => {
    setSelectedVideo({ videoId, index });
  };

  const closeDetail = () => {
    setSelectedVideo(null);
  };

  const handleNext = () => {
    const nextIndex = (selectedVideo.index + 1) % videoIds.length;
    setSelectedVideo({ videoId: videoIds[nextIndex], index: nextIndex });
  };

  const handlePrevious = () => {
    const prevIndex =
      (selectedVideo.index - 1 + videoIds.length) % videoIds.length;
    setSelectedVideo({ videoId: videoIds[prevIndex], index: prevIndex });
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Header */}
      <motion.div
        className="flex items-center justify-between mb-12 pb-6 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {videoIds.length} {videoIds.length === 1 ? "video" : "videos"}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {!selectedVideo ? (
          /* Grid View */
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {videoIds.map((videoId, index) => (
                <motion.div
                  key={`${videoId}-${index}`}
                  className="motion-gallery-item group cursor-pointer"
                  onClick={() => handleVideoClick(videoId, index)}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    {/* Video Preview - Scaled iframe to fill container */}
                    <div className="relative">
                      <div
                        className="w-full bg-gray-200 dark:bg-gray-800"
                        style={{
                          aspectRatio: "9/16",
                        }}
                      >
                        <iframe
                          src={`https://customer-64sz73htfhb823gb.cloudflarestream.com/${videoId}/iframe?muted=true&preload=true&loop=true&autoplay=true&controls=false`}
                          className="w-full h-full"
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen
                        />
                      </div>
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                        Video
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-white dark:bg-black flex items-center justify-center p-4 md:p-8"
          >
            {/* Close button */}
            <button
              onClick={closeDetail}
              className="absolute top-20 right-8 z-10 w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="max-w-7xl w-full h-full flex items-center justify-center">
              {/* Video Content with Navigation */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 z-10 w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                >
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Video Container - Flexible to fit any aspect ratio */}
                <div className="w-full h-full flex items-center justify-center px-20">
                  <div
                    className="relative w-full max-w-5xl flex items-center justify-center"
                    style={{ maxHeight: "85vh" }}
                  >
                    <iframe
                      src={`https://customer-64sz73htfhb823gb.cloudflarestream.com/${selectedVideo.videoId}/iframe?muted=false&preload=true&loop=true&autoplay=true&controls=true`}
                      className="w-full rounded-2xl shadow-2xl"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                      style={{
                        aspectRatio: "16/9",
                        maxHeight: "85vh",
                      }}
                    />
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-10 w-12 h-12 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                >
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Video Counter */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg">
                  {selectedVideo.index + 1} / {videoIds.length}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MotionGallery;
