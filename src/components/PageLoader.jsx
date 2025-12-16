import React from "react";
import { motion } from "framer-motion";

const PageLoader = ({ isLoading = true, children }) => {
  if (!isLoading) {
    return children;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center space-y-8">
        {/* Animated Logo/Brand */}
        <motion.div
          className="text-4xl md:text-6xl font-bold text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/footerLogo.webp"
            alt="logo"
            className="w-96 h-96 object-contain dark:invert"
          />
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-0.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-black dark:bg-white rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
};

export default PageLoader;
