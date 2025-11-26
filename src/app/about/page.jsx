import { useMediaQuery } from "react-responsive";
import AboutDesktop from "./components/AboutDesktop";
import AboutMobile from "./components/AboutMobile";

const About = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return <>{isDesktop ? <AboutDesktop /> : <AboutMobile />}</>;
};

export default About;
