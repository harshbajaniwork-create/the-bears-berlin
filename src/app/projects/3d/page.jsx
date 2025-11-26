import { useMemo } from "react";
import ScrollSmoothProvider from "../../../components/ScrollSmoothProvider";
import ProfessionalGallery from "../../../components/ProfessionalGallery";
import { threeDItems } from "../../../constants";
import { Link } from "@tanstack/react-router";
import ProjectFooter from "../../../components/ProjectFooter";

function shuffleStable(list) {
  // Fisher–Yates shuffle, run once per mount via useMemo
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ThreeDProject = () => {
  // Shuffle items once to avoid category clustering per lane
  const shuffledItems = useMemo(() => shuffleStable(threeDItems), []);

  return (
    <ScrollSmoothProvider>
      <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-16 pt-20 sm:pt-32 md:pt-40">
          {/* Header Section (consistent with other projects) */}
          <div className="sm:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-black dark:text-white mb-0 leading-none">
                  3D.
                </h1>
              </div>
              <div className="lg:pt-24">
                <div className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white leading-relaxed max-w-7xl space-y-2">
                  <p>Products. Spaces. Characters.</p>
                  <p>You name it – we build it in 3D.</p>
                  <p>High-quality, precise, real enough to walk around</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional 3D Gallery */}
          <section className="mt-12">
            <ProfessionalGallery items={shuffledItems} />
          </section>
        </div>
        <ProjectFooter
          prevProject="/projects/motion"
          nextProject="/projects/nike-jilou"
        />
      </main>
    </ScrollSmoothProvider>
  );
};

export default ThreeDProject;
