"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { trackCtaClick, trackToothInteraction } from "@/lib/analytics";

const CTA_URL =
  "https://api.leadconnectorhq.com/widget/form/yCBaf8eZht53ztJcpdL0";
const TOOTH_MODEL =
  "https://raw.githubusercontent.com/Marucho17/assets/main/diente.glb";

function ToothViewer() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    const viewer = containerRef.current.querySelector("model-viewer");
    if (!viewer) return;

    let interacted = false;
    const handler = () => {
      if (!interacted) {
        interacted = true;
        trackToothInteraction();
      }
    };
    viewer.addEventListener("camera-change", handler);
    return () => viewer.removeEventListener("camera-change", handler);
  }, [mounted]);

  if (!mounted) {
    return (
      <div
        className="w-full h-[350px] sm:h-[400px] md:h-[500px] flex items-center justify-center"
        aria-hidden
      />
    );
  }

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{
        __html: `<model-viewer
          src="${TOOTH_MODEL}"
          auto-rotate
          camera-controls
          field-of-view="60deg"
          camera-orbit="0deg 75deg 105%"
          min-field-of-view="50deg"
          max-field-of-view="70deg"
          interaction-prompt="none"
          style="width:100%;height:100%;background-color:transparent;"
        ></model-viewer>`,
      }}
      className="w-full h-[350px] sm:h-[400px] md:h-[500px]"
    />
  );
}

export function Hero() {
  return (
    <section id="inicio" className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
            <Badge
              variant="secondary"
              className="mb-4 sm:mb-6 px-4 py-1.5 text-sm font-medium bg-[#00a0c6]/10 text-[#00a0c6] border-0"
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Tu sonrisa en las mejores manos
            </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight"
            >
              Odontología de Excelencia en{" "}
              <span className="text-[#00a0c6]">MAYCENTER</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              Combinamos tecnología de vanguardia con un equipo altamente
              capacitado para brindarte la mejor experiencia en salud dental.
              Tu bienestar es nuestra prioridad.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick("hero")}
              className="mt-6 sm:mt-8 inline-flex items-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#00a0c6] text-white font-semibold text-base sm:text-lg hover:bg-[#008bae] transition-colors shadow-lg shadow-[#00a0c6]/25"
            >
              Reservar Cita
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <ToothViewer />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
