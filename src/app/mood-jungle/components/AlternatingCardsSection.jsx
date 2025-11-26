import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AlternatingCardsSection = ({ items }) => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const fireflyRefs = useRef([]);
  const viewAllButtonRef = useRef(null);

  // ensure ref arrays are fresh
  cardRefs.current = [];
  fireflyRefs.current = [];

  const HEADER_HEIGHT = 72;

  // Generate random positions for fireflies
  const getRandomPosition = () => ({
    x: Math.random() * 80 + 10, // 10% to 90% of screen width
    y: Math.random() * 60 + 20, // 20% to 80% of screen height
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !items?.length) return;

    // Store initial random positions for each firefly
    const fireflyPositions = items.map(() => getRandomPosition());

    // Set initial state for all cards (hidden)
    items.forEach((_, i) => {
      const card = cardRefs.current[i];
      const firefly = fireflyRefs.current[i];

      if (!card || !firefly) return;

      // Hide cards initially
      gsap.set(card, {
        clipPath: "polygon(0% at 50% 50%)",
        opacity: 0,
        visibility: "hidden",
        scale: 0,
      });

      // Set fireflies to their random positions
      const pos = fireflyPositions[i];
      gsap.set(firefly, {
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        opacity: 0.8,
        scale: 1,
        visibility: "visible",
      });

      // Create smoother floating animation for each firefly
      const fireflyTl = gsap.timeline({ repeat: -1, yoyo: true });
      fireflyTl
        .to(firefly, {
          x: gsap.utils.random(-25, 25),
          y: gsap.utils.random(-15, 15),
          duration: gsap.utils.random(4, 7), // Slower, more natural movement
          ease: "sine.inOut", // Much smoother easing
        })
        .to(
          firefly,
          {
            opacity: gsap.utils.random(0.5, 1),
            scale: gsap.utils.random(0.9, 1.1), // More subtle scale changes
            duration: gsap.utils.random(2, 4), // Slower opacity changes
            ease: "sine.inOut", // Smoother easing
          },
          "<"
        );
    });

    const totalVh = items.length * 150; // Increased for smoother pacing
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut" }, // Gentler default easing
      scrollTrigger: {
        trigger: container,
        start: `top ${HEADER_HEIGHT}px`,
        end: `+=${totalVh}vh`,
        scrub: 5.5, // Much smoother scrub - higher value = more lag/smoothness
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true, // Helps with responsiveness
        refreshPriority: -1, // Lower priority for smoother performance
      },
    });

    const CALL_DUR = 2.5; // Slower firefly journey to center
    const TRANSFORM_DUR = 1.8; // Slower transformation
    const HOLD_DUR = 1.5; // Longer hold time
    const RETURN_DUR = 1.5; // Slower return transformation
    const RELEASE_DUR = 2.0; // Slower return journey
    const SPACING = 0.8; // Overlap between sequences for smoother transitions

    items.forEach((_, i) => {
      const card = cardRefs.current[i];
      const firefly = fireflyRefs.current[i];
      if (!card || !firefly) return;

      const sequenceStart =
        i * (CALL_DUR + TRANSFORM_DUR + HOLD_DUR + RETURN_DUR - SPACING);

      // Phase 1: Call the firefly to center (much smoother)
      tl.to(
        firefly,
        {
          left: "50%",
          top: "50%",
          x: 0,
          y: 0,
          scale: 1.5,
          opacity: 1,
          duration: CALL_DUR,
          ease: "power1.inOut", // Gentler easing
        },
        sequenceStart
      );

      // Phase 2: Transform firefly into card (slower and smoother)
      tl.to(
        firefly,
        {
          scale: 0,
          opacity: 0,
          duration: TRANSFORM_DUR * 0.4, // Longer fade out
          ease: "power1.in", // Gentler easing
        },
        sequenceStart + CALL_DUR
      )
        .set(
          card,
          {
            visibility: "visible",
          },
          sequenceStart + CALL_DUR + TRANSFORM_DUR * 0.4
        )
        .to(
          card,
          {
            clipPath: "polygon(50% at 50% 50%)",
            opacity: 1,
            scale: 1,
            duration: TRANSFORM_DUR * 0.6, // Longer grow animation
            ease: "power1.out", // Much gentler back effect
          },
          sequenceStart + CALL_DUR + TRANSFORM_DUR * 0.4
        );

      // Phase 3: Hold the card visible with very subtle pulse
      tl.to(
        card,
        {
          scale: 1.02, // Much more subtle
          duration: HOLD_DUR * 0.5,
          ease: "power1.inOut",
          yoyo: true,
          repeat: 1,
        },
        sequenceStart + CALL_DUR + TRANSFORM_DUR
      );

      // Phase 4: Transform card back to firefly (smoother)
      tl.to(
        card,
        {
          clipPath: "polygon(0% at 50% 50%)",
          opacity: 0,
          scale: 0,
          duration: RETURN_DUR * 0.9, // Slower shrink
          ease: "power1.in", // Gentler easing
        },
        sequenceStart + CALL_DUR + TRANSFORM_DUR + HOLD_DUR
      )
        .set(
          card,
          {
            visibility: "hidden",
          },
          sequenceStart + CALL_DUR + TRANSFORM_DUR + HOLD_DUR + RETURN_DUR * 0.6
        )
        .to(
          firefly,
          {
            scale: 1,
            opacity: 0.8,
            duration: RETURN_DUR * 0.4, // Smoother reappear
            ease: "power1.out",
          },
          sequenceStart + CALL_DUR + TRANSFORM_DUR + HOLD_DUR + RETURN_DUR * 0.6
        );

      // Phase 5: Release firefly back to random roaming (much smoother)
      const newPos = getRandomPosition();
      tl.to(
        firefly,
        {
          left: `${newPos.x}%`,
          top: `${newPos.y}%`,
          x: gsap.utils.random(-15, 15), // Less random movement
          y: gsap.utils.random(-10, 10), // Less random movement
          scale: gsap.utils.random(0.9, 1.1), // More subtle scale variation
          opacity: gsap.utils.random(0.6, 0.9), // Less opacity variation
          duration: RELEASE_DUR,
          ease: "power1.inOut", // Much gentler release
        },
        sequenceStart + CALL_DUR + TRANSFORM_DUR + HOLD_DUR + RETURN_DUR
      );
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill && t.kill());
    };
  }, [items]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden
      
      "
    >
      {/* Background video (Cloudflare Stream embed) */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden scale-110">
        <iframe
          title="Mood Jungle Background"
          src="https://customer-64sz73htfhb823gb.cloudflarestream.com/905a6f5ef8be88b239e155ece2b1df85/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-64sz73htfhb823gb.cloudflarestream.com%2F905a6f5ef8be88b239e155ece2b1df85%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
          className="absolute left-1/2 top-1/2 min-w-[100vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Dark forest night overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(40,60,0,0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 70%, rgba(30,50,0,0.2) 0%, transparent 40%),
                           radial-gradient(circle at 50% 90%, rgba(20,40,0,0.4) 0%, transparent 50%)`,
        }}
      />

      {/* Fireflies layer */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {items.map((_, i) => (
          <div
            key={`firefly-${i}`}
            ref={(el) => (fireflyRefs.current[i] = el)}
            className="absolute w-3 h-3 pointer-events-none"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Firefly glow */}
            <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse opacity-60 blur-sm scale-150" />
            {/* Firefly core */}
            <div
              className="absolute inset-0 bg-yellow-200 rounded-full shadow-lg"
              style={{
                boxShadow: `0 0 8px #b66613, 
                              0 0 16px #b66613,
                              0 0 24px #b66613`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Cards layer */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {items.map((card, i) => (
          <div
            key={`card-${i}`}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "55vh",
              height: "55vh",
              visibility: "hidden",
              pointerEvents: "auto",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-95 border border-yellow-300/40 relative">
              {/* Magical glow around card */}
              <div
                className="absolute -inset-2 bg-yellow-400/20 rounded-2xl blur-md animate-pulse"
                style={{
                  background: `radial-gradient(circle, rgba(255,255,0,0.1) 0%, transparent 70%)`,
                }}
              />

              {/* Card content */}
              {card.type === "image" ? (
                <>
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-full object-cover relative z-10"
                  />
                  {/* Golden overlay for magical effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-transparent to-yellow-600/10 z-20" />
                </>
              ) : card.type === "video" ? (
                <>
                  <video
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-full object-cover relative z-10"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {/* Golden overlay for magical effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-transparent to-yellow-600/10 z-20" />
                </>
              ) : (
                <div className="flex items-center justify-center h-full p-6 relative z-10">
                  {/* Magical sparkle background */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, #b66613 2px, transparent 2px),
                                       radial-gradient(circle at 75% 75%, #b66613 1px, transparent 1px)`,
                      backgroundSize: "30px 30px, 20px 20px",
                    }}
                  />
                  <p className="text-gray-800 text-center font-medium text-base leading-relaxed relative z-20 drop-shadow-sm">
                    {card.content}
                  </p>
                </div>
              )}

              {/* Golden border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-yellow-300/30 pointer-events-none z-30" />
            </div>
          </div>
        ))}
      </div>

      <div
        ref={viewAllButtonRef}
        className="absolute bottom-16 mb-5 left-1/2 transform -translate-x-1/2 z-40"
      >
        <div className="text-center">
          <a
            href="/mood-jungle-all"
            className="inline-block bg-[#B66613] dark:bg-[#D0FC2D] text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase"
          >
            View All
          </a>
        </div>
      </div>

      {/* Additional ambient fireflies for atmosphere */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`ambient-${i}`}
            className="absolute w-1 h-1"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-${i % 3} ${
                3 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div
              className="w-full h-full bg-yellow-200 rounded-full opacity-40 blur-sm"
              style={{
                boxShadow: `0 0 4px rgba(255, 255, 0, 0.6)`,
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          33% {
            transform: translate(10px, -15px) scale(0.8);
            opacity: 0.8;
          }
          66% {
            transform: translate(-8px, 12px) scale(1.2);
            opacity: 0.6;
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0.3;
          }
          25% {
            transform: translate(-12px, 8px) scale(1.1);
            opacity: 0.7;
          }
          75% {
            transform: translate(15px, -10px) scale(0.9);
            opacity: 0.5;
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1.1);
            opacity: 0.5;
          }
          50% {
            transform: translate(8px, 18px) scale(0.7);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

export default AlternatingCardsSection;
