import { useState, useEffect } from "react";

export const usePageLoader = (dependencies = [], minLoadingTime = 1000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStartTime] = useState(Date.now());

  useEffect(() => {
    const checkLoadingComplete = async () => {
      // Wait for all dependencies to be ready
      const allDependenciesReady = dependencies.every((dep) => {
        if (typeof dep === "boolean") return dep;
        if (typeof dep === "function") return dep();
        if (dep && typeof dep.then === "function") return false; // Still a promise
        return !!dep; // Truthy check for other values
      });

      if (allDependenciesReady) {
        const elapsedTime = Date.now() - loadingStartTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        // Ensure minimum loading time for better UX
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      }
    };

    checkLoadingComplete();
  }, dependencies);

  return { isLoading, setIsLoading };
};

export default usePageLoader;
