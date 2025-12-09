"use client";

import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import MoodJungleGrid from "../../components/MoodJungleGrid";
import MoodJungleMobile from "../mood-jungle/components/MoodJungleMobile";
import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";
import PageLoader from "../../components/PageLoader";
import { usePageLoader } from "../../hooks/usePageLoader";

const MoodJungleAll = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [contentLoaded, setContentLoaded] = useState(false);

  const { isLoading } = usePageLoader([contentLoaded], 1300);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLoader isLoading={isLoading}>
      {isDesktop ? <MoodJungleGrid /> : <MoodJungleMobile />}
    </PageLoader>
  );
};

export default MoodJungleAll;
