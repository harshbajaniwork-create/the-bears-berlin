import { useEffect, useRef, useState } from "react";
import { GiFlatPawPrint } from "react-icons/gi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const GlobalCursorProvider = ({ children, colors }) => {
  const { light = "#B66613", dark = "#D0FC2D" } = colors || {};
  const cursorRef = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Watch for theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    // Check initial theme
    checkTheme();

    // Create observer to watch for class changes on html element
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;

    // Set initial position off-screen
    gsap.set(cursor, {
      x: -100,
      y: -100,
      scale: 1,
      opacity: 0,
    });

    const onMouseMove = (e) => {
      if (!cursor) return;

      // Check if we're hovering over an iframe or input
      const target = e.target;
      const isIframe = target.tagName.toLowerCase() === "iframe";
      const isInput = ["input", "textarea", "select", "button"].includes(
        target.tagName.toLowerCase()
      );

      if (isIframe || isInput) {
        gsap.to(cursor, {
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
        });
      } else {
        gsap.to(cursor, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
        });
      }

      // Update position smoothly
      gsap.to(cursor, {
        x: e.clientX - 72, // Half of cursor width (144px / 2)
        y: e.clientY - 72, // Half of cursor height (144px / 2)
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
      });
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0.5,
        duration: 0.2,
      });
      setIsVisible(false);
    };

    // Event listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Handle hover effects for interactive elements
    const handleMouseEnterInteractive = () => {
      gsap.to(cursor, {
        scale: 1.2,
        duration: 0.2,
      });
    };

    const handleMouseLeaveInteractive = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });
    };

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnterInteractive);
      element.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnterInteractive);
        element.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {children}
      {/* Global Cursor - Only show on desktop */}
      <div className="hidden md:block">
        <div
          ref={cursorRef}
          className="pointer-events-none fixed top-0 left-0 w-36 h-36 z-[9999] transition-colors duration-200"
        >
          {/* Blurred circle background */}
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-85 transition-colors duration-200"
            style={{
              backgroundColor: isDark ? dark : light,
            }}
          />
          {/* Sharp pointer icon */}
          <GiFlatPawPrint
            className="absolute w-6 h-6 -rotate-45 text-white dark:text-black transition-colors duration-200"
            style={{
              top: "72px",
              left: "72px",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default GlobalCursorProvider;
