"use client";

import { motion } from "framer-motion";
import { trackCtaClick } from "@/lib/analytics";

const CTA_URL =
  "https://api.leadconnectorhq.com/widget/form/yCBaf8eZht53ztJcpdL0";

const benefits = [
  "Tecnología de vanguardia en diagnóstico y tratamiento",
  "Equipo de profesionales altamente capacitados",
  "Atención personalizada y ambiente cálido",
  "Materiales de primera calidad certificados",
  "Planes de financiamiento flexibles",
  "Más de 10 años de experiencia",
];

export function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-12 sm:py-16 md:py-24 bg-[#00a0c6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              Por qué elegirnos
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base sm:text-lg text-white/90">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white text-gray-900 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Horarios de Atención
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-100">
                  <span className="font-medium text-sm sm:text-base">Lunes a Viernes</span>
                  <span className="text-[#00a0c6] font-semibold text-sm sm:text-base">
                    9:00 AM - 5:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-100">
                  <span className="font-medium text-sm sm:text-base">Sábados</span>
                  <span className="text-gray-500 font-medium text-sm sm:text-base">Cerrado</span>
                </div>
                <div className="flex justify-between items-center py-2 sm:py-3">
                  <span className="font-medium text-sm sm:text-base">Domingos</span>
                  <span className="text-gray-500 font-medium text-sm sm:text-base">Cerrado</span>
                </div>
              </div>

              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick("horarios")}
                className="mt-6 sm:mt-8 w-full inline-flex items-center justify-center px-6 py-3 sm:py-3.5 rounded-xl bg-[#00a0c6] text-white font-semibold hover:bg-[#008bae] transition-colors"
              >
                Reservar Cita
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
