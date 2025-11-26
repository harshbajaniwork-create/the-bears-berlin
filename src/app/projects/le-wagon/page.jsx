import React from "react";
import { projects } from "../../../constants";
import ScrollSmoothProvider from "../../../components/ScrollSmoothProvider";
import { useMediaQuery } from "react-responsive";
import Iphone16Mockup from "../../../components/iPhone16";
import { Link } from "@tanstack/react-router";
import ProjectFooter from "../../../components/ProjectFooter";

const LeWagonProject = () => {
  const project = projects.find((p) => p.id === "le-wagon");
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // Build array of all media items with their types
  const getMediaItems = () => {
    const items = [];
    const images = project?.images || [];
    const videos = project?.videos || [];

    // Pattern: image, video, video (or adapt based on what's available)
    if (images[0]) items.push({ type: "image", src: images[0], key: "img-0" });
    if (videos[0]) items.push({ type: "video", src: videos[0], key: "vid-0" });
    if (videos[1]) items.push({ type: "video", src: videos[1], key: "vid-1" });

    // Add any remaining images
    for (let i = 1; i < images.length; i++) {
      items.push({ type: "image", src: images[i], key: `img-${i}` });
    }

    // Add any remaining videos
    for (let i = 2; i < videos.length; i++) {
      items.push({ type: "video", src: videos[i], key: `vid-${i}` });
    }

    return items;
  };

  // Determine how many phones to show based on screen size
  const getPhonesToShow = () => {
    const allMedia = getMediaItems();

    if (isMobile) {
      return allMedia.slice(1, 3); // Show 1 phone on mobile
    } else if (isTablet) {
      return allMedia.slice(0, 2); // Show 2 phones on tablet
    } else {
      return allMedia.slice(0, 3); // Show 3 phones on desktop
    }
  };

  const phonesToShow = getPhonesToShow();

  return (
    <ScrollSmoothProvider>
      <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-16 pt-20 sm:pt-32 md:pt-40">
          {/* Header Section */}
          <div className="sm:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-black dark:text-white mb-0 leading-none">
                  {project?.name}.
                </h1>
              </div>
              <div className="lg:pt-24">
                <p className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white leading-relaxed max-w-7xl mb-8 md:mb-40">
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
                  {project?.name || "Le Wagon"}
                </span>
              </div>
            </div>
          </div>

          {/* The Project Section */}
          <div className="mb-6 md:mb-32 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-0">
                  [The Project]
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  We developed the entire influencer marketing framework from
                  scratch as well as handled every executional layer: creator
                  outreach, briefings, ongoing coordination, content feedback,
                  and final campaign reporting.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  We prioritised high-reach & high-performing creators with
                  strong and relevant communities and worked closely with them
                  to ensure authentic storytelling around Le Wagon’s offerings
                  and successful targeting of the diverse learner community.
                </p>
              </div>
            </div>
          </div>

          {/* Phone Mockups Section */}
          {phonesToShow.length > 0 && (
            <div className="mb-6 md:mb-32 max-w-6xl mx-auto">
              <div className="flex justify-center">
                <div
                  className={`
                    grid sm:flex gap-0 md:gap-14 lg:gap-0 justify-items-center -mt-32 sm:-mt-0 -mb-36 sm:-mb-0
                    ${isMobile ? "grid grid-cols-2" : ""}
                    ${isTablet ? "grid grid-cols-3" : ""}
                    ${
                      isDesktop
                        ? "grid grid-cols-4"
                        : "flex justify-center items-center"
                    }
                  `}
                >
                  {phonesToShow.map((phone, index) => (
                    <div
                      key={phone.key}
                      className="scale-50 md:scale-75 lg:scale-90"
                    >
                      {phone.type === "video" ? (
                        <Iphone16Mockup
                          videoId={phone.src}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="transform transition-transform duration-300"
                        />
                      ) : (
                        <Iphone16Mockup
                          imageSrc={phone.src}
                          loading={index === 0 ? "eager" : "lazy"}
                          className="transform transition-transform duration-300"
                        />
                      )}
                    </div>
                  ))}
                </div>
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
                  {project?.finalDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ProjectFooter
          prevProject="/projects/mirage"
          nextProject="/projects/manana"
        />
      </main>
    </ScrollSmoothProvider>
  );
};

export default LeWagonProject;
