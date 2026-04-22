"use client";

import { motion } from "framer-motion";
import { trackCtaClick } from "@/lib/analytics";

const CTA_URL =
  "https://api.leadconnectorhq.com/widget/form/yCBaf8eZht53ztJcpdL0";

export function ContactCta() {
  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-24 bg-[#00a0c6]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Transformá tu sonrisa hoy
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Agendá tu consulta y descubrí cómo podemos ayudarte a lograr la
            sonrisa que siempre quisiste. Primera consulta de valoración sin
            cargo.
          </p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCtaClick("contacto_final")}
            className="inline-flex items-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-[#00a0c6] text-white font-semibold text-base sm:text-lg hover:bg-[#008bae] transition-colors shadow-lg shadow-[#00a0c6]/25"
          >
            Agendar Consulta
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
          </a>
        </motion.div>
      </div>
    </section>
  );
}
