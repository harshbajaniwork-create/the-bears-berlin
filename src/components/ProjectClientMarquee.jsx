import React from "react";
import { motion, useAnimation } from "framer-motion";

const ProjectClientMarquee = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  const handleDragStart = () => {
    controls.stop(); // pause animation on touch/drag
  };

  const handleDragEnd = () => {
    // resume marquee after drag ends
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  return (
    <div className="w-full py-8 bg-transparent overflow-hidden">
      <div className="relative">
        {/* First Row - Moving Left */}
        <div className="flex overflow-hidden mb-4">
          {/* First copy */}
          <motion.div
            className="flex-shrink-0 cursor-grab active:cursor-grabbing"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <img
              src="/new-logos/logo.webp"
              alt="Client logos"
              className="h-14 w-auto dark:invert"
              draggable={false}
            />
          </motion.div>

          {/* Second copy for seamless loop */}
          <motion.div
            className="flex-shrink-0 cursor-grab active:cursor-grabbing"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <img
              src="/new-logos/logo.webp"
              alt="Client logos"
              className="h-14 w-auto dark:invert"
              draggable={false}
            />
          </motion.div>

          {/* Third copy to ensure coverage */}
          <motion.div
            className="flex-shrink-0 cursor-grab active:cursor-grabbing"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <img
              src="/new-logos/logo.webp"
              alt="Client logos"
              className="h-20 w-auto dark:invert"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectClientMarquee;
