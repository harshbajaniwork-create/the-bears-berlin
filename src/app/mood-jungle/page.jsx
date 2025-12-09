import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import MoodJungleDesktop from "./components/MoodJungleDesktop";
import MoodJungleMobile from "./components/MoodJungleMobile";
import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";
import PageLoader from "../../components/PageLoader";
import { usePageLoader } from "../../hooks/usePageLoader";

const MoodJungle = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [contentLoaded, setContentLoaded] = useState(false);

  const { isLoading } = usePageLoader([contentLoaded], 1200);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLoader isLoading={isLoading}>
      {isDesktop ? <MoodJungleDesktop /> : <MoodJungleMobile />}
    </PageLoader>
  );
};

export default MoodJungle;
