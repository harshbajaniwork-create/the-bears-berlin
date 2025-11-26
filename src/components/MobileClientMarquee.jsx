import React from "react";
import { motion } from "framer-motion";

const MobileClientMarquee = () => {
  return (
    <div className="w-full bg-transparent overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-2xl font-bold text-black dark:text-[#CDCBBC] mb-2">
          [OUR CLIENTS]
        </h2>
        <p className="text-sm font-medium text-black dark:text-[#CDCBBC]">
          Ensuring roaring success for 30+ brands and counting.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* First Row - Moving Left */}
        <div className="flex overflow-hidden mb-4">
          {/* First copy */}
          <motion.div
            className="flex-shrink-0"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src="/new-logos/logo.webp"
              alt="Client logos"
              className="h-12 w-auto dark:invert"
              draggable={false}
            />
          </motion.div>

          {/* Second copy for seamless loop */}
          <motion.div
            className="flex-shrink-0"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src="/new-logos/logo.webp"
              alt="Client logos"
              className="h-12 w-auto dark:invert"
              draggable={false}
            />
          </motion.div>

          {/* Third copy to ensure coverage */}
          <motion.div
            className="flex-shrink-0"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img
              src="/new-logos/logo.webp"
              alt="Client logos"
              className="h-14 w-auto dark:invert"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileClientMarquee;
