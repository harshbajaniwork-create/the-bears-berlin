import ScrollSmoothProvider from "../../../components/ScrollSmoothProvider";
import ProjectFooter from "../../../components/ProjectFooter";
import MotionGallery from "../../../components/MotionGallery";
import { motionGallery } from "../../../constants";

const MotionProject = () => {
  const items = motionGallery;
  return (
    <ScrollSmoothProvider>
      <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-16 pt-20 sm:pt-32 md:pt-40">
          {/* Header Section (consistent with other projects) */}
          <div className="sm:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-black dark:text-white mb-0 leading-none">
                  Film, Video & Motion
                </h1>
              </div>
              <div className="lg:pt-24">
                <div className="text-base sm:text-lg md:text-xl font-medium text-black dark:text-white leading-relaxed max-w-7xl space-y-2">
                  <p>Products. Campaigns. Stories.</p>
                  <p>You name it, we make it move.</p>
                  <p>
                    From social scrolls to cinema screens, we leave no frame
                    untamed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Motion Gallery */}
          <section className="mt-12">
            <MotionGallery videoIds={items} />
          </section>
        </div>
        <ProjectFooter
          prevProject="/projects/ginja"
          nextProject="/projects/3d"
        />
      </main>
    </ScrollSmoothProvider>
  );
};

export default MotionProject;
