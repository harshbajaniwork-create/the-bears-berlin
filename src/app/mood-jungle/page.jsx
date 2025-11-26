import { useMediaQuery } from "react-responsive";
import MoodJungleDesktop from "./components/MoodJungleDesktop";
import MoodJungleMobile from "./components/MoodJungleMobile";
import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";

const MoodJungle = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <ScrollSmoothProvider>
      {isDesktop ? <MoodJungleDesktop /> : <MoodJungleMobile />}
    </ScrollSmoothProvider>
  );
};

export default MoodJungle;
