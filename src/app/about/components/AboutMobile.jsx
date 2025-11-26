import SmokeTriangles from "../../../components/SmokeTriangles";
import MobileClientMarquee from "../../../components/MobileClientMarquee";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const AboutMobile = () => {
  const section3Ref = useRef(null);
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

  return (
    <main className="bg-[#CDCCBA] dark:bg-[#252525] relative overflow-hidden">
      {/* Background layer with triangles */}
      <SmokeTriangles />

      {/* Section 1 - Hero */}
      <section className="mt-24 flex flex-col items-start justify-center relative z-20 px-4">
        <div className="flex flex-col text-black dark:text-[#CDCBBC] w-full">
          <div className="flex flex-col container text-center max-w-7xl">
            <h1 className="text-5xl text-left font-medium">
              We're a pack of forward-thinkers, creative minds, strategists, and
              industry experts, here to guide you through the wilderness of the
              modern digital jungle.
            </h1>
            <p className="text-left font-medium mt-8 text-lg">
              In a landscape that shifts by the hour, we operate with true
              agility. At our core is a tight, powerhouse team of six, backed by
              a network of over 100 top-tier experts from all over the world.
              For every project, we assemble a custom-built team with the
              precise expertise needed. No bloated setups, no unnecessary
              layers. Just the right talent, at the right time, to solve your
              challenge.
            </p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <img src="/gifs/wink.webp" className="w-48 h-auto" />
          </div>
        </div>
      </section>

      {/* Section 2 - Content with images */}
      <section className=" flex flex-col items-start justify-center relative z-20 px-4">
        <div className="flex flex-col text-black dark:text-[#CDCBBC] w-full">
          <div className="flex flex-col container text-center max-w-7xl">
            <p className="text-left font-medium mt-8  text-lg">
              Born in the vibrant city of Berlin in 2022,
            </p>
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl text-left font-medium mt-4">
                We've been growing fast.
              </h1>
              <h1 className="text-4xl text-left font-medium">
                And getting hungrier.
              </h1>
              <h1 className="text-4xl text-left font-medium">
                Hungry for ideas that break through.
              </h1>
              <h1 className="text-4xl text-left font-medium">
                Hungry for results.
              </h1>
              <h1 className="text-4xl text-left font-medium">
                Hungry for your success.
              </h1>
            </div>
            <p className="text-left font-medium mt-8 md:mt-16 text-lg">
              📍 Based in Berlin
            </p>

            <p className="text-left font-medium mt-2 text-lg">
              🌍 Helping brands roar worldwide.
            </p>
          </div>
          <div className="flex items-center justify-center w-full mt-8">
            <img
              src="/mascotStyle.webp"
              className="w-full h-80 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Born in Berlin */}
      <section
        ref={section3Ref}
        className="mt-10 flex flex-col justify-center relative z-20 px-4"
      >
        <div className="flex flex-col items-start justify-start space-y-8 flex-grow">
          <div className="flex">
            <div className="flex flex-col gap-3 w-full flex-shrink-0">
              <h1
                ref={everyBusinessRef}
                className="font-semibold text-4xl text-black dark:text-[#CDCBBC] leading-tight text-left"
              >
                Every business
              </h1>
              <h1
                ref={needsMarketingRef}
                className="font-semibold text-4xl text-black dark:text-[#CDCBBC] leading-tight text-left"
              >
                needs marketing.
              </h1>
              <h1
                ref={justAsEveryKidRef}
                className="font-semibold text-4xl text-black dark:text-[#CDCBBC] leading-tight text-left"
              >
                Just as every kid
              </h1>
              <h1
                ref={needsTeddyBearRef}
                className="font-semibold text-4xl text-black dark:text-[#CDCBBC] leading-tight text-left"
              >
                needs a teddy bear.
              </h1>
              <div className="flex items-center justify-center md:justify-end mt-8 md:mt-0 md:w-[384px]">
                <img src="/heart.webp" className="w-auto h-80 object-contain" />
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 flex-shrink-0">
              <img src="/heart.webp" className="w-48 h-auto" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 max-w-7xl">
              <p className="text-lg font-medium text-black dark:text-[#CDCBBC] text-left">
                Most of us had that one toy growing up, a teddy bear, a soft
                blanket, something we carried everywhere. It was the first thing
                we held onto while learning to navigate the world. It offered a
                sense of confidence, comfort, and love.
              </p>{" "}
              <p className="text-lg font-medium text-black dark:text-[#CDCBBC] text-left pt-2">
                We didn’t think of it as a luxury.
              </p>{" "}
              <p className="text-lg font-medium text-black dark:text-[#CDCBBC] text-left pt-2">
                {" "}
                We just needed it.
              </p>{" "}
              <p className="text-lg font-medium text-black dark:text-[#CDCBBC] text-left pt-2">
                For businesses, marketing is exactly that.
              </p>{" "}
              <p className="text-lg font-medium text-black dark:text-[#CDCBBC] text-left pt-2">
                It’s not an add-on and a nice-to-have. It’s what shapes how
                people see you, remember you, and choose you. It’s what gives
                your brand a place in a world full of noise. Without marketing,
                even the best ideas risk going unnoticed.
              </p>
              <p className="text-lg font-medium text-black dark:text-[#CDCBBC] text-left pt-2">
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
      <section className="flex items-center relative z-20 px-4 py-16  ">
        <div className="container mx-auto w-full relative">
          {/* Top heading */}
          <div className="text-left flex flex-col gap-3 relative">
            <h2 className="font-semibold text-5xl  text-black dark:text-[#CDCBBC] hover:text-[#B66613] leading-[0.9] mb-2 md:mb-4">
              Wild results,
            </h2>
            <h2 className="font-semibold text-5xl  text-black dark:text-[#CDCBBC] leading-[0.9]">
              wrapped
            </h2>
            <h2 className="font-semibold text-5xl text-black dark:text-[#CDCBBC] hover:text-[#B66613] leading-[0.9]">
              in teddy care.
            </h2>
          </div>

          {/* Mobile - Static text below heading */}
          <div className="mt-12 space-y-8">
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
        {/* Mobile Client Marquee */}
        <div className="block md:hidden">
          <MobileClientMarquee />
        </div>
      </div>
    </main>
  );
};

export default AboutMobile;
