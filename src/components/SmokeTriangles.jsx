import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Get safe initial position within screen bounds
const getSafePosition = (isMobile) => {
  const margin = isMobile ? 150 : 300;
  return {
    x: margin + Math.random() * (window.innerWidth - 2 * margin),
    y: margin + Math.random() * (window.innerHeight - 2 * margin),
  };
};

// Desktop triangles configuration
const trianglesDesktop = [
  { id: 0, width: 500, height: 800, blur: 90 },
  { id: 1, width: 500, height: 800, blur: 100 },
  { id: 2, width: 500, height: 800, blur: 95 },
  { id: 3, width: 500, height: 800, blur: 100 },
  { id: 4, width: 500, height: 800, blur: 90 },
];

// Mobile triangles configuration
const trianglesMobile = [
  { id: 0, width: 250, height: 400, blur: 50 },
  // { id: 1, width: 250, height: 400, blur: 60 },
  { id: 2, width: 250, height: 400, blur: 55 },
  // { id: 3, width: 250, height: 400, blur: 60 },
  { id: 4, width: 250, height: 400, blur: 50 },
];

const SmokeTriangles = () => {
  const containerRef = useRef();
  const triangleRefs = useRef([]);
  const animationsRef = useRef([]);
  const isMobile = window.innerWidth < 768;
  const triangleConfig = isMobile ? trianglesMobile : trianglesDesktop;

  // Physics parameters
  const physics = {
    baseSpeed: isMobile ? 0.3 : 0.5,
    minSpeed: isMobile ? 0.1 : 0.15,
    maxSpeed: isMobile ? 0.8 : 1.2,
    rotationForce: isMobile ? 0.8 : 1.2,
    dampening: 0.998,
    collisionRadius: isMobile ? 125 : 250,
    randomForce: isMobile ? 0.05 : 0.08,
    margin: isMobile ? 150 : 300,
  };

  // Initialize triangle physics data
  const triangleData = useRef(
    triangleConfig.map((triangle) => {
      const pos = getSafePosition(isMobile);
      return {
        ...triangle,
        x: pos.x,
        y: pos.y,
        vx: (Math.random() - 0.5) * physics.baseSpeed,
        vy: (Math.random() - 0.5) * physics.baseSpeed,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
      };
    })
  );

  // Collision detection between two triangles
  const checkTriangleCollision = (t1, t2, index1, index2) => {
    const dx = t1.x - t2.x;
    const dy = t1.y - t2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < physics.collisionRadius) {
      // Calculate collision response
      const angle = Math.atan2(dy, dx);
      const targetX = t2.x + Math.cos(angle) * physics.collisionRadius;
      const targetY = t2.y + Math.sin(angle) * physics.collisionRadius;

      // Separate triangles
      t1.x = targetX;
      t1.y = targetY;

      // Exchange velocities (simplified elastic collision)
      const tempVx = t1.vx;
      const tempVy = t1.vy;
      t1.vx = t2.vx * 0.6;
      t1.vy = t2.vy * 0.6;
      t2.vx = tempVx * 0.6;
      t2.vy = tempVy * 0.6;

      // Add rotation on collision
      t1.rotationSpeed += (Math.random() - 0.5) * physics.rotationForce;
      t2.rotationSpeed += (Math.random() - 0.5) * physics.rotationForce;
    }
  };

  // Wall collision detection with proper containment
  const checkWallCollision = (triangle) => {
    let collided = false;

    // Left wall
    if (triangle.x < physics.margin) {
      triangle.x = physics.margin;
      triangle.vx = Math.abs(triangle.vx) * 0.8; // Ensure positive velocity
      collided = true;
    }

    // Right wall
    if (triangle.x > window.innerWidth - physics.margin) {
      triangle.x = window.innerWidth - physics.margin;
      triangle.vx = -Math.abs(triangle.vx) * 0.8; // Ensure negative velocity
      collided = true;
    }

    // Top wall
    if (triangle.y < physics.margin) {
      triangle.y = physics.margin;
      triangle.vy = Math.abs(triangle.vy) * 0.8; // Ensure positive velocity
      collided = true;
    }

    // Bottom wall
    if (triangle.y > window.innerHeight - physics.margin) {
      triangle.y = window.innerHeight - physics.margin;
      triangle.vy = -Math.abs(triangle.vy) * 0.8; // Ensure negative velocity
      collided = true;
    }

    // Add rotation on wall collision
    if (collided) {
      triangle.rotationSpeed += (Math.random() - 0.5) * physics.rotationForce;
    }
  };

  // Keep triangles moving with minimum speed
  const maintainMovement = (triangle) => {
    const speed = Math.sqrt(
      triangle.vx * triangle.vx + triangle.vy * triangle.vy
    );

    // If moving too slowly, give it a boost
    if (speed < physics.minSpeed) {
      const angle = Math.random() * Math.PI * 2;
      triangle.vx = Math.cos(angle) * physics.baseSpeed;
      triangle.vy = Math.sin(angle) * physics.baseSpeed;
    }

    // If moving too fast, slow it down
    if (speed > physics.maxSpeed) {
      const ratio = physics.maxSpeed / speed;
      triangle.vx *= ratio;
      triangle.vy *= ratio;
    }
  };

  // Animation loop
  const animate = () => {
    triangleData.current.forEach((triangle, index) => {
      // Add continuous random movement to prevent sticking
      triangle.vx += (Math.random() - 0.5) * physics.randomForce;
      triangle.vy += (Math.random() - 0.5) * physics.randomForce;

      // Apply velocity
      triangle.x += triangle.vx;
      triangle.y += triangle.vy;

      // Apply rotation
      triangle.rotation += triangle.rotationSpeed;
      triangle.rotationSpeed *= physics.dampening;

      // Keep triangles moving and within speed limits
      maintainMovement(triangle);

      // Check wall collisions first
      checkWallCollision(triangle);

      // Check triangle-to-triangle collisions
      for (let i = index + 1; i < triangleData.current.length; i++) {
        checkTriangleCollision(triangle, triangleData.current[i], index, i);
      }

      // Apply light dampening to velocity (less aggressive)
      triangle.vx *= physics.dampening;
      triangle.vy *= physics.dampening;

      // Update DOM element
      if (triangleRefs.current[index]) {
        gsap.set(triangleRefs.current[index], {
          x: triangle.x,
          y: triangle.y,
          rotation: triangle.rotation,
        });
      }
    });

    requestAnimationFrame(animate);
  };

  useGSAP(
    () => {
      // Initial setup
      triangleRefs.current.forEach((ref, index) => {
        if (ref) {
          const triangle = triangleData.current[index];
          gsap.set(ref, {
            x: triangle.x,
            y: triangle.y,
            rotation: triangle.rotation,
            transformOrigin: "center center",
          });
        }
      });

      // Start animation loop
      animate();
    },
    { scope: containerRef }
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Update triangle positions to stay within new boundaries
      triangleData.current.forEach((triangle) => {
        const newMargin = window.innerWidth < 768 ? 150 : 300;

        // Constrain to new screen size
        triangle.x = Math.max(
          newMargin,
          Math.min(triangle.x, window.innerWidth - newMargin)
        );
        triangle.y = Math.max(
          newMargin,
          Math.min(triangle.y, window.innerHeight - newMargin)
        );

        // Give triangles a small velocity boost after resize to prevent sticking
        if (Math.abs(triangle.vx) < 0.5)
          triangle.vx = (Math.random() - 0.5) * 1.5;
        if (Math.abs(triangle.vy) < 0.5)
          triangle.vy = (Math.random() - 0.5) * 1.5;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Desktop version - hidden on mobile */}
      <div className="hidden md:block pointer-events-none fixed inset-0 overflow-hidden z-0">
        {!isMobile &&
          triangleConfig.map((triangle, i) => (
            <div
              key={`desktop-${i}`}
              ref={(el) => (triangleRefs.current[i] = el)}
              style={{
                position: "absolute",
                width: triangle.width,
                height: triangle.height,
                background: "var(--triangle)",
                clipPath: "polygon(50% 60%, 0% 100%, 100% 100%)",
                filter: `blur(${triangle.blur}px)`,
                transform: "translate(-50%, -50%)",
                opacity: 1,
              }}
            />
          ))}
      </div>

      {/* Mobile version - visible only on mobile */}
      <div className="block md:hidden pointer-events-none fixed inset-0 overflow-hidden z-0">
        {isMobile &&
          triangleConfig.map((triangle, i) => (
            <div
              key={`mobile-${i}`}
              ref={(el) => (triangleRefs.current[i] = el)}
              style={{
                position: "absolute",
                width: triangle.width,
                height: triangle.height,
                background: "var(--triangle)",
                clipPath: "polygon(50% 60%, 0% 100%, 100% 100%)",
                filter: `blur(${triangle.blur}px)`,
                transform: "translate(-50%, -50%)",
                opacity: 1,
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
