import { useState, useEffect } from "react";

const ThemeToggle = ({ position = "center" }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Determine size based on viewport
  const toggleSize = position === "center" ? "w-14 h-7" : "w-10 h-5";
  const knobSize = position === "center" ? "w-6 h-6" : "w-4 h-4";
  const translateX = position === "center" ? "translate-x-6" : "translate-x-5";
  const iconSize = position === "center" ? "h-6 w-6" : "h-4 w-4";

  // Determine positioning class based on prop
  let positionClass = "";
  if (position === "center") {
    // Centered position logic is handled by parent component
    positionClass = "";
  } else if (position === "right") {
    positionClass = ""; // Parent handles positioning for mobile
  }

  return (
    <div className={positionClass}>
      <div
        onClick={() => setDarkMode(!darkMode)}
        className={`${toggleSize} flex items-center rounded-full p-1 cursor-pointer
              ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
      >
        <div
          className={`bg-white ${knobSize} rounded-full shadow-md transform transition-transform duration-300
                ${darkMode ? translateX : "translate-x-0"}`}
        >
          {darkMode ? (
            <svg
              className={`${iconSize} text-gray-700`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              className={`${iconSize} text-yellow-500`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
