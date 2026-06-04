import React, { useCallback, useRef, useState } from "react";
import CutoutStreamClip from "./CutoutStreamClip";

export const normalizeProductVideo = (entry, index) => {
  if (typeof entry === "string") {
    return {
      id: entry,
      label: `Highlight ${index + 1}`,
      caption: "",
      scale: 1.45,
    };
  }
  return {
    id: entry.id,
    label: entry.label || `Highlight ${index + 1}`,
    caption: entry.caption || "",
    scale: entry.scale ?? 1.45,
  };
};

const HighlightCaption = ({ label, caption, className = "" }) => (
  <div className={`mt-3 md:mt-4 min-h-[3.75rem] md:min-h-[4.25rem] ${className}`}>
    <p className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">
      {label}
    </p>
    {caption ? (
      <p className="mt-1 md:mt-1.5 text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 leading-snug">
        {caption}
      </p>
    ) : null}
  </div>
);

const ProductHighlightsReel = ({ videos, intro }) => {
  const clips = videos.map(normalizeProductVideo);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector("[data-highlight-card]");
    if (!firstCard) return;
    const gap = 16;
    const stride = firstCard.offsetWidth + gap;
    const index = Math.round(el.scrollLeft / stride);
    setActiveIndex(Math.min(Math.max(index, 0), clips.length - 1));
  }, [clips.length]);

  return (
    <section className="mb-16 md:mb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mb-6 md:mb-14">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white">
          [Highlights]
        </h2>
        <div className="space-y-3 lg:pt-1">
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
            {intro}
          </p>
          <p className="md:hidden flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span aria-hidden>←</span>
            Swipe to explore
            <span aria-hidden className="animate-pulse">→</span>
          </p>
        </div>
      </div>

      {/* Mobile reel */}
      <div className="md:hidden relative">
        <div
          ref={scrollRef}
          onScroll={updateActiveIndex}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-1 pr-6 -mx-4 px-4 scroll-pl-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Product highlight clips, swipe horizontally"
        >
          {clips.map((clip, index) => (
            <article
              key={clip.id}
              data-highlight-card
              className="w-[82vw] max-w-[300px] shrink-0 snap-start"
            >
              <CutoutStreamClip
                videoId={clip.id}
                scale={clip.scale}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <HighlightCaption label={clip.label} caption={clip.caption} />
            </article>
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 -right-5 w-8 bg-gradient-to-l from-white via-white/40 to-transparent dark:from-black dark:via-black/40"
          aria-hidden
        />

        <div
          className="flex justify-center gap-2 mt-5"
          role="tablist"
          aria-label="Highlight position"
        >
          {clips.map((clip, index) => (
            <button
              key={clip.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Highlight ${index + 1}: ${clip.label}`}
              onClick={() => {
                const el = scrollRef.current;
                const card = el?.querySelectorAll("[data-highlight-card]")[index];
                card?.scrollIntoView({
                  behavior: "smooth",
                  inline: "start",
                  block: "nearest",
                });
                setActiveIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-black dark:bg-white"
                  : "w-1.5 bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-8 md:items-start max-w-5xl md:mx-auto">
        {clips.map((clip, index) => (
          <article key={clip.id} className="flex flex-col">
            <CutoutStreamClip
              videoId={clip.id}
              scale={clip.scale}
              loading={index < 2 ? "eager" : "lazy"}
            />
            <HighlightCaption label={clip.label} caption={clip.caption} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlightsReel;
