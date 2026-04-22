"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { trackCtaClick } from "@/lib/analytics";

const CTA_URL =
  "https://api.leadconnectorhq.com/widget/form/yCBaf8eZht53ztJcpdL0";
const LOGO_URL =
  "https://vibe.filesafe.space/1775060670024224465/attachments/2db91b76-24b6-456e-8748-22774a792238.png";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#191919]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#inicio" className="flex-shrink-0">
              <Image
                src={LOGO_URL}
                alt="MAYCENTER Odontología"
                width={160}
                height={40}
                className="h-9 w-auto"
                unoptimized
              />
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick("navbar")}
                className="inline-flex items-center px-5 py-2 rounded-xl bg-[#00a0c6] text-white text-sm font-semibold hover:bg-[#008bae] transition-colors"
              >
                Reservar Cita
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white p-2"
              aria-label="Menú"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#191919] overflow-hidden border-t border-white/10"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-white/80 hover:text-white text-base font-medium py-3 border-b border-white/10"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick("navbar_mobile")}
                  className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#00a0c6] text-white text-sm font-semibold hover:bg-[#008bae] transition-colors"
                >
                  Reservar Cita
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}
