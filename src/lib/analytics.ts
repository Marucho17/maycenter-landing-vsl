import posthog from "posthog-js";

export function trackCtaClick(location: string) {
  posthog.capture("cta_agendar_cita_click", { location });
}

export function trackToothInteraction() {
  posthog.capture("diente_3d_interaccion");
}

export function trackCarouselSwipe(direction: "next" | "prev", index: number) {
  posthog.capture("instagram_carousel_swipe", { direction, slide_index: index });
}

export function trackServiceClick(serviceName: string) {
  posthog.capture("servicio_saber_mas_click", { servicio: serviceName });
}

export function trackFooterClick(type: "red_social" | "direccion" | "email", label: string) {
  posthog.capture("footer_click", { tipo: type, label });
}
