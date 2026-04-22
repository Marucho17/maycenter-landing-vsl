"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { trackCarouselSwipe } from "@/lib/analytics";

const POSTS = [
  "https://www.instagram.com/p/DSnw44sEd_m/embed",
  "https://www.instagram.com/reel/DA4b4uatYoj/embed",
  "https://www.instagram.com/p/DSnw44sEd_m/embed",
  "https://www.instagram.com/reel/DA4b4uatYoj/embed",
];

export function InstagramCarousel() {
  const prevIndex = useRef(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
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

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2"
        >
          Nuestra comunidad:
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 mb-8 sm:mb-12 text-base sm:text-lg"
        >
          Pacientes felices que han transformado su sonrisa con nosotros.
        </motion.p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {POSTS.map((url, i) => (
              <div
                key={i}
                className="flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                  <iframe
                    src={url}
                    className="w-full h-[450px] sm:h-[500px]"
                    frameBorder="0"
                    scrolling="no"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {POSTS.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === selectedIndex ? "bg-[#00a0c6]" : "bg-gray-300"
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
