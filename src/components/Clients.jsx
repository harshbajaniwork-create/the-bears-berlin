"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { brandLogos } from "../constants";

const Clients = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  const animationRef = useRef();

  // Restore original spacious radius calculation with MacBook Air 15" fix
  const getRadius = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Mobile (very narrow): small but reasonable radius
    if (w < 640) {
      return Math.min(w * 0.4, h * 0.3);
    }

    // Tablet / small laptop: medium radius
    else if (w < 1024) {
      return Math.min(w * 0.45, h * 0.35);
    }

    // MacBook Air 15" specific fix (2880x1864) - prevent overflow
    else if (w >= 2560 && w <= 3000 && h >= 1600 && h <= 2000) {
      return Math.min(w * 0.42, h * 0.45); // Slightly more conservative for this resolution
    }

    // Medium laptop (up to 1440px wide): restore original generous size
    else if (w < 1440) {
      return Math.min(w * 0.6, h * 0.9);
    }

    // Very large screen (1440px+): restore original maximum radius
    else {
      return Math.min(w * 0.9, h * 0.9);
    }
  };

  const [radius, setRadius] = useState(getRadius());

  // Dynamic center positioning based on screen size
  const getCenterPosition = () => {
    if (typeof window === "undefined") return { centerX: 50, centerY: 100 };

    const w = window.innerWidth;
    const h = window.innerHeight;

    let centerX = 50;
    let centerY = 100;

    if (w < 640) {
      centerX = 50;
      centerY = 95;
    } else if (w < 1024) {
      centerX = 50;
      centerY = 98;
    } else if (w >= 2560 && w <= 3000 && h >= 1600 && h <= 2000) {
      // MacBook Air 15" specific adjustment
      centerX = 50;
      centerY = 105;
    } else {
      centerX = 50;
      centerY = 100;
    }

    return { centerX, centerY };
  };

  const { centerX, centerY } = getCenterPosition();

  // Track window size for responsive calculations
  useEffect(() => {
    const updateWindowSize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setWindowSize({
        width: newWidth,
        height: newHeight,
      });

      // Recalculate radius when window size changes
      setRadius(getRadius());
    };

    // Set initial size immediately to avoid the shrinking effect
    updateWindowSize();

    // Debounce resize events for better performance
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateWindowSize, 100);
    };

    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        // Adjust rotation speed based on screen size
        const rotationSpeed = windowSize.width < 640 ? 0.15 : 0.2;
        setRotation((prev) => prev + rotationSpeed);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, windowSize.width]);

  const getClientPosition = (index) => {
    const totalClients = brandLogos.length;
    const w = windowSize.width || 1200;
    const h = windowSize.height || 800;

    // Use full circle (360 degrees) for continuous looping
    const fullCircle = 2 * Math.PI;

    // Distribute clients evenly around the full circle
    const angleSpacing = fullCircle / totalClients;
    const baseAngle = index * angleSpacing;

    // Add rotation for spinning effect - convert to radians
    const angle = baseAngle + (rotation * Math.PI) / 180;

    // Calculate position using original method (no safety margins)
    const x = centerX + ((radius * Math.cos(angle)) / w) * 100;
    const y = centerY - ((radius * Math.sin(angle)) / h) * 100;

    // Normalize angle to 0-2π range for visibility calculations
    const normalizedAngle =
      ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Only show logos in the front half (top semicircle)
    const isVisible = normalizedAngle >= 0 && normalizedAngle <= Math.PI;

    // Calculate z-index based on position (front items have higher z-index)
    const zIndex = Math.floor(50 + 50 * Math.sin(normalizedAngle));

    // Calculate opacity for smooth fade in/out at edges
    let opacity = Math.max(0, Math.sin(normalizedAngle));

    // Apply edge fading for screen boundaries
    if (w >= 2560 && w <= 3000 && h >= 1600 && h <= 2000) {
      if (x < 5 || x > 95) {
        opacity *= 0.7; // Fade items near screen edges on MacBook Air 15"
      }
    } else {
      // For other screens, use original minimal edge fading
      if (w < 640) {
        if (x < 5 || x > 95) {
          opacity *= 0.7; // Fade items near screen edges on mobile
        }
      }
    }

    return { x, y, zIndex, opacity, angle, isVisible };
  };

  // Get responsive image sizes
  const getImageSize = () => {
    const w = windowSize.width;

    if (w < 640) {
      return "w-16 h-16"; // Mobile (320px - 639px)
    } else if (w < 768) {
      return "w-20 h-20"; // Large mobile (640px - 767px)
    } else if (w < 1024) {
      return "w-24 h-24"; // Tablet (768px - 1023px)
    } else if (w < 1280) {
      return "w-32 h-32"; // Small laptop (1024px - 1279px)
    } else if (w < 1440) {
      return "w-36 h-36"; // Standard laptop HD (1280px - 1439px)
    } else if (w < 1920) {
      return "w-40 h-40"; // Laptop Full HD (1440px - 1919px)
    } else if (w < 2560) {
      return "w-44 h-44"; // 2K/QHD screens (1920px - 2559px)
    } else if (w < 3440) {
      return "w-48 h-48"; // MacBook Air 15", 2K+ (2560px - 3439px)
    } else if (w < 3840) {
      return "w-52 h-52"; // Ultrawide 1440p (3440px - 3839px)
    } else if (w < 5120) {
      return "w-56 h-56"; // 4K/UHD screens (3840px - 5119px)
    } else {
      return "w-64 h-64"; // 5K+ and beyond (5120px+)
    }
  };

  // Get responsive text sizes
  const getTitleSize = () => {
    const w = windowSize.width;
    if (w < 640) {
      return "text-2xl";
    } else if (w < 768) {
      return "text-3xl";
    } else if (w < 1024) {
      return "text-4xl";
    } else if (w >= 2560 && w <= 3000) {
      return "text-5xl"; // MacBook Air 15"
    } else if (w < 1440) {
      return "text-5xl";
    } else {
      return "text-6xl";
    }
  };

  const getSubtitleSize = () => {
    const w = windowSize.width;
    if (w < 640) {
      return "text-sm";
    } else if (w < 768) {
      return "text-base";
    } else if (w < 1024) {
      return "text-lg";
    } else if (w >= 2560 && w <= 3000) {
      return "text-xl"; // MacBook Air 15"
    } else {
      return "text-xl";
    }
  };

  return (
    <div className="relative w-full h-screen -mb-16 overflow-hidden">
      {/* Client logos container */}
      <div className="absolute inset-0 md:mr-28 mr-0 z-50">
        {brandLogos.map((src, index) => {
          const position = getClientPosition(index);
          const isHovered = hoveredIndex === index;

          // Don't render completely invisible items or those out of bounds
          if (position.opacity < 0.01 || !position.isVisible) {
            return null;
          }

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                zIndex: position.zIndex,
                opacity: position.opacity,
              }}
              animate={{
                scale: isHovered ? (windowSize.width < 640 ? 1.15 : 1.3) : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setIsPaused(false);
              }}
            >
              <motion.div
                className={`relative ${getImageSize()} rounded-xl overflow-hidden bg-gradient-to-b from-[#806456] to-[#CDCCBA] dark:from-[#252525] dark:via-[#7E3F0F]/80 dark:to-[#7E3F0F] cursor-pointer flex items-center justify-center`}
                style={{
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  boxShadow: isHovered
                    ? windowSize.width < 640
                      ? "0 8px 16px rgba(0, 0, 0, 0.25), 0 4px 8px rgba(0, 0, 0, 0.15)"
                      : "0 16px 32px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2)"
                    : windowSize.width < 640
                    ? "0 2px 6px rgba(0, 0, 0, 0.1)"
                    : "0 4px 12px rgba(0, 0, 0, 0.1)",
                  rotateY: isHovered ? (windowSize.width < 640 ? 3 : 8) : 0,
                  rotateX: isHovered ? (windowSize.width < 640 ? 1 : 3) : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Client ${index + 1}`}
                  className="w-[110px] h-[80px] object-contain"
                  draggable={false}
                />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Hover ring effect */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-xl ring-2 md:ring-4 ring-blue-500/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center z-50 px-4 max-w-4xl mx-auto mt-28">
          <motion.h2
            className={`${getTitleSize()} font-bold text-black dark:text-[#CDCBBC] mb-2 md:mb-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            [OUR CLIENTS]
          </motion.h2>
          <motion.p
            className={`${getSubtitleSize()} font-medium text-black dark:text-[#CDCBBC] leading-relaxed`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ensuring roaring success for <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>30+ brands and counting.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
