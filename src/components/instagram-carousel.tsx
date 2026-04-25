"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useReducedMotion } from "framer-motion";
import { trackCarouselSwipe, trackFooterClick } from "@/lib/analytics";

const POSTS = [
  "https://www.instagram.com/p/DSnw44sEd_m/embed",
  "https://www.instagram.com/reel/DA4b4uatYoj/embed",
  "https://www.instagram.com/reel/C1KGGQ3uOod/embed",
  "https://www.instagram.com/reel/DElXDS9MipW/embed",
];

const IG_HANDLE = "maycenterodontologia";
const IG_PROFILE_URL = `https://www.instagram.com/${IG_HANDLE}`;

export function InstagramCarousel() {
  const prevIndex = useRef(0);
  const reduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1, containScroll: false },
    [Autoplay({ delay: 4500, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    if (newIndex !== prevIndex.current) {
      trackCarouselSwipe(
        newIndex > prevIndex.current ? "next" : "prev",
        newIndex
      );
      prevIndex.current = newIndex;
    }
    setSelectedIndex(newIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Decorative glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00a0c6]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full bg-fuchsia-300/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Sonrisas que{" "}
            <span className="bg-gradient-to-r from-[#00a0c6] to-cyan-500 bg-clip-text text-transparent">
              hablan por nosotros
            </span>
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 max-w-2xl text-base sm:text-lg text-slate-500"
          >
            Pacientes reales, transformaciones reales. Mirá el día a día de
            nuestra comunidad en Instagram.
          </motion.p>
        </div>

        {/* Carousel + side controls */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="relative"
        >
          {/* Edge fade masks */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-slate-50 via-white/80 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-slate-50 via-white/80 to-transparent"
          />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-stretch gap-4 sm:gap-6 py-6">
              {POSTS.map((url, i) => {
                const isActive = i === selectedIndex;
                return (
                  <div
                    key={i}
                    className="flex-[0_0_88%] sm:flex-[0_0_60%] md:flex-[0_0_42%] lg:flex-[0_0_32%] min-w-0"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.92,
                        opacity: isActive ? 1 : 0.55,
                        y: isActive ? 0 : 8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 26,
                      }}
                      className="relative rounded-3xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#00a0c6]/10 transition-shadow"
                    >
                      {/* Subtle gradient border on active */}
                      {isActive && (
                        <motion.div
                          layoutId="active-glow"
                          aria-hidden
                          className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#00a0c6]/40 via-transparent to-fuchsia-400/30 blur-sm -z-10"
                        />
                      )}
                      <iframe
                        src={url}
                        className="w-full h-[460px] sm:h-[520px] block"
                        frameBorder="0"
                        scrolling="no"
                        loading="lazy"
                        title={`Instagram post ${i + 1}`}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prev/Next arrows */}
          <button
            aria-label="Anterior"
            onClick={scrollPrev}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur ring-1 ring-slate-200 shadow-lg text-slate-700 hover:text-[#00a0c6] hover:ring-[#00a0c6]/40 hover:scale-105 active:scale-95 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            aria-label="Siguiente"
            onClick={scrollNext}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur ring-1 ring-slate-200 shadow-lg text-slate-700 hover:text-[#00a0c6] hover:ring-[#00a0c6]/40 hover:scale-105 active:scale-95 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>

        {/* Dots + CTA */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            {POSTS.map((_, i) => {
              const isActive = i === selectedIndex;
              return (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Ir a slide ${i + 1}`}
                  className="group p-1"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-8 bg-[#00a0c6]"
                        : "w-1.5 bg-slate-300 group-hover:bg-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <motion.a
            href={IG_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackFooterClick("red_social", `ig_cta:${IG_HANDLE}`)}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-[#00a0c6] hover:shadow-[#00a0c6]/30 transition-all"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span>Seguinos en Instagram</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
