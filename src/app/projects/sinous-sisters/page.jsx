import React, { useEffect } from "react";
import { projects } from "../../../constants";
import ScrollSmoothProvider from "../../../components/ScrollSmoothProvider";
import { useMediaQuery } from "react-responsive";
import Iphone16Mockup from "../../../components/iPhone16";
import { Link } from "@tanstack/react-router";
import ProjectFooter from "../../../components/ProjectFooter";

const SinousSistersProject = () => {
  const project = projects.find((p) => p.id === "sinous-sisters");

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    const handleIframeMouseEnter = () => {
      document.body.style.cursor = "default";
    };

    const handleIframeMouseLeave = () => {
      document.body.style.cursor = "none";
    };

    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      iframe.addEventListener("mouseenter", handleIframeMouseEnter);
      iframe.addEventListener("mouseleave", handleIframeMouseLeave);
    });

    return () => {
      iframes.forEach((iframe) => {
        iframe.removeEventListener("mouseenter", handleIframeMouseEnter);
        iframe.removeEventListener("mouseleave", handleIframeMouseLeave);
      });
    };
  }, []);

  return (
    <ScrollSmoothProvider>
      <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        {/* Main container with max-width constraint */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-16 pt-20 sm:pt-32 md:pt-40">
          {/* Header Section */}
          <div className="sm:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <h1 className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-black dark:text-white mb-0 leading-none">
                  {project?.name || "Sinous Sisters"}.
                </h1>
              </div>
              <div className="lg:pt-24">
                <p className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white leading-relaxed max-w-7xl mb-40">
                  {project?.tagline || "Digital Fashion Experience"}
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
              <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-4 md:pb-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  Timeline
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-500 dark:text-gray-400">
                  {project?.timeline}
                </p>
              </div>
            </div>
          </div>

          {/* Brand Logo */}
          <div className="flex justify-center mb-16 md:mb-24">
            <div className="h-12 sm:h-16 md:h-20 flex items-center">
              <img
                src={project?.logo}
                alt={`${project?.name || "Sinous Sisters"} logo`}
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
                  {project?.name || "Sinous Sisters"}
                </span>
              </div>
            </div>
          </div>

          {/* Responsive Phone Section: Show up to 3 videos together */}
          {project?.videos && project.videos.length > 0 && (
            <div className="mb-20 md:mb-32 w-full">
              <div className="flex justify-center items-center">
                <div
                  className={`
                    flex justify-center items-center gap-4 md:gap-8 lg:gap-12 xl:gap-16
                    ${isMobile ? "flex-col" : "flex-row"}
                    max-w-full overflow-hidden
                  `}
                >
                  {project.videos
                    .slice(0, 3)
                    .filter(Boolean)
                    .map((videoId, index) => (
                      <div
                        key={`sinous-phone-${index}`}
                        className={`
                        flex-shrink-0
                        ${isMobile ? "scale-[0.6] sm:scale-[0.7]" : ""}
                        ${isTablet ? "scale-[0.7] md:scale-[0.8]" : ""}
                        ${
                          isDesktop
                            ? "scale-[0.8] lg:scale-90 xl:scale-100"
                            : ""
                        }
                      `}
                      >
                        <Iphone16Mockup
                          videoId={videoId}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="transform transition-transform duration-300"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* The Project Section */}
          <div className="mb-20 md:mb-32 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-0">
                  [The Project]
                </h2>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  {project?.projectDescription ||
                    "An innovative digital fashion experience that bridges the gap between traditional fashion and modern technology. Our approach focused on creating immersive visual narratives that showcase the brand's unique aesthetic and contemporary vision."}
                </p>
              </div>
            </div>
          </div>

          {/* Phones already shown above; no additional inline videos below */}

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
                    "The project successfully established a strong digital presence for the brand, creating an engaging platform that resonates with modern fashion enthusiasts. Our comprehensive approach resulted in a cohesive brand experience that effectively communicates the brand's innovative spirit and aesthetic vision."}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProjectFooter
          prevProject="/projects/fabletics"
          nextProject="/projects/ginja"
        />
      </main>
    </ScrollSmoothProvider>
  );
};

export default SinousSistersProject;
