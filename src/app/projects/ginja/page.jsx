import React, { useEffect, useRef } from "react";
import { projects } from "../../../constants";
import ScrollSmoothProvider from "../../../components/ScrollSmoothProvider";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { Model as GinjaModel1 } from "./components/Ginja-1";
import { Model as GinjaModel2 } from "./components/Ginja-2";
import { Model as GinjaModel3 } from "./components/Ginja-3";
import { useMousePosition } from "../../../components/useMousePosition";
import { Link } from "@tanstack/react-router";
import ProjectFooter from "../../../components/ProjectFooter";

const GinjaProject = () => {
  const project = projects.find((p) => p.id === "ginja");

  // Refs for each canvas container
  const canvasRef1 = useRef();
  const canvasRef2 = useRef();
  const canvasRef3 = useRef();

  // Mouse position hooks for each model
  const {
    mousePosition: mousePos1,
    isHovering: isHovering1,
    isClicked: isClicked1,
    isDragging: isDragging1,
  } = useMousePosition(canvasRef1);
  const {
    mousePosition: mousePos2,
    isHovering: isHovering2,
    isClicked: isClicked2,
    isDragging: isDragging2,
  } = useMousePosition(canvasRef2);
  const {
    mousePosition: mousePos3,
    isHovering: isHovering3,
    isClicked: isClicked3,
    isDragging: isDragging3,
  } = useMousePosition(canvasRef3);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-16 pt-20 sm:pt-32 md:pt-40">
          {/* Header Section */}
          <div className="sm:mb-12">
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
                alt={`$project?.name`}
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
                  {project?.name}
                </span>
              </div>
            </div>
          </div>

          {/* 3D Models Section */}
          <div className="mb-6 md:mb-32 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {/* Model 1 */}
              <div
                ref={canvasRef1}
                className="w-full aspect-[3/4] rounded-lg md:rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                <Canvas
                  camera={{ position: [0, 0, 4], fov: 40 }}
                  dpr={[1, 2]}
                  className="mt-16"
                >
                  <ambientLight intensity={0.7} />
                  <directionalLight position={[5, 5, 5]} intensity={0.9} />
                  <Center>
                    <GinjaModel1
                      scale={1.4}
                      position={[0, 0, 0]}
                      mousePosition={mousePos1}
                      isHovering={isHovering1}
                      isClicked={isClicked1}
                      isDragging={isDragging1}
                    />
                  </Center>
                  <OrbitControls
                    enabled={true}
                    enablePan={false}
                    enableZoom={false}
                    enableDamping={true}
                    dampingFactor={0.05}
                    autoRotate={false}
                    makeDefault
                  />
                </Canvas>
              </div>

              {/* Model 2 */}
              <div
                ref={canvasRef2}
                className="w-full aspect-[3/4] rounded-lg md:rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                <Canvas
                  camera={{ position: [0, 0, 4], fov: 40 }}
                  dpr={[1, 2]}
                  className="mt-16"
                >
                  <ambientLight intensity={0.7} />
                  <directionalLight position={[5, 5, 5]} intensity={0.9} />
                  <Center>
                    <GinjaModel2
                      scale={1.4}
                      position={[0, 0, 0]}
                      mousePosition={mousePos2}
                      isHovering={isHovering2}
                      isClicked={isClicked2}
                      isDragging={isDragging2}
                    />
                  </Center>
                  <OrbitControls
                    enabled={true}
                    enablePan={false}
                    enableZoom={false}
                    enableDamping={true}
                    dampingFactor={0.05}
                    autoRotate={false}
                    makeDefault
                  />
                </Canvas>
              </div>

              {/* Model 3 */}
              <div
                ref={canvasRef3}
                className="w-full aspect-[3/4] rounded-lg md:rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                <Canvas
                  camera={{ position: [0, 0, 4], fov: 40 }}
                  dpr={[1, 2]}
                  className="mt-16"
                >
                  <ambientLight intensity={0.7} />
                  <directionalLight position={[5, 5, 5]} intensity={0.9} />
                  <Center>
                    <GinjaModel3
                      scale={1.4}
                      position={[0, 0, 0]}
                      mousePosition={mousePos3}
                      isHovering={isHovering3}
                      isClicked={isClicked3}
                      isDragging={isDragging3}
                    />
                  </Center>
                  <OrbitControls
                    enabled={true}
                    enablePan={false}
                    enableZoom={false}
                    enableDamping={true}
                    dampingFactor={0.05}
                    autoRotate={false}
                    makeDefault
                  />
                </Canvas>
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
              <div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black dark:text-white leading-relaxed">
                  {project?.projectDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 md:mb-32 max-w-6xl mx-auto">
            <div className="relative aspect-video overflow-hidden rounded-lg md:rounded-xl bg-gray-100 dark:bg-gray-800">
              <iframe
                src={`https://customer-64sz73htfhb823gb.cloudflarestream.com/e48b2fe14ba8aa4803df1da52caa1e39/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-64sz73htfhb823gb.cloudflarestream.com%2Fba1cd9ba20f3f861cac2d950fb266554%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600`}
                loading="eager"
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                className="hover:cursor-default rounded-lg md:rounded-xl"
                allowFullScreen={true}
              />
            </div>
          </div>

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
          prevProject="/projects/afrohealth"
          nextProject="/projects/motion"
        />
      </main>
    </ScrollSmoothProvider>
  );
};

export default GinjaProject;
