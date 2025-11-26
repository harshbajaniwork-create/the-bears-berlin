import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin

const MoodJungleGrid = () => {
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
      className="bg-white dark:bg-black flex flex-col items-center justify-center min-h-screen py-8 transition-colors"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4">
        <h1
          ref={headingRef}
          className="exploration-heading mb-4 sm:mb-6 md:mb-8"
        >
          MoodJungle
        </h1>

        {/* Desktop Grid - Responsive boxes that span edge-to-edge on normal screens */}
        <div className="grid grid-cols-5 gap-0 w-full">
          {/* Row 1 */}
          <div className="h-[300px]">
            <img
              src="/exploration/cat.jpg"
              className="h-full w-full object-cover"
              alt="Cat"
            />
          </div>
          <div className="h-[300px] flex items-start  bg-white dark:bg-black transition-colors">
            <p className="text-black dark:text-white text-sm font-medium transition-colors">
              A curated collection of work that catches our eye - Campaigns,
              visuals & ideas that inspire us. They reflect the kind of sharp
              instinct, storytelling and creative thinking that we admire.
            </p>
          </div>
          <div className="h-[300px]">
            <img
              src="/exploration/redeye.jpg"
              className="h-full w-full object-cover"
              alt="Red eye"
            />
          </div>
          <div className="h-[300px] flex items-start  bg-white dark:bg-black transition-colors">
            <p className="text-black dark:text-white text-sm font-medium transition-colors">
              We do not claim ownership of the images displayed on this page.
              They are used solely for inspiration, and all rights remain with
              their respective creators.
            </p>
          </div>
          <div className="h-[300px]">
            <img
              src="/exploration/dog.webp"
              className="h-full w-full object-cover"
              alt="Dog"
            />
          </div>

          {/* Row 2 */}
          <div className="h-[300px]">
            <img
              src="/exploration/face.jpg"
              className="h-full w-full object-cover"
              alt="Face"
            />
          </div>
          <div className="h-[300px]">
            <img
              src="/exploration/glass.webp"
              className="h-full w-full object-cover"
              alt="Glass"
            />
          </div>
          <div className="h-[300px] bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px]">
            <img
              src="/exploration/blast.jpg"
              className="h-full w-full object-cover"
              alt="Blast"
            />
          </div>
          <div className="h-[300px] flex items-end  bg-white dark:bg-black transition-colors">
            {/* <p className="text-black dark:text-white text-sm font-medium transition-colors">
              We combine strategic thinking with creative execution to help
              brands grow and thrive. Our focus is on delivering clear,
              impactful solutions that resonate with audiences and drive
              results—whether through design, content, or digital marketing.
              We're here to turn ideas into outcomes.
            </p> */}
          </div>

          {/* Row 3 */}
          <div className="h-[300px]">
            <img
              src="/exploration/butterfly.jpg"
              className="h-full w-full object-cover"
              alt="Butterfly"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px]">
            <img
              src="/exploration/back.webp"
              className="h-full w-full object-cover"
              alt="Back"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px]">
            <img
              src="/exploration/sofa.jpg"
              className="h-full w-full object-cover"
              alt="Sofa"
            />
          </div>

          {/* Row 4 */}
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px]">
            <img
              src="/exploration/tree.webp"
              className="h-full w-full object-cover"
              alt="Tree"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px]">
            <img
              src="/exploration/bubble.webp"
              className="h-full w-full object-cover"
              alt="Bubble"
            />
          </div>
          <div className="h-[300px] ">
            <img
              src="/exploration/orange.webp"
              className="h-full w-full object-cover"
              alt="Orange"
            />
          </div>

          {/* Row 5 */}
          <div className="h-[300px]">
            <img
              src="/exploration/bug.webp"
              className="h-full w-full object-cover"
              alt="Bug"
            />
          </div>
          <div className="h-[300px] bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px] ">
            <img
              src="/exploration/stereo.webp"
              className="h-full w-full object-cover"
              alt="Stereo"
            />
          </div>
          <div className="h-[300px]  flex items-end  bg-white dark:bg-black transition-colors ">
            {/* <p className="text-black dark:text-white text-sm font-medium transition-colors">
              A visual exploration gallery by the bears Berlin. The wildest
              marketing agency. The one-house solution for everything you need
              to thrive in the ever-evolving digital landscape.
            </p> */}
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>

          {/* Row 6 */}
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px] ">
            <img
              src="/exploration/green-hill.webp"
              className="h-full w-full object-cover"
              alt="Green Hill"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px] ">
            <img
              src="/exploration/cherry.webp"
              className="h-full w-full object-cover"
              alt="Cherry"
            />
          </div>
          <div className="h-[300px] ">
            <img
              src="/exploration/dry-grass.webp"
              className="h-full w-full object-cover"
              alt="Dry-Grass"
            />
          </div>

          {/* Row 7 */}
          <div className="h-[300px] ">
            <img
              src="/exploration/broken-mirror.webp"
              className="h-full w-full object-cover"
              alt="Broken-Mirror"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px] ">
            <img
              src="/exploration/steps.webp"
              className="h-full w-full object-cover"
              alt="Steps"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px] ">
            <img
              src="/exploration/dvd.jpg"
              className="h-full w-full object-cover"
              alt="DVD"
            />
          </div>

          {/* Row 8 - Large bike image spans 2x2 */}
          <div className="h-[600px] col-span-2 row-span-2">
            <img
              src="/exploration/bike.webp"
              className="h-full w-full object-cover"
              alt="Bike"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px] ">
            <img
              src="/exploration/black-women.webp"
              className="h-full w-full object-cover"
              alt="Black-Women"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>

          {/* Row 9 (continuation of bike span) */}
          <div className="h-[300px] ">
            <img
              src="/exploration/penguine.webp"
              className="h-full w-full object-cover"
              alt="Penguine"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px] ">
            <img
              src="/exploration/bear.webp"
              className="h-full w-full object-cover"
              alt="Bear"
            />
          </div>

          {/* Row 10 */}
          <div className="h-[300px] ">
            <img
              src="/exploration/waist.webp"
              className="h-full w-full object-cover"
              alt="Waist"
            />
          </div>
          <div className="h-[300px] ">
            <img
              src="/exploration/man.webp"
              className="h-full w-full object-cover"
              alt="Man"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px] ">
            <img
              src="/exploration/cd-rock.webp"
              className="h-full w-full object-cover"
              alt="CD-DVD"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>

          {/* Row 11 */}
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px] ">
            <img
              src="/exploration/old-lady.webp"
              className="h-full w-full object-cover"
              alt="Old-lady"
            />
          </div>
          <div className="h-[300px] ">
            <img
              src="/exploration/perfume.webp"
              className="h-full w-full object-cover"
              alt="Perfume"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors "></div>
          <div className="h-[300px] ">
            <img
              src="/exploration/girl.webp"
              className="h-full w-full object-cover"
              alt="Girl"
            />
          </div>

          {/* Row 12 - Field image spans 2 columns */}
          <div className="h-[300px] w-[600px] col-span-2">
            <img
              src="/exploration/field.webp"
              className="h-full w-full object-cover"
              alt="Field"
            />
          </div>
          <div className="h-[300px] ">
            <img
              src="/exploration/climber.webp"
              className="h-full w-full object-cover"
              alt="Climber"
            />
          </div>
          <div className="h-[300px] ">
            <img
              src="/exploration/frog.webp"
              className="h-full w-full object-cover"
              alt="Frog"
            />
          </div>
          <div className="h-[300px]  bg-white dark:bg-black transition-colors ">
            <video
              src="/exploration/scene.mov"
              alt="Scene"
              className="w-full h-full object-cover relative z-10"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <a
          href="/mood-jungle"
          className="inline-block bg-[#B66613] dark:bg-[#D0FC2D] text-white dark:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase"
        >
          Back To Jungle
        </a>
      </div>
    </main>
  );
};

export default MoodJungleGrid;
