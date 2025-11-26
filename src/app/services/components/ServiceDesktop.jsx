import { Link } from "@tanstack/react-router";
import React, { useRef } from "react";

// Desktop Component
const ServicesDesktop = () => {
  const servicesRef = useRef(null);
  const detailsRef = useRef(null);

  return (
    <main className="flex flex-col w-full h-full">
      <div className="relative">
        {/* Hero Section */}
        <section
          ref={servicesRef}
          className="bg-[#808c80] dark:bg-[#2F3A36] h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Text Content */}
          <div className="max-w-7xl px-4 sm:px-6 md:px-10 text-center mb-12 sm:mb-16 md:mb-20 z-10">
            <p className="text-center font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#2F3A36] dark:text-[#808c80] leading-relaxed">
              At The Bears Berlin, we are hungry for your success and offer
              everything you need to thrive in the ever-evolving digital jungle.
              We deliver integrated marketing and creative solutions across
              digital, social, content, design, and development. Whether you are
              a start-up or established brand, whatever your current goal, our
              Teddy Bears stay by your side, end to end.
            </p>
          </div>

          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-8 mb-12 sm:mb-16 z-10 px-4">
            {[
              "SOCIAL MEDIA",
              "PAID CAMPAIGNS",
              "DESIGN & DEV",
              "AI",
              "INFLUENCER MARKETING",
              "CONTENT PRODUCTION",
            ].map((item, index) => (
              <div
                key={index}
                className="text-[#2F3A36] dark:text-[#808c80] text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 whitespace-nowrap font-semibold"
              >
                [ {item} ]
              </div>
            ))}
          </div>

          {/* Services Text with Gradient */}
          <div className="absolute bottom-0 left-0 right-0 w-full">
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 2xl:h-[50vh] overflow-hidden">
              <div className="w-screen inset-0 z-10 absolute bottom-0 p-8 sm:p-16 md:p-24 lg:p-32 bg-gradient-to-t dark:from-[#808c80] from-[#2F3A36] transition-colors" />
              <h1 className="service-heading">Services</h1>
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section
          ref={detailsRef}
          className="bg-[#808c80] dark:bg-[#2F3A36]  w-full pt-8 sm:pt-12 md:pt-16 pb-5"
        >
          <div className="w-full">
            {/* First Row */}
            <div className="flex flex-col sm:flex-row items-start justify-center gap-x-[200px] mb-12 sm:mb-16">
              <div className="service-category flex-1 max-w-[300px]">
                <h2 className="text-lg sm:text-xl md:text-[32px] font-semibold mb-4 sm:mb-6 text-[#2F3A36] dark:text-[#808c80] whitespace-nowrap">
                  [SOCIAL MEDIA]
                </h2>
                <ul className="space-y-2 sm:space-y-3 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm sm:text-lg">
                  <li>Social media strategy & management</li>
                  <li>Social-first content creation</li>
                  <li>Paid social campaigns</li>
                  <li>Gen Z & Gen Alpha targeting</li>
                  <li>Social media copywriting</li>
                  <li>Community management</li>
                </ul>
              </div>

              <div className="service-category flex-1 max-w-[300px]">
                <h2 className="text-lg sm:text-xl md:text-[32px] font-semibold mb-4 sm:mb-6 text-[#2F3A36] dark:text-[#808c80] whitespace-nowrap">
                  [PAID CAMPAIGNS]
                </h2>
                <ul className="space-y-2 sm:space-y-3 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm sm:text-lg">
                  <li>Paid media strategy</li>
                  <li>Media planning & budgeting</li>
                  <li>Funnel strategy & retargeting</li>
                  <li>Creative development for ads</li>
                  <li>Ad performance testing & optimisation</li>
                  <li>Meta, TikTok, Google, YouTube Ads, etc.</li>
                </ul>
              </div>

              <div className="service-category flex-1 max-w-[300px]">
                <h2 className="text-lg sm:text-xl md:text-[32px] font-semibold mb-4 sm:mb-6 text-[#2F3A36] dark:text-[#808c80] whitespace-nowrap">
                  [DESIGN & DEV]
                </h2>
                <ul className="space-y-2 sm:space-y-3 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm sm:text-lg">
                  <li>Web design & development</li>
                  <li>UX/UI design</li>
                  <li>Branding & visual identity</li>
                  <li>Graphic & creative design</li>
                  <li>3D modelling & visualisation</li>
                  <li>Motion graphics & animation</li>
                  <li>Presentations & pitch decks</li>
                </ul>
              </div>
            </div>

            {/* Second row */}
            <div className="flex flex-col sm:flex-row items-start justify-center gap-x-[200px] mb-12 sm:mb-16">
              <div className="service-category flex-1 max-w-[300px]">
                <h2 className="text-lg sm:text-xl md:text-[32px] font-semibold mb-4 sm:mb-6 text-[#2F3A36] dark:text-[#808c80] whitespace-nowrap">
                  [INFLUENCER MARKETING]
                </h2>
                <ul className="space-y-2 sm:space-y-3 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm sm:text-lg">
                  <li>Influencer & creator strategy</li>
                  <li>Influencer scouting & outreach</li>
                  <li>Influencer campaign planning & execution</li>
                  <li>UGC content creation</li>
                </ul>
              </div>

              <div className="service-category flex-1 max-w-[300px]">
                <h2 className="text-lg sm:text-xl md:text-[32px] font-semibold mb-4 sm:mb-6 text-[#2F3A36] dark:text-[#808c80] whitespace-nowrap">
                  [AI]
                </h2>
                <ul className="space-y-2 sm:space-y-3 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm sm:text-lg">
                  <li>AI strategy & consulting</li>
                  <li>Workflow automation</li>
                  <li>AI tool integration</li>
                  <li>Custom AI solutions</li>
                  <li>Data & insight automation</li>
                </ul>
              </div>

              <div className="service-category flex-1 max-w-[300px]">
                <h2 className="text-lg sm:text-xl md:text-[32px] font-semibold mb-4 sm:mb-6 text-[#2F3A36] dark:text-[#808c80] whitespace-nowrap">
                  [CONTENT PRODUCTION]
                </h2>
                <ul className="space-y-2 sm:space-y-3 text-[#2F3A36] dark:text-[#808c80] font-medium text-sm sm:text-lg">
                  <li>Brand campaign production</li>
                  <li>Social media content creation & UGC content</li>
                  <li>Event photography & video recaps</li>
                  <li>Product photography</li>
                  <li>Videography & editing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4">
            <h3 className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl text-[#2F3A36] dark:text-[#808c80] font-extrabold">
              Looking for something specific?
            </h3>
            <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 bg-[#2F3A36] dark:bg-[#808c80] dark:text-[#2F3A36] text-[#808c80] rounded-full hover:opacity-90 transition-opacity font-extrabold text-sm sm:text-base">
              <Link to={`/contact`} className="group block">
                LET'S TALK
              </Link>
            </button>
            <p className="mt-4 sm:mt-6 text-[#2F3A36] dark:text-[#808c80] font-extrabold text-sm sm:text-base">
              We love a challenge.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesDesktop;
