import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { projects } from "./index";
import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";
import ProjectClientMarquee from "../../components/ProjectClientMarquee";
import PageLoader from "../../components/PageLoader";
import { usePageLoader } from "../../hooks/usePageLoader";

const Projects = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  const { isLoading } = usePageLoader([imagesLoaded, contentLoaded], 1200);

  useEffect(() => {
    // Track image loading
    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    const checkAllImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkAllImagesLoaded();
      } else {
        img.addEventListener("load", checkAllImagesLoaded);
        img.addEventListener("error", checkAllImagesLoaded);
      }
    });

    // If no images, mark as loaded
    if (images.length === 0) {
      setImagesLoaded(true);
    }

    // Content loading timer
    const contentTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 600);

    return () => {
      clearTimeout(contentTimer);
      images.forEach((img) => {
        img.removeEventListener("load", checkAllImagesLoaded);
        img.removeEventListener("error", checkAllImagesLoaded);
      });
    };
  }, []);

  return (
    <PageLoader isLoading={isLoading}>
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black">
        {/* Container with max width to prevent content from getting too wide */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 pt-20 lg:pt-32">
          {/* Header Section */}
          <div className="mb-12 lg:mb-20 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
            {/* Large Projects Title */}
            <div className="flex-shrink-0">
              <h1 className="font-medium text-[#767676] dark:text-gray-300 text-4xl sm:text-6xl lg:text-8xl xl:text-9xl ">
                Projects.
              </h1>
            </div>

            {/* Right side content */}
            <div className="lg:max-w-md lg:pt-8">
              <div className="text-sm sm:text-base lg:text-lg font-medium transition-colors duration-300 text-black dark:text-white">
                <span className="text-orange-600 dark:text-lime-400 block mb-3">
                  (2022-25©)
                </span>
                <p className="leading-relaxed text-[#767676] dark:text-gray-300 text-xl font-medium">
                  From cubs to the kings of the jungle, we’ve guided brands
                  through the wilderness of marketing with strategy, creativity,
                  and care. These are some of our journeys.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <ProjectClientMarquee />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block"
              >
                <div key={project.id} className="group cursor-pointer">
                  {/* Project Info Header */}
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 sm:p-6 mb-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <h3 className="text-black dark:text-white text-base sm:text-lg lg:text-xl font-bold">
                        {project.name}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                        <p className="text-[#767676] dark:text-gray-400 text-sm lg:text-base font-medium truncate max-w-[200px]">
                          {project.scopeOfWork}
                        </p>
                        <span className="text-[#767676] dark:text-gray-500 text-sm lg:text-base font-medium">
                          ({project.year})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Image Container */}
                  <div className="relative overflow-hidden rounded-lg border-4 border-gray-100 dark:border-gray-800">
                    {/* Main Image */}
                    <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:brightness-75"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />

                      {/* Fallback gradient */}
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center transition-all duration-500 group-hover:blur-sm group-hover:brightness-50"
                        style={{ display: "none" }}
                      >
                        <span className="text-white text-xl font-bold opacity-30">
                          {project.name}
                        </span>
                      </div>

                      {/* Hover Overlay with Logo - Desktop only */}
                      <div className="absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hidden lg:flex">
                        {project.id === "le-wagon" ? (
                          <img
                            src={project.logo}
                            alt={`${project.name} logo`}
                            className="w-1/3 h-1/3 object-contain invert"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                        ) : (
                          <img
                            src={project.logo}
                            alt={`${project.name} logo`}
                            className="w-1/3 h-1/3 object-contain filter brightness-0 invert"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                        )}

                        {/* Fallback text logo */}
                        <div
                          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
                          style={{ display: "none" }}
                        >
                          <span className="text-white font-bold text-lg">
                            {project.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageLoader>
  );
};

export default Projects;
