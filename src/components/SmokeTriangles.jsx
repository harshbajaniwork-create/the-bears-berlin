import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Desktop triangles configuration with fixed positions
const trianglesDesktop = [
  {
    id: 0,
    width: 400,
    height: 346, // height = width * Math.sqrt(3)/2 for equilateral
    blur: 80,
    position: { x: "8%", y: "1%" },
    range: 150,
    rotation: 35,
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Equilateral pointing up
    zIndex: 1,
  },
  {
    id: 1,
    width: 450,
    height: 390,
    blur: 90,
    position: { x: "8%", y: "60%" },
    range: 160,
    rotation: -25,
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Equilateral pointing up
    zIndex: 2,
  },
  {
    id: 2,
    width: 500,
    height: 433,
    blur: 95,
    position: { x: "70%", y: "1%" },
    range: 180,
    rotation: 10,
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Equilateral pointing up
    zIndex: 3,
  },
  {
    id: 3,
    width: 420,
    height: 364,
    blur: 85,
    position: { x: "50%", y: "8%" },
    range: 120,
    rotation: -70,
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Equilateral pointing up
    zIndex: 4,
  },
  {
    id: 4,
    width: 480,
    height: 416,
    blur: 88,
    position: { x: "90%", y: "50%" },
    range: 170,
    rotation: 190,
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Equilateral pointing up
    zIndex: 5,
  },
];

// Mobile triangles configuration with fixed positions
const trianglesMobile = [
  {
    id: 0,
    width: 350,
    height: 303,
    blur: 45,
    position: { x: "15%", y: "12%" },
    range: 80,
    rotation: 50,
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Equilateral pointing up
    zIndex: 1,
  },
  {
    id: 2,
    width: 250,
    height: 217,
    blur: 50,
    position: { x: "50%", y: "48%" },
    range: 100,
    rotation: 0,
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Equilateral pointing up
    zIndex: 2,
  },
  {
    id: 4,
    width: 350,
    height: 303,
    blur: 48,
    position: { x: "10%", y: "62%" },
    range: 90,
    rotation: 140,
    clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Equilateral pointing up
    zIndex: 3,
  },
];

const SmokeTriangles = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [animationKeys, setAnimationKeys] = useState([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const triangleConfig = isMobile ? trianglesMobile : trianglesDesktop;

  // Generate unique animation keys on mount
  useEffect(() => {
    setAnimationKeys(triangleConfig.map(() => Math.random()));
  }, [triangleConfig.length]);

  // Generate random movement path within range
  const generateFloatingAnimation = (range, baseRotation) => {
    return {
      x: [
        0,
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range,
        0,
      ],
      y: [
        0,
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range,
        0,
      ],
      rotate: [
        baseRotation,
        baseRotation + (Math.random() - 0.5) * 40,
        baseRotation + (Math.random() - 0.5) * 40,
        baseRotation + (Math.random() - 0.5) * 40,
        baseRotation + (Math.random() - 0.5) * 40,
        baseRotation,
      ],
    };
  };

  return (
    <div>
      {/* Desktop version - hidden on mobile */}
      <div className="hidden md:block pointer-events-none fixed inset-0 overflow-hidden z-0">
        {!isMobile &&
          triangleConfig.map((triangle, index) => (
            <motion.div
              key={`desktop-${triangle.id}-${animationKeys[index]}`}
              style={{
                position: "absolute",
                left: triangle.position.x,
                top: triangle.position.y,
                width: triangle.width,
                height: triangle.height,
                background: "var(--triangle)",
                clipPath: triangle.clipPath,
                filter: `blur(${triangle.blur}px)`,
                transformOrigin: "center center",
                zIndex: triangle.zIndex,
              }}
              initial={{
                x: 0,
                y: 0,
                rotate: triangle.rotation,
              }}
              animate={generateFloatingAnimation(
                triangle.range,
                triangle.rotation
              )}
              transition={{
                duration: 25 + Math.random() * 15,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              }}
            />
          ))}
      </div>

      {/* Mobile version - visible only on mobile */}
      <div className="block md:hidden pointer-events-none fixed inset-0 overflow-hidden z-0">
        {isMobile &&
          triangleConfig.map((triangle, index) => (
            <motion.div
              key={`mobile-${triangle.id}-${animationKeys[index]}`}
              style={{
                position: "absolute",
                left: triangle.position.x,
                top: triangle.position.y,
                width: triangle.width,
                height: triangle.height,
                background: "var(--triangle)",
                clipPath: triangle.clipPath,
                filter: `blur(${triangle.blur}px)`,
                transformOrigin: "center center",
                zIndex: triangle.zIndex,
              }}
              initial={{
                x: 0,
                y: 0,
                rotate: triangle.rotation,
              }}
              animate={generateFloatingAnimation(
                triangle.range,
                triangle.rotation
              )}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              }}
            />
          ))}
      </div>

      {/* Glassmorphism effect - works for both desktop and mobile */}
      <div className="pointer-events-none fixed inset-0 z-10 backdrop-blur-sm bg-[var(--glass-bg)] bg-opacity-20"></div>
    </div>
  );
};

export default SmokeTriangles;
