import React from "react";
import { projects } from "../../../constants";
import ScrollSmoothProvider from "../../../components/ScrollSmoothProvider";
import ProjectFooter from "../../../components/ProjectFooter";
import { useMediaQuery } from "react-responsive";
import Iphone16Mockup from "../../../components/iPhone16";

const MananaProject = () => {
  const project = projects.find((p) => p.id === "manana");

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const itemsToShow = isMobile ? 2 : isTablet ? 3 : 4;

  return (
    <ScrollSmoothProvider>
      <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        {/* Main container with max-width constraint */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-16 pt-20 sm:pt-32 md:pt-40">
          {/* Header Section */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <h1 className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-black dark:text-white mb-0 leading-none">
                  {project.name}.
                </h1>
              </div>
              <div className="lg:pt-24">
                <p className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white leading-relaxed max-w-7xl mb-40">
                  {project.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="mb-16 md:mb-24 max-w-7xl">
            <div className="space-y-6 md:space-y-8">
              <div className="flex justify-between items-center border-b border-t pt-6 border-gray-300 dark:border-gray-600 pb-4 md:pb-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  Year
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  {project.year}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-4 md:pb-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  Industry
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  {project.industry}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-4 md:pb-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  Scope of work
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  {project.scopeOfWork}
                </p>
              </div>
            </div>
          </div>

          {/* Brand Logo */}
          <div className="flex justify-center mb-16 md:mb-24">
            <div className="h-12 sm:h-16 md:h-20 flex items-center">
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="h-full scale-125 object-contain filter-none dark:invert transition-all duration-300"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="h-12 sm:h-16 md:h-20 w-20 sm:w-24 md:w-32 bg-black dark:bg-white rounded flex items-center justify-center"
                style={{ display: "none" }}
              >
                <span className="text-white dark:text-black font-bold text-sm sm:text-base md:text-xl">
                  {project.name}
                </span>
              </div>
            </div>
          </div>

          {/* First Four Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-32 max-w-6xl mx-auto">
            {project.productImages?.slice(0, 4).map((image, index) => (
              <div
                key={index + 2}
                className="relative aspect-[16/9] overflow-hidden rounded-lg md:rounded-xl bg-gray-100 dark:bg-gray-800"
              >
                <img
                  src={image}
                  alt={`${project.name} product ${index + 3}`}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg md:rounded-xl"
                  loading="lazy"
                  decoding="async"
                  style={{
                    maxWidth: "100%",
                    imageRendering: "high-quality",
                  }}
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1440" viewBox="0 0 1920 1440"><rect width="1920" height="1440" fill="%23f3f4f6"/><text x="960" y="720" text-anchor="middle" fill="%236b7280" font-family="Arial" font-size="24">${
                      project.name
                    } Image ${index + 3}</text></svg>`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* The Project Section */}
          <div className="mb-6 md:mb-32 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-0">
                  [The Project]
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  The goal was to build a digital brand that captures the energy
                  of Buenos Aires: its mix of tradition, nightlife, art, and
                  rhythm, while keeping it visually distinct and editorially
                  sharp. We built MAÑANA’s brand identity on bold colour
                  contrasts, minimal typography, and vivid imagery. The colour
                  palette draws inspiration from Buenos Aires itself, sunlit
                  yellows and electric blues that nod to Argentina’s national
                  colours, while bringing a fresh and vibrant look to the feed.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  We approached MAÑANA’s Instagram not as a static feed, but as
                  a living cultural map evolving with the rhythm of the city.
                  Our editorial strategy blended timely stories, new openings,
                  emerging designers, and cultural highlights, with recurring
                  formats like Where to Go and Where to Dance. These series
                  became the brand’s signature, building anticipation and
                  genuine engagement within the community.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  Strategically chosen collaborations with cultural institutions
                  and local partners added reach, depth and relevance,
                  strengthening MAÑANA’s role at the centre of Buenos Aires’
                  creative scene.
                </p>
              </div>
            </div>
          </div>

          {/* Remaining Two Images */}

          {project?.videos?.length > 0 && (
            <div className="mb-6 md:mb-32 max-w-6xl mx-auto">
              <div
                className={`
        grid sm:flex gap-0 md:gap-14 lg:gap-0 justify-items-center -mt-32 sm:-mt-0 -mb-36 sm:-mb-0
        ${isMobile ? "grid-cols-2" : ""}
        ${isTablet ? "grid-cols-3" : ""}
        ${isDesktop ? "justify-center items-center" : ""}
      `}
              >
                {project.videos.slice(0, itemsToShow).map((videoId, i) => (
                  <div key={i} className="scale-50 md:scale-75 lg:scale-90">
                    <Iphone16Mockup
                      videoId={videoId}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="transform transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Final Section */}
          <div className="max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-0">
                  [Result]
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  The new identity struck a chord with MAÑANA’s audience,
                  leading to strong and steady organic growth. Within the first
                  month after launch, over 1,600 new followers joined the
                  community, driven purely by authentic engagement and word of
                  mouth.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  This growth proved that the brand’s visual and editorial
                  language truly resonated with Buenos Aires’ creative crowd.
                  More than visibility, it built a community, and found its
                  distinctive voice in the wilderness of the digital world.
                </p>
              </div>
            </div>
          </div>
          {project?.videos?.length > 0 && (
            <div className="mb-6 max-w-6xl mx-auto">
              <div
                className={`
        grid sm:flex gap-0 md:gap-14 lg:gap-0 justify-items-center -mt-32 sm:-mt-0 -mb-36 sm:-mb-0
        ${isMobile ? "grid-cols-2" : ""}
        ${isTablet ? "grid-cols-3" : ""}
        ${isDesktop ? "justify-center items-center" : ""}
      `}
              >
                {project.videos.slice(4, 6).map((videoId, i) => (
                  <div key={i} className="scale-50 md:scale-75 lg:scale-90">
                    <Iphone16Mockup
                      videoId={videoId}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="transform transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <ProjectFooter
          prevProject="/projects/le-wagon"
          nextProject="/projects/fabletics"
        />
      </main>
    </ScrollSmoothProvider>
  );
};

export default MananaProject;
