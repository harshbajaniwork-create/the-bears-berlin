import { Outlet, useLocation } from "@tanstack/react-router";
import Header from "./Header";
import { ParallaxProvider } from "react-scroll-parallax";
import GlobalCursorProvider from "./GlobalCursorProvider";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const RootComponent = () => {
  const location = useLocation();

  // Always start pages at the top on route changes (prevents keeping previous scroll)
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only auto-scroll when the pathname changes (ignore hash-only changes)
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  // Get current route's cursor colors or use defaults
  const currentRoute = location.pathname;

  // Define cursor colors based on current route
  const getCursorColors = (pathname) => {
    switch (pathname) {
      case "/services":
        return {
          light: "#2F3A36",
          dark: "#808C80",
        };
      case "/about":
        return {
          light: "#806456",
          dark: "#7E3F0F",
        };
      case "/contact":
        return {
          dark: "#cdccba",
          light: "#4f473c",
        };
      default:
        return {
          light: "#B66613",
          dark: "#D0FC2D",
        };
    }
  };

  const cursorColors = getCursorColors(currentRoute);

  // Remove the ScrollSmoother creation from here - let ScrollSmoothProvider handle it

  return (
    <ParallaxProvider>
      <GlobalCursorProvider colors={cursorColors}>
        <div className="min-h-screen">
          <ParallaxProvider>
            <Header />
            <main>
              <Outlet />
            </main>
          </ParallaxProvider>
        </div>
      </GlobalCursorProvider>
    </ParallaxProvider>
  );
};

export default RootComponent;
