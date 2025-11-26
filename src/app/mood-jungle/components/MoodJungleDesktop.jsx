import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { moodJungleItems } from "../../../constants/index"; // Adjust path as needed
import AlternatingCardsSection from "./AlternatingCardsSection"; // Adjust path as needed

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MoodJungleDesktop = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const heroSectionRef = useRef(null);

  useGSAP(() => {
    const heading = headingRef.current;

    // Initial state: hidden
    gsap.set(heading, {
      opacity: 0,
      clipPath: "circle(0.4% at 50% 50%)",
      transformOrigin: "center",
    });

    gsap.fromTo(
      heading,
      { scale: 0.6, opacity: 0, clipPath: "circle(0.4% at 50% 50%)" },
      {
        opacity: 1,
        scale: 1.02, // slight over-scale
        clipPath: "circle(150% at 50% 50%)",
        duration: 2.4,
        ease: "circ.out",
        delay: 0.3,
        textShadow:
          "0 0 4px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.4)",
      }
    );

    // Scroll-triggered exit (unchanged)
    ScrollTrigger.create({
      trigger: heroSectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(heading, {
          opacity: 1 - progress,
          y: -progress * 100,
          scale: 1 - progress * 0.2,
          duration: 0.1,
          ease: "none",
        });
      },
    });

    // Parallax effect
    gsap
      .timeline({
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(heroSectionRef.current, {
        scale: 0.9,
        yPercent: 30,
        ease: "power1.inOut",
      });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-white dark:bg-black transition-colors overflow-hidden"
    >
      {/* Hero Section with Jungle Background */}
      <div
        ref={heroSectionRef}
        className="min-h-screen flex flex-col items-center justify-center py-8 relative"
        style={{
          backgroundImage: "url(/jungle.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="w-full max-w-[1920px] mx-auto px-4 relative z-10">
          <h1
            ref={headingRef}
            className="uppercase text-white w-full whitespace-nowrap text-[min(12vw,240px)] relative mb-4 sm:mb-6 md:mb-8 text-6xl font-bold text-center drop-shadow-2xl"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            MoodJungle
          </h1>

          {/* Optional subtitle that appears after main heading */}
          <div className="text-center mt-8">
            <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto">
              A curated collection of work that catches our eye: campaigns,
              visuals & ideas that inspire us. They reflect the kind of sharp
              instinct, storytelling and creative thinking that we admire.
            </p>
          </div>
        </div>
      </div>

      {/* Alternating Cards Section with 3D Effects */}
      <AlternatingCardsSection items={moodJungleItems} />
    </main>
  );
};

export default MoodJungleDesktop;
