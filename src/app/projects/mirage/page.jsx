import React from "react";
import { projects } from "../../../constants";
import ScrollSmoothProvider from "../../../components/ScrollSmoothProvider";
import { Link } from "@tanstack/react-router";
import ProjectFooter from "../../../components/ProjectFooter";

const MirageProject = () => {
  const project = projects.find((p) => p.id === "mirage");

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
            <div className="h-16 sm:h-20 md:h-24 flex items-center">
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="h-full object-contain filter-none dark:invert transition-all duration-300"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="h-16 sm:h-20 md:h-24 w-32 sm:w-40 md:w-48 bg-black dark:bg-white rounded flex items-center justify-center"
                style={{ display: "none" }}
              >
                <span className="text-white dark:text-black font-bold text-lg sm:text-xl md:text-2xl">
                  {project.name}
                </span>
              </div>
            </div>
          </div>

          {/* First Two Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-32 max-w-6xl mx-auto">
            {project.productImages.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-lg md:rounded-xl"
              >
                <img
                  src={image}
                  alt={`${project.name} product ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg md:rounded-xl hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23f3f4f6"/><text x="400" y="300" text-anchor="middle" fill="%236b7280" font-family="Arial" font-size="18">${
                      project.name
                    } Image ${index + 1}</text></svg>`;
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
              <div className="flex flex-col gap-6">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  The logo became the starting point: a bespoke typeface where
                  each letter carries the subtle contour of a nose, most visible
                  in the “i.” This detail connected the brand directly to the
                  craft of perfumery while defining its distinctive visual
                  character and exclusivity.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  The visual system was guided by the principles of minimalism,
                  naturality, and material authenticity. We worked with natural
                  textures – stone, sand, leather, metal, and wood – to bring a
                  tactile, almost physical sense of scent into the design.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  The color palette was built on natural, neutral tones: beige,
                  white, and black form the foundation, complemented by
                  earth-inspired hues for each fragrance line. This structure
                  allows easy navigation across collections while keeping the
                  brand cohesive and distinct.
                </p>
              </div>
            </div>
          </div>

          {/* Remaining Four Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-32 max-w-6xl mx-auto">
            {project.productImages.slice(4, 8).map((image, index) => (
              <div
                key={index + 2}
                className="aspect-[4/3] overflow-hidden rounded-lg md:rounded-xl"
              >
                <img
                  src={image}
                  alt={`${project.name} product ${index + 3}`}
                  className="w-full h-full object-cover rounded-lg md:rounded-xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23f3f4f6"/><text x="400" y="300" text-anchor="middle" fill="%236b7280" font-family="Arial" font-size="18">${
                      project.name
                    } Image ${index + 3}</text></svg>`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Final Section */}
          <div className="max-w-6xl mb-6 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-0">
                  [Result]
                </h2>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  {project.finalDescription}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-32 max-w-6xl mx-auto">
            {project.productImages.slice(8, 10).map((image, index) => (
              <div
                key={index + 2}
                className="aspect-[4/3] overflow-hidden rounded-lg md:rounded-xl"
              >
                <img
                  src={image}
                  alt={`${project.name} product ${index + 3}`}
                  className="w-full h-full object-cover rounded-lg md:rounded-xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23f3f4f6"/><text x="400" y="300" text-anchor="middle" fill="%236b7280" font-family="Arial" font-size="18">${
                      project.name
                    } Image ${index + 3}</text></svg>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <ProjectFooter
          prevProject="/projects/zalando-nike"
          nextProject="/projects/le-wagon"
        />
      </main>
    </ScrollSmoothProvider>
  );
};

export default MirageProject;
