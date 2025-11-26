import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeDModelCard from "./ThreeDModelCard";

gsap.registerPlugin(ScrollTrigger);

const ProfessionalGallery = ({ items = [] }) => {
  const containerRef = useRef();
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // 'grid', 'detail'
  const [filter, setFilter] = useState("all"); // 'all', 'images', 'models', 'videos'

  useEffect(() => {
    // GSAP scroll animation for gallery items
    gsap.fromTo(
      ".gallery-item",
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
  }, [filter]);

  const filteredItems = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "images") return item.type === "image";
    if (filter === "models") return item.type === "model";
    if (filter === "videos") return item.type === "video";
    return true;
  });

  const filterCounts = {
    all: items.length,
    images: items.filter((item) => item.type === "image").length,
    models: items.filter((item) => item.type === "model").length,
    videos: items.filter((item) => item.type === "video").length,
  };

  const handleItemClick = (item, index) => {
    setSelectedItem({ ...item, index });
    setViewMode("detail");
  };

  const closeDetail = () => {
    setSelectedItem(null);
    setViewMode("grid");
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Filter Navigation */}
      <motion.div
        className="flex flex-wrap items-center justify-between mb-12 pb-6 border-b border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap gap-4 mb-4 sm:mb-0">
          {[
            { key: "all", label: "All Work" },
            { key: "images", label: "Images" },
            { key: "models", label: "3D Models" },
            { key: "videos", label: "Videos" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === key
                  ? "bg-black dark:bg-white text-white dark:text-black"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {label} ({filterCounts[key]})
            </button>
          ))}
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {viewMode === "grid" ? (
          /* Grid View */
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Clean Masonry Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.src || item.model}-${index}`}
                  className="gallery-item group cursor-pointer break-inside-avoid mb-8"
                  onClick={() => handleItemClick(item, index)}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    {/* Content */}
                    {item.type === "image" && (
                      <div className="relative">
                        <img
                          src={item.src}
                          alt={item.alt || "Gallery image"}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}

                    {item.type === "video" && item.cloudflareStreamId && (
                      <div className="relative">
                        <div
                          className="w-full bg-gray-200 dark:bg-gray-800"
                          style={{
                            aspectRatio: item.aspectRatio || "16/9",
                            minHeight: "300px",
                          }}
                        >
                          <iframe
                            src={`https://customer-64sz73htfhb823gb.cloudflarestream.com/${item.cloudflareStreamId}/iframe?muted=true&preload=true&loop=true&autoplay=true&controls=false`}
                            className="w-full h-full"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen
                          />
                        </div>
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          Video
                        </div>
                      </div>
                    )}

                    {item.type === "model" && (
                      <div className="relative">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                          <ThreeDModelCard
                            modelKey={item.model}
                            scale={item.scale || 0.02}
                            height={400}
                          />
                        </div>
                        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          3D Model
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                          Drag to interact
                        </div>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Detail View */
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

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                {selectedItem?.type === "image" && (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full h-auto rounded-2xl shadow-2xl max-h-[70vh] object-contain"
                  />
                )}

                {selectedItem?.type === "model" && (
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-2xl">
                    <ThreeDModelCard
                      modelKey={selectedItem.model}
                      scale={selectedItem.scale}
                      height={600}
                    />
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                      Drag to interact
                    </div>
                  </div>
                )}

                {selectedItem?.type === "video" &&
                  selectedItem.cloudflareStreamId && (
                    <div className="video-detail-container rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 mx-auto">
                      <div
                        className="w-full h-full"
                        style={{
                          aspectRatio: 16 / 11,
                        }}
                      >
                        <iframe
                          src={`https://customer-64sz73htfhb823gb.cloudflarestream.com/${selectedItem.cloudflareStreamId}/iframe?muted=false&preload=true&loop=true&autoplay=true&controls=true`}
                          className="w-full h-full"
                          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedItem?.type === "model"
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                          : selectedItem?.type === "video"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      }`}
                    >
                      {selectedItem?.type === "model"
                        ? "3D Model"
                        : selectedItem?.type === "video"
                        ? "Video"
                        : "Image"}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedItem?.index + 1} of {items.length}
                    </span>
                  </div>

                  <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
                    {selectedItem?.alt ||
                      `Creative Work ${selectedItem?.index + 1}`}
                  </h2>

                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedItem?.type === "model"
                      ? "Our 3D models are made to be experienced. Step closer, explore every angle. Don’t worry, they don’t bite. We just make them so real it’s hard to believe they’re not."
                      : selectedItem?.type === "video"
                      ? "Our 3D videos help brands express what words can’t. Visually striking and immersive, each piece is built to move people. And maybe turn a few heads."
                      : "Sometimes an idea just needs to be seen. We create hyper-real 3D renders that help brands visualize what’s next, or bring what already exists to life in the digital jungle. Detailed, precise, and so lifelike you might want to reach out and touch them."}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      const nextIndex = (selectedItem.index + 1) % items.length;
                      setSelectedItem({
                        ...items[nextIndex],
                        index: nextIndex,
                      });
                    }}
                    className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
                  >
                    Next Project
                  </button>

                  <button
                    onClick={closeDetail}
                    className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    Back to Gallery
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfessionalGallery;
