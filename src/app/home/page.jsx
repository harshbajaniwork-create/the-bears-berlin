import { Link } from "@tanstack/react-router";
import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";
import BasicBear from "../../components/BasicBear";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Bears Berlin",
    description:
      "Full-service digital agency based in Berlin offering integrated marketing and creative solutions across digital, social, content, design, and development.",
    url: "https://thebearsberlin.com",
    logo: "https://thebearsberlin.com/favicon.webp",
    foundingDate: "2022",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "Germany",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "52.5200",
        longitude: "13.4050",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "Info@thebearsberlin.com",
      contactType: "customer service",
    },
    sameAs: ["https://www.linkedin.com/company/the-bears-berlin/"],
  };

  return (
    <>
      <ScrollSmoothProvider>
        <main className="bg-white dark:bg-black min-h-screen pt-20 relative">
          {/* Main content container - full viewport height minus header */}
          <div className="flex flex-col justify-center items-center">
            {/* Image section with coordinates above */}
            <div className="flex flex-col items-center justify-center flex-1 w-full max-w-7xl px-4 md:px-8 lg:px-12">
              {/* Coordinates - responsive positioning */}
              <div className="flex justify-between items-center w-full px-4 sm:px-8 md:px-12 lg:px-20 mb-4">
                <p className="text-[#B66613] dark:text-[#D0FC2D] text-xs sm:text-sm font-bold tracking-wider">
                  52.5200° N
                </p>
                <p className="text-[#B66613] dark:text-[#D0FC2D] text-xs sm:text-sm font-bold tracking-wider">
                  13.4050° E
                </p>
              </div>

              {/* Interactive 3D Bear - full width */}
              <div className="w-full mb-6 flex items-center justify-center">
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden ">
                  <BasicBear className="w-full h-full" />
                </div>
              </div>

              {/* Description text - mobile responsive */}
              <div className="text-center mb-6 sm:mb-8 px-4 sm:px-6 w-screen">
                <p className="text-sm sm:text-[22px] font-medium text-black dark:text-white leading-relaxed mx-auto w-full">
                  We are a full-service digital agency based in Berlin: the
                  one-house solution for everything you need to thrive in the
                  ever-evolving digital landscape.
                </p>
              </div>
            </div>

            {/* Main heading - responsive text sizing */}
            <div className="w-full flex items-center justify-center px-4 overflow-hidden mb-8">
              <div className="flex items-center justify-center gap-2 sm:gap-4 whitespace-nowrap hero-text-gradient">
                <h1 className="text-[6vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[6.5vw] font-black uppercase tracking-tight leading-tight">
                  we are
                </h1>
                <div
                  className="relative overflow-hidden h-[8vw] sm:h-[6vw] md:h-[5.5vw] lg:h-[7.5vw]"
                  style={{ width: "auto", minWidth: "max-content" }}
                >
                  <div className="word-slider">
                    <div className="text-[6vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[6.5vw] font-black uppercase tracking-tight leading-tight h-[8vw] sm:h-[6vw] md:h-[5.5vw] lg:h-[7.5vw] flex items-center whitespace-nowrap flex-shrink-0 hero-text-gradient-2">
                      the bears berlin
                    </div>
                    <div className="text-[6vw] sm:text-[6vw] md:text-[5.5vw] lg:text-[6.5vw] font-black uppercase tracking-tight leading-tight h-[8vw] sm:h-[6vw] md:h-[5.5vw] lg:h-[7.5vw] flex items-center whitespace-nowrap flex-shrink-0 hero-text-gradient-3">
                      the wildest agency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="w-full p-[1px] sm:p-[2px] bg-[#C1C1C1] my-8 sm:my-10"></div>

          {/* Footer - mobile responsive */}
          <footer className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 px-4 items-center">
            {/* Left column */}
            <div className="text-base sm:text-lg lg:text-xl space-y-2 order-1 sm:order-1">
              <a
                href="mailto:Info@thebearsberlin.com"
                className="block underline font-medium text-black dark:text-white break-all sm:break-normal"
              >
                Info@thebearsberlin.com
              </a>
              <p className="font-medium underline text-black dark:text-white">
                <Link to="/privacy-policy">Privacy policy</Link>
              </p>
              <p className="font-bold text-black dark:text-white">
                THE BEARS BERLIN©
              </p>
            </div>

            {/* Center column - logo (hidden on mobile, centered on larger screens) */}
            <div className="hidden sm:flex justify-center items-center order-2">
              <img
                src="/footerLogo.webp"
                className="w-[160px] h-[160px] lg:w-[224px] lg:h-[224px] object-contain dark:invert"
                alt="The Bears Berlin Logo"
              />
            </div>

            {/* Right column */}
            <div className="text-base sm:text-lg lg:text-xl sm:text-right space-y-2 order-3">
              <a
                href="https://www.linkedin.com/company/the-bears-berlin/"
                target="_blank"
                className="underline font-medium text-black dark:text-white"
              >
                @thebearsberlin
              </a>
              <p className="font-medium underline text-black dark:text-white">
                <Link to="/impressum">Impressum</Link>
              </p>
              <p className="font-bold text-black dark:text-white">(2022est)</p>
            </div>
          </footer>
        </main>
      </ScrollSmoothProvider>
    </>
  );
};

export default Home;
