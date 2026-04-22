"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { trackServiceClick } from "@/lib/analytics";

const CTA_URL =
  "https://api.leadconnectorhq.com/widget/form/yCBaf8eZht53ztJcpdL0";

const services = [
  {
    title: "Implantes Dentales",
    description:
      "Recuperá tu sonrisa con implantes de última generación. Soluciones permanentes y naturales para reemplazar piezas dentales.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
  },
  {
    title: "Ortodoncia Invisible",
    description:
      "Alineá tus dientes de forma discreta y cómoda con nuestros tratamientos de ortodoncia invisible de última tecnología.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
  },
  {
    title: "Blanqueamiento Dental",
    description:
      "Conseguí una sonrisa más blanca y brillante con nuestros tratamientos profesionales de blanqueamiento dental.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
  },
  {
    title: "Limpieza Profesional",
    description:
      "Mantené tu salud bucal con limpiezas profesionales periódicas que eliminan el sarro y la placa bacteriana.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
  },
  {
    title: "Endodoncia",
    description:
      "Tratamientos de conducto con tecnología avanzada para salvar tus piezas dentales naturales sin dolor.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
  },
  {
    title: "Odontopediatría",
    description:
      "Cuidamos la salud dental de los más pequeños con un enfoque amigable y profesional desde su primera visita.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="overflow-hidden h-40 sm:h-48">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackServiceClick(service.title)}
            className="text-[#00a0c6] font-semibold hover:underline inline-flex items-center gap-1"
          >
            Saber más
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
