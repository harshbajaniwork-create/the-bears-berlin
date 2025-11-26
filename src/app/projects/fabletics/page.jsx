import React from "react";
import { projects } from "../../../constants";
import Iphone16Mockup from "../../../components/iPhone16";
import ScrollSmoothProvider from "../../../components/ScrollSmoothProvider";
import { useMediaQuery } from "react-responsive";
import { Link } from "@tanstack/react-router";
import ProjectFooter from "../../../components/ProjectFooter";

const FableticsProject = () => {
  const project = projects.find((p) => p.id === "fabletics");

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
                  {project?.name}.
                </h1>
              </div>
              <div className="lg:pt-24">
                <p className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white leading-relaxed max-w-7xl mb-40">
                  {project?.tagline}
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
                  {project?.year}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-4 md:pb-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  Industry
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  {project?.industry}
                </p>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-4 md:pb-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  Scope of work
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  {project?.scopeOfWork}
                </p>
              </div>
            </div>
          </div>

          {/* Brand Logo */}
          <div className="flex justify-center mb-16 md:mb-24">
            <div className="h-12 sm:h-16 md:h-20 flex items-center">
              <img
                src={project?.logo}
                alt={`${project?.name} logo`}
                className="h-full object-contain filter-none dark:invert transition-all duration-300"
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
                  {project?.name || "Fabletics"}
                </span>
              </div>
            </div>
          </div>

          {project?.productImages && project.productImages.length > 0 && (
            <div className="md:mb-32 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 md:gap-6 lg:gap-8">
                {project.productImages.map((imageSrc, index) => (
                  <div
                    key={index}
                    className=" overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
                  >
                    <img
                      src={imageSrc}
                      alt={`${project.name} product ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* First iPhone Mockups Section */}
          {project?.videos?.length > 0 && (
            <div className="md:mb-32 max-w-6xl mx-auto">
              <div
                className={`
        grid gap-0 md:gap-14 lg:gap-36 justify-items-center -mt-32 sm:-mt-0 -mb-36 sm:-mb-0
        ${isMobile ? "grid-cols-2" : ""}
        ${isTablet ? "grid-cols-3" : ""}
        ${isDesktop ? "grid-cols-4" : ""}
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

          {/* The Project Section */}
          <div className="md:mb-32 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-0">
                  [The Project]
                </h2>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  {project?.projectDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Remaining iPhone Mockups Section */}
          {project?.videos.length > itemsToShow && (
            <div className="md:mb-32 max-w-6xl mx-auto">
              <div
                className={`
        grid gap-0 md:gap-14 lg:gap-36 justify-items-center -mt-32 sm:-mt-0 -mb-36 sm:-mb-0
        ${isMobile ? "grid-cols-2" : ""}
        ${isTablet ? "grid-cols-3" : ""}
        ${isDesktop ? "grid-cols-4" : ""}
      `}
              >
                {project.videos
                  .slice(itemsToShow, itemsToShow * 2)
                  .map((videoId, i) => (
                    <div key={i} className="scale-50 md:scale-75 lg:scale-90">
                      <Iphone16Mockup
                        videoId={videoId}
                        loading="lazy"
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
              <div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  {project?.finalDescription ||
                    "The redesigned mobile experience successfully increased user engagement and conversion rates while establishing a stronger brand presence in the competitive athletic wear market. Our user-centered design approach resulted in a seamless shopping experience that resonates with active lifestyle enthusiasts."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProjectFooter
          prevProject="/projects/manana"
          nextProject="/projects/afrohealth"
        />
      </main>
    </ScrollSmoothProvider>
  );
};

export default FableticsProject;
