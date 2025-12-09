import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import AboutDesktop from "./components/AboutDesktop";
import AboutMobile from "./components/AboutMobile";
import PageLoader from "../../components/PageLoader";
import { usePageLoader } from "../../hooks/usePageLoader";

const About = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [contentLoaded, setContentLoaded] = useState(false);

  const { isLoading } = usePageLoader([contentLoaded], 1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLoader isLoading={isLoading}>
      {isDesktop ? <AboutDesktop /> : <AboutMobile />}
    </PageLoader>
  );
};

export default About;
