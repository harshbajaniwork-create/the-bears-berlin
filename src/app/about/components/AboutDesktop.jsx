import SmokeTriangles from "../../../components/SmokeTriangles";
import Clients from "../../../components/Clients";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useRef, useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const AboutDesktop = () => {
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const wildResultsRef = useRef(null);
  const wrappedRef = useRef(null);
  const teddyCareRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const everyBusinessRef = useRef(null);
  const needsMarketingRef = useRef(null);
  const justAsEveryKidRef = useRef(null);
  const needsTeddyBearRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Section 3 scramble animation
  useGSAP(
    () => {
      // Skip complex animations on mobile
      if (isMobile) {
        return;
      }

      // Create scroll trigger for section 3 scramble animation
      ScrollTrigger.create({
        trigger: section3Ref.current,
        start: "top bottom",
        onEnter: () => {
          // Create timeline for line-by-line scramble animation
          const tl = gsap.timeline({
            defaults: { ease: "none" },
          });

          // Set initial state - hide all text
          gsap.set(
            [
              everyBusinessRef.current,
              needsMarketingRef.current,
              justAsEveryKidRef.current,
              needsTeddyBearRef.current,
            ],
            {
              opacity: 0,
            }
          );

          // Animate each line sequentially with scramble effect
          tl.to(everyBusinessRef.current, {
            scrambleText: {
              text: "Every business",
              chars: "abcdefghijklmnopqrstuvwxyz",
              speed: 0.3,
            },
            opacity: 1,
            duration: 1.5,
          })
            .to(
              needsMarketingRef.current,
              {
                scrambleText: {
                  text: "needs marketing.",
                  chars: "abcdefghijklmnopqrstuvwxyz",
                  speed: 0.3,
                },
                opacity: 1,
                duration: 1.5,
              },
              "-=0.5"
            )
            .to(
              justAsEveryKidRef.current,
              {
                scrambleText: {
                  text: "Just as every kid",
                  chars: "abcdefghijklmnopqrstuvwxyz",
                  speed: 0.3,
                },
                opacity: 1,
                duration: 1.5,
              },
              "-=0.5"
            )
            .to(
              needsTeddyBearRef.current,
              {
                scrambleText: {
                  text: "needs a teddy bear.",
                  chars: "abcdefghijklmnopqrstuvwxyz",
                  speed: 0.3,
                },
                opacity: 1,
                duration: 1.5,
              },
              "-=0.5"
            );
        },
      });
    },
    { scope: section3Ref, dependencies: [isMobile] }
  );

  useGSAP(
    () => {
      // Skip complex animations on mobile
      if (isMobile) {
        return;
      }

      // Create a timeline for the entire section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top top",
          end: "+=200%", // Extended scroll area
          scrub: 1, // Smooth scrubbing
          pin: true, // Pin the section while animating
          anticipatePin: 1,
        },
      });

      // Phase 1: Highlight "Wild results" and show left text
      tl.to(wildResultsRef.current, {
        duration: 0.3,
      })
        .fromTo(
          leftTextRef.current,
          {
            opacity: 0,
            x: -100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0.2" // Start slightly after wild results highlight
        )
        // Hold the left text visible
        .to({}, { duration: 0.5 })
        // Phase 2: Fade out left text, remove wild results highlight
        .to(leftTextRef.current, {
          opacity: 0,
          x: -100,
          duration: 0.4,
          ease: "power2.in",
        })
        .to(
          wildResultsRef.current,
          {
            duration: 0.3,
          },
          "<"
        )
        // Phase 3: Highlight "teddy care" and show right text
        .to(teddyCareRef.current, {
          duration: 0.3,
        })
        .fromTo(
          rightTextRef.current,
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<0.2"
        )
        // Hold the right text visible
        .to({}, { duration: 0.5 });
    },
    { scope: section4Ref, dependencies: [isMobile] }
  );

  return (
    <main className="bg-[#CDCCBA] dark:bg-[#252525] relative overflow-hidden">
      {/* Background layer with triangles */}
      <SmokeTriangles />

      {/* Section 1 - Hero */}
      <section className="mt-24 md:mt-64 flex flex-col items-start justify-center relative z-20 px-4 md:px-6">
        <div className="flex flex-col md:flex-row text-black dark:text-[#CDCBBC] w-full">
          <div className="flex flex-col ml-28 mr-6 container text-center max-w-7xl">
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl text-left font-medium">
              We're a pack of forward-thinkers, creative minds, strategists, and
              industry experts, here to guide you through the wilderness of the
              modern digital jungle.
            </h1>
            <p className="text-left font-medium mt-8 md:mt-28 text-lg sm:text-lg md:text-[21px]">
              In a landscape that shifts by the hour, we operate with true
              agility. At our core is a tight, powerhouse team of six, backed by
              a network of over 100 top-tier experts from all over the world.
              For every project, we assemble a custom-built team with the
              precise expertise needed. No bloated setups, no unnecessary
              layers. Just the right talent, at the right time, to solve your
              challenge.
            </p>
          </div>
          <div className="flex items-center justify-center w-72">
            <img src="/gifs/wink.webp" className="w-64 h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Section 2 - Content with images */}
      <section className="mt-24 md:mt-40 flex flex-col items-start justify-center relative z-20 px-4 md:px-6">
        <div className="flex flex-col md:flex-row text-black dark:text-[#CDCBBC] w-full">
          <div className="flex flex-col md:ml-28 container text-center max-w-7xl">
            <p className="text-left font-medium mt-8 md:mt-16 text-lg sm:text-lg md:text-[21px]">
              Born in the vibrant city of Berlin in 2022,
            </p>
            <div className="flex flex-col gap-3 md:gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-left font-medium mt-4 md:mt-6">
                We've been growing fast.
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-left font-medium">
                And getting hungrier.
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-left font-medium">
                Hungry for ideas that break through.
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-left font-medium">
                Hungry for results.
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-left font-medium">
                Hungry for your success.
              </h1>
            </div>
            <p className="text-left font-medium mt-8 md:mt-16 text-lg sm:text-lg md:text-[21px]">
              📍 Based in Berlin
            </p>

            <p className="text-left font-medium mt-2 text-lg sm:text-lg md:text-[21px]">
              🌍 Helping brands roar worldwide.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end mt-8 md:mt-0 md:min-w-[384px]">
            <img
              src="/mascotStyle.webp"
              className="w-48 sm:w-64 md:w-96 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Born in Berlin */}
      <section
        ref={section3Ref}
        className="mt-24 md:mt-40 flex flex-col justify-center relative z-20 px-4 md:px-6"
      >
        <div className="flex flex-col items-start justify-start md:ml-28 space-y-8 md:space-y-14 flex-grow">
          <div className="flex">
            <div className="flex flex-col gap-3 md:gap-4 w-full md:w-[500px] lg:w-[1090px]  flex-shrink-0">
              <h1
                ref={everyBusinessRef}
                className="font-semibold text-4xl md:text-6xl lg:text-8xl text-black dark:text-[#CDCBBC] leading-tight text-left"
              >
                Every business
              </h1>
              <h1
                ref={needsMarketingRef}
                className="font-semibold text-4xl md:text-6xl lg:text-8xl text-black dark:text-[#CDCBBC] leading-tight text-left"
              >
                needs marketing.
              </h1>
              <h1
                ref={justAsEveryKidRef}
                className="font-semibold text-4xl md:text-6xl lg:text-8xl text-black dark:text-[#CDCBBC] leading-tight text-left"
              >
                Just as every kid
              </h1>
              <h1
                ref={needsTeddyBearRef}
                className="font-semibold text-4xl md:text-6xl lg:text-8xl text-black dark:text-[#CDCBBC] leading-tight text-left"
              >
                needs a teddy bear.
              </h1>
            </div>
            <div className="flex items-center justify-center md:justify-end mt-8 md:mt-0 md:w-[384px]">
              <img
                src="/heart.webp"
                className="w-auto h-96 object-contain scale-125"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-0">
            <div className="flex flex-col gap-4 md:space-x-16 max-w-7xl">
              <p className="text-lg md:text-[21px] font-medium text-black dark:text-[#CDCBBC] text-left">
                Most of us had that one toy growing up, a teddy bear, a soft
                blanket, something we carried everywhere. It was the first thing
                we held onto while learning to navigate the world. It offered a
                sense of confidence, comfort, and love.
              </p>{" "}
              <p className="text-lg md:text-[21px] font-medium text-black dark:text-[#CDCBBC] text-left pt-2">
                We didn’t think of it as a luxury.
              </p>{" "}
              <p className="text-lg md:text-[21px] font-medium text-black dark:text-[#CDCBBC] text-left pt-2">
                {" "}
                We just needed it.
              </p>{" "}
              <p className="text-lg md:text-[21px] font-medium text-black dark:text-[#CDCBBC] text-left pt-2">
                For businesses, marketing is exactly that.
              </p>{" "}
              <p className="text-lg md:text-[21px] font-medium text-black dark:text-[#CDCBBC] text-left pt-2">
                It’s not an add-on and a nice-to-have. It’s what shapes how
                people see you, remember you, and choose you. It’s what gives
                your brand a place in a world full of noise. Without marketing,
                even the best ideas risk going unnoticed.
              </p>
              <p className="text-lg md:text-[21px] font-medium text-black dark:text-[#CDCBBC] text-left pt-2">
                The Bears Berlin was born out of the idea that no brand should
                grow up without that support. Because behind every iconic name
                is a story, a strategy, and a community, and that’s what we
                craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Wild Results */}
      <section
        ref={section4Ref}
        className="min-h-screen flex items-center relative z-20 px-4 md:px-6 py-16 md:py-0"
      >
        <div className="container mx-auto w-full relative">
          {/* Top heading */}
          <div className="sm:text-center text-left flex flex-col gap-3 md:gap-4 relative">
            <h2
              ref={wildResultsRef}
              className="font-semibold text-5xl md:text-6xl lg:text-[90px] text-black dark:text-[#CDCBBC] hover:text-[#B66613] leading-[0.9] mb-2 md:mb-4"
            >
              Wild results,
            </h2>
            <h2
              ref={wrappedRef}
              className="font-semibold text-5xl md:text-6xl lg:text-[90px] text-black dark:text-[#CDCBBC] leading-[0.9]"
            >
              wrapped
            </h2>
            <h2
              ref={teddyCareRef}
              className="font-semibold text-5xl md:text-6xl lg:text-[90px] text-black dark:text-[#CDCBBC] hover:text-[#B66613] leading-[0.9]"
            >
              in teddy care.
            </h2>
          </div>

          {/* Left side text (Wild Results related) - Desktop */}
          <div
            ref={leftTextRef}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 max-w-md opacity-0"
          >
            <div className="flex gap-2 w-full text-black dark:text-[#CDCBBC] mr-20 mt-0">
              <div>
                <p className="text-[21px] font-medium leading-relaxed">
                  In a world where everyone has access to the same AI tools and
                  everything starts to look the same, authenticity is what sets
                  a brand apart.
                </p>
                <p className="text-[21px] font-medium leading-relaxed mt-4">
                  We build marketing that goes beyond templates. Every campaign,
                  every post, every touchpoint is built to resonate and deliver
                  results, not just noise.
                </p>
              </div>
              <div className="mt-6">
                <FaArrowRightLong className="scale-200 size-8 ml-5" />
              </div>
            </div>
          </div>

          {/* Right side text (Teddy Care related) - Desktop */}
          <div
            ref={rightTextRef}
            className="hidden md:block absolute right-0 top-[85%] transform -translate-y-1/2 max-w-md opacity-0"
          >
            <div className="text-black dark:text-[#CDCBBC] mt-60 ml-20 flex">
              <div className="mt-4 mr-10">
                <FaArrowLeftLong className="scale-200 size-8 -ml-10" />
              </div>
              <div>
                <p className="text-[21px] font-medium leading-relaxed">
                  Our teddies are trained to care, and they work closely with
                  your team to identify pain points and understand what matters.
                  They work relentlessly behind the scenes, so you can take a
                  moment to breathe, knowing we've got it covered.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile - Static text below heading */}
          <div className="md:hidden mt-12 space-y-8">
            <div className="text-black dark:text-[#CDCBBC]">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-[#CDCBBC]">
                Wild results
              </h3>
              <p className="text-lg font-medium leading-relaxed">
                In a world where everyone has access to the same AI tools and
                everything starts to look the same, authenticity is what sets a
                brand apart.
              </p>
              <p className="text-lg font-medium leading-relaxed mt-4">
                We build marketing that goes beyond templates. Every campaign,
                every post, every touchpoint is built to resonate and deliver
                results, not just noise.
              </p>
            </div>

            <div className="text-black dark:text-[#CDCBBC]">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-[#CDCBBC]">
                Teddy care
              </h3>
              <p className="text-lg font-medium leading-relaxed">
                Our teddies are trained to care, and they work closely with your
                team to identify pain points and understand what matters. They
                work relentlessly behind the scenes, so you can take a moment to
                breathe, knowing we've got it covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Components - No margin, goes edge to edge */}
      <div className="relative z-20 py-8 md:py-16">
        {/* Desktop Clients */}
        <div className="hidden md:block">
          <Clients />
        </div>
      </div>
    </main>
  );
};

export default AboutDesktop;
