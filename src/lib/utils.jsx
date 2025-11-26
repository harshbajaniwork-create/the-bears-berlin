import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Global reference to ScrollSmoother instance
let globalSmoother = null;

export const setGlobalSmoother = (smoother) => {
  globalSmoother = smoother;
};

export const getGlobalSmoother = () => {
  return globalSmoother;
};

// Utility functions for smooth scroll control
export const scrollTo = (target, options = {}) => {
  if (globalSmoother) {
    globalSmoother.scrollTo(target, options);
  }
};

export const scrollToTop = () => {
  if (globalSmoother) {
    globalSmoother.scrollTo(0);
  }
};

export const scrollToBottom = () => {
  if (globalSmoother) {
    globalSmoother.scrollTo("100%");
  }
};

export const scrambleText = (element, originalText, duration = 1) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const scrambleDuration = duration * 0.8; // 80% of duration for scrambling

  let scrambleInterval;
  let startTime = Date.now();

  const scramble = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / (scrambleDuration * 1000), 1);

    if (progress < 1) {
      let scrambledText = "";
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] === " ") {
          scrambledText += " ";
        } else {
          scrambledText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      element.textContent = scrambledText;
    } else {
      // Reveal the original text
      element.textContent = originalText;
      clearInterval(scrambleInterval);
    }
  };

  scrambleInterval = setInterval(scramble, 50);
  scramble(); // Initial call
};
