"use client";

import { useMediaQuery } from "react-responsive";
import MoodJungleGrid from "../../components/MoodJungleGrid";
import MoodJungleMobile from "../mood-jungle/components/MoodJungleMobile";
import ScrollSmoothProvider from "../../components/ScrollSmoothProvider";

const MoodJungleAll = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return <>{isDesktop ? <MoodJungleGrid /> : <MoodJungleMobile />}</>;
};

export default MoodJungleAll;
