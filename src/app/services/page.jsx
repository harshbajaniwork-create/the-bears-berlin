import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import ServicesDesktop from "./components/ServiceDesktop";
import ServicesMobile from "./components/ServiceMobile";
import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";
import PageLoader from "../../components/PageLoader";
import { usePageLoader } from "../../hooks/usePageLoader";

const Services = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // lg breakpoint
  const [contentLoaded, setContentLoaded] = useState(false);

  const { isLoading } = usePageLoader([contentLoaded], 1100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLoader isLoading={isLoading}>
      {isDesktop ? <ServicesDesktop /> : <ServicesMobile />}
    </PageLoader>
  );
};

export default Services;
