import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MoodJungleMobile = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    // Initial animation for heading appearing from the back
    const heading = headingRef.current;

    // Initial state - small and transparent
    gsap.set(heading, {
      scale: 0.5,
      opacity: 0,
      transformOrigin: "center center",
    });

    // Animate to full size with a slight "pop" effect
    gsap.to(heading, {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "back.out(1.5)",
      delay: 0.3,
    });

    // Scroll animation to hide/show heading
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        // Fade out as user scrolls down
        gsap.to(heading, {
          opacity: 1 - Math.min(1, self.progress * 3), // Fade out faster than scroll progress
          y: self.progress * 50, // Move down slightly as it fades out
          duration: 0.2,
        });
      },
    });

    // Cleanup
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-white dark:bg-black flex flex-col items-center justify-center min-h-screen px-2 sm:px-4 py-8 transition-colors"
    >
      <div className="mt-16 sm:mt-20 w-full">
        <h1
          ref={headingRef}
          className="exploration-heading mb-4 sm:mb-6 md:mb-8"
        >
          MoodJungle
        </h1>

        {/* Mobile: Single column stack */}
        <div className="space-y-0">
          <div className="h-[200px] flex items-start p-4 bg-white dark:bg-black transition-colors">
            <p className="text-black dark:text-white text-sm font-medium transition-colors">
              A curated collection of work that catches our eye: Campaigns,
              visuals & ideas that inspire us. They reflect the kind of sharp
              instinct, storytelling and creative thinking that we admire.
            </p>
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/cat.jpg"
              className="h-full w-full object-cover"
              alt="Cat"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/redeye.jpg"
              className="h-full w-full object-cover"
              alt="Red eye"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/dog.webp"
              className="h-full w-full object-cover"
              alt="Dog"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/face.jpg"
              className="h-full w-full object-cover"
              alt="Face"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/glass.webp"
              className="h-full w-full object-cover"
              alt="Glass"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/blast.jpg"
              className="h-full w-full object-cover"
              alt="Blast"
            />
          </div>
          {/* <div className="h-[200px] flex items-end p-4 bg-white dark:bg-black transition-colors">
            <p className="text-black dark:text-white text-sm font-medium transition-colors">
              We combine strategic thinking with creative execution to help
              brands grow and thrive. Our focus is on delivering clear,
              impactful solutions that resonate with audiences and drive
              results—whether through design, content, or digital marketing.
              We're here to turn ideas into outcomes.
            </p>
          </div> */}
          <div className="h-full w-full">
            <img
              src="/exploration/butterfly.jpg"
              className="h-full w-full object-cover"
              alt="Butterfly"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/back.webp"
              className="h-full w-full object-cover"
              alt="Back"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/sofa.jpg"
              className="h-full w-full object-cover"
              alt="Sofa"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/tree.webp"
              className="h-full w-full object-cover"
              alt="Tree"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/bubble.webp"
              className="h-full w-full object-cover"
              alt="Bubble"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/orange.webp"
              className="h-full w-full object-cover"
              alt="Orange"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/bug.webp"
              className="h-full w-full object-cover"
              alt="Bug"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/stereo.webp"
              className="h-full w-full object-cover"
              alt="Stereo"
            />
          </div>
          {/* <div className="h-[200px] flex items-end p-4 bg-white dark:bg-black transition-colors">
            <p className="text-black dark:text-white text-sm font-medium transition-colors">
              We combine strategic thinking with creative execution to help
              brands grow and thrive. Our focus is on delivering clear,
              impactful solutions that resonate with audiences and drive
              results—whether through design, content, or digital marketing.
              We're here to turn ideas into outcomes.
            </p>
          </div> */}
          <div className="h-full w-full">
            <img
              src="/exploration/green-hill.webp"
              className="h-full w-full object-cover"
              alt="Green Hill"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/cherry.webp"
              className="h-full w-full object-cover"
              alt="Cherry"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/dry-grass.webp"
              className="h-full w-full object-cover"
              alt="Dry-Grass"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/broken-mirror.webp"
              className="h-full w-full object-cover"
              alt="Broken-Mirror"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/steps.webp"
              className="h-full w-full object-cover"
              alt="Steps"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/dvd.jpg"
              className="h-full w-full object-cover"
              alt="DVD"
            />
          </div>
          <div className="h-[400px] w-full">
            <img
              src="/exploration/bike.webp"
              className="h-full w-full object-cover"
              alt="Bike"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/black-women.webp"
              className="h-full w-full object-cover"
              alt="Black-Women"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/penguine.webp"
              className="h-full w-full object-cover"
              alt="Penguine"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/bear.webp"
              className="h-full w-full object-cover"
              alt="Bear"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/waist.webp"
              className="h-full w-full object-cover"
              alt="Waist"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/man.webp"
              className="h-full w-full object-cover"
              alt="Man"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/cd-rock.webp"
              className="h-full w-full object-cover"
              alt="CD-DVD"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/old-lady.webp"
              className="h-full w-full object-cover"
              alt="Old-lady"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/perfume.webp"
              className="h-full w-full object-cover"
              alt="Perfume"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/girl.webp"
              className="h-full w-full object-cover"
              alt="Girl"
            />
          </div>
          <div className="h-[350px] w-full">
            <img
              src="/exploration/field.webp"
              className="h-full w-full object-cover"
              alt="Field"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/climber.webp"
              className="h-full w-full object-cover"
              alt="Climber"
            />
          </div>
          <div className="h-full w-full">
            <img
              src="/exploration/frog.webp"
              className="h-full w-full object-cover"
              alt="Frog"
            />
          </div>
          <div className="h-[200px] flex items-start p-4 bg-white dark:bg-black transition-colors">
            <p className="text-black dark:text-white text-sm font-medium transition-colors">
              We do not claim ownership of the images displayed on this page.
              They are used solely for inspiration, and all rights remain with
              their respective creators.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoodJungleMobile;
