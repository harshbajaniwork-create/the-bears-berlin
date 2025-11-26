import { Link } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { IoMdArrowDropright } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({ bgClass = "bg-transparent dark:bg-transparent" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const navLinks = ["Contact", "Projects", "Services", "About"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-[1000px] ${bgClass}`}
    >
      <nav className=" mx-auto px-4 mt-2 h-16 flex items-center justify-between">
        {/* Left section - Logo on mobile, Home/MoodJungle on desktop */}
        <div className="flex items-center">
          {/* Mobile Logo */}
          <Link to="/" className="md:hidden flex items-center">
            <img
              src="/favicon.webp"
              alt="Bears Berlin Logo"
              className="size-6 filter-none dark:invert"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <Link
            to="/"
            className="hidden md:flex ml-8 text-[#767676] dark:text-[#767676] transition-colors uppercase font-bold group "
          >
            {({ isActive }) => (
              <>
                Home
                <IoMdArrowDropright
                  className={`size-5 transition ${
                    isActive
                      ? "rotate-45 translate-y-2"
                      : "-rotate-45 -translate-y-2 group-hover:rotate-45 group-hover:translate-y-2"
                  }`}
                />
              </>
            )}
          </Link>

          {/* Exploration link - visible only on md screens and up */}
          <Link
            to="/mood-jungle"
            className="hidden md:flex ml-8 text-[#767676] dark:text-[#767676] transition-colors uppercase font-bold group "
          >
            {({ isActive }) => (
              <>
                MoodJungle
                <IoMdArrowDropright
                  className={`size-5 transition ${
                    isActive
                      ? "rotate-45 translate-y-2"
                      : "-rotate-45 -translate-y-2 group-hover:rotate-45 group-hover:translate-y-2"
                  }`}
                />
              </>
            )}
          </Link>
        </div>

        <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2">
          <ThemeToggle position="center" />
        </div>
        {/* Mobile Theme Toggle - right aligned */}
        <div className="md:hidden">
          <ThemeToggle position="right" />
        </div>

        {/* Right section - Theme Toggle and Hamburger for mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-[#767676] hover:text-[#767676] z-50"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <HiX className="size-8" />
            ) : (
              <HiMenu className="size-8" />
            )}
          </button>
        </div>

        {/* Desktop navigation - hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 uppercase font-medium">
          {navLinks.map((item) => (
            <Link
              key={item.toLowerCase()}
              to={`/${item.toLowerCase()}`}
              className="flex text-[#767676] dark:text-[#767676] transition-colors uppercase font-bold group filter-none dark:invert"
            >
              {({ isActive }) => (
                <>
                  {item}
                  <IoMdArrowDropright
                    className={`size-5 transition ${
                      isActive
                        ? "rotate-45 translate-y-2"
                        : "-rotate-45 -translate-y-2 group-hover:rotate-45 group-hover:translate-y-2"
                    }`}
                  />
                </>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu slide-in */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-6 space-y-6">
          <Link
            to="/mood-jungle"
            className="text-[#767676] dark:text-[#767676] transition-colors uppercase font-bold flex group filter-none dark:invert"
            onClick={toggleMenu}
          >
            {({ isActive }) => (
              <>
                MoodJungle
                <IoMdArrowDropright
                  className={`size-5 transition ${
                    isActive
                      ? "rotate-45 translate-y-2"
                      : "-rotate-45 -translate-y-2 group-hover:rotate-45 group-hover:translate-y-2"
                  }`}
                />
              </>
            )}
          </Link>
          {navLinks.map((item) => (
            <Link
              key={item.toLowerCase()}
              to={`/${item.toLowerCase()}`}
              className="text-[#767676] dark:text-[#767676] transition-colors uppercase font-bold flex group filter-none dark:invert"
              onClick={toggleMenu}
            >
              {({ isActive }) => (
                <>
                  {item}
                  <IoMdArrowDropright
                    className={`size-5 transition ${
                      isActive
                        ? "rotate-45 translate-y-2"
                        : "-rotate-45 -translate-y-2 group-hover:rotate-45 group-hover:translate-y-2"
                    }`}
                  />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
