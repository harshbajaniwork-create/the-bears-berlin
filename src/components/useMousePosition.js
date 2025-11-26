import { useState, useEffect } from "react";

export const useMousePosition = (ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const handleMouseMove = (event) => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1; // -1 to 1

      setMousePosition({ x, y });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsClicked(false);
      setIsDragging(false);
      setMousePosition({ x: 0, y: 0 });
    };

    const handleMouseDown = (event) => {
      event.preventDefault();
      setIsClicked(true);
      setIsDragging(false);
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsClicked(false);
      }
      setIsDragging(false);
    };

    const handleMouseMoveWithDrag = (event) => {
      handleMouseMove(event);
      if (isClicked && !isDragging) {
        setIsDragging(true);
      }
    };

    if (element) {
      element.addEventListener("mousemove", handleMouseMoveWithDrag);
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
      element.addEventListener("mousedown", handleMouseDown);
      element.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMoveWithDrag);
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
        element.removeEventListener("mousedown", handleMouseDown);
        element.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [ref, isClicked, isDragging]);

  return { mousePosition, isHovering, isClicked, isDragging };
};
