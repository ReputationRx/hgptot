"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type PhotoCarouselSlide = {
  src: string;
  alt: string;
  caption?: string;
};

type PhotoCarouselProps = {
  slides: PhotoCarouselSlide[];
  className?: string;
  autoplayMs?: number;
};

export function PhotoCarousel({ slides, className = "", autoplayMs = 6500 }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const safeIndex = count ? index % count : 0;
  const current = slides[safeIndex] ?? slides[0];

  const go = useCallback(
    (dir: -1 | 1) => {
      if (!count) return;
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (count < 2 || paused || !autoplayMs) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % count), autoplayMs);
    return () => window.clearInterval(t);
  }, [count, paused, autoplayMs]);

  const [touchX, setTouchX] = useState<number | null>(null);

  if (!count || !current) return null;

  return (
    <div
      className={`photo-carousel-shell rounded-[2rem] border p-4 shadow-[0_20px_60px_rgba(15,124,122,0.08)] sm:p-6 md:p-8 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="photo-carousel-inner relative overflow-hidden rounded-2xl"
        role="region"
        aria-roledescription="carousel"
        aria-label="Care photography"
        onTouchStart={(e) => setTouchX(e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          if (touchX == null) return;
          const endX = e.changedTouches[0]?.clientX ?? touchX;
          const dx = endX - touchX;
          setTouchX(null);
          if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
        }}
      >
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] md:aspect-[21/9]">
          {slides.map((slide, i) => (
            <div
              key={slide.src + i}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                i === safeIndex ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"
              }`}
              aria-hidden={i !== safeIndex}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-cover object-center"
                priority={i === 0}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {count > 1 ? (
          <>
            <button
              type="button"
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-teal/15 bg-white/95 text-teal shadow-sm backdrop-blur transition hover:border-gold hover:bg-gold hover:text-white sm:left-4 sm:h-11 sm:w-11"
              aria-label="Previous image"
              onClick={() => go(-1)}
            >
              <span className="sr-only">Previous</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-teal/15 bg-white/95 text-teal shadow-sm backdrop-blur transition hover:border-gold hover:bg-gold hover:text-white sm:right-4 sm:h-11 sm:w-11"
              aria-label="Next image"
              onClick={() => go(1)}
            >
              <span className="sr-only">Next</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        ) : null}
      </div>

      {current.caption ? (
        <p className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-teal">{current.caption}</p>
      ) : null}

      {count > 1 ? (
        <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Slide indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === safeIndex}
              aria-label={`Show slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === safeIndex ? "w-8 bg-teal" : "w-2.5 bg-teal/25 hover:bg-teal/45"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
