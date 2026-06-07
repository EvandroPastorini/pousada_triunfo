"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
  position?: string;
};

type HeroCarouselProps = {
  desktopSlides: HeroSlide[];
  mobileSlides: HeroSlide[];
};

export function HeroCarousel({ desktopSlides, mobileSlides }: HeroCarouselProps) {
  const [activeDesktop, setActiveDesktop] = useState(0);
  const [activeMobile, setActiveMobile] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return;
    }

    const desktopTimer = window.setInterval(() => {
      setActiveDesktop((current) => (current + 1) % desktopSlides.length);
    }, 5200);

    const mobileTimer = window.setInterval(() => {
      setActiveMobile((current) => (current + 1) % mobileSlides.length);
    }, 5200);

    return () => {
      window.clearInterval(desktopTimer);
      window.clearInterval(mobileTimer);
    };
  }, [desktopSlides.length, mobileSlides.length]);

  return (
    <>
      <div aria-hidden className="absolute inset-0 hidden lg:block">
        {desktopSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(min-width: 1024px) 100vw, 0px"
            className={`object-cover transition-opacity duration-[1600ms] ease-out ${
              slide.position ?? "object-center"
            } ${activeDesktop === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      <div aria-hidden className="absolute inset-0 lg:hidden">
        {mobileSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 1023px) 100vw, 0px"
            className={`object-cover transition-opacity duration-[1600ms] ease-out ${
              slide.position ?? "object-center"
            } ${activeMobile === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    </>
  );
}
