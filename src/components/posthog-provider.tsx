"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init("phc_uL7wGeVBCfoMijq8ZLRLRFDRJRYaKjqiFbXvGMLNS2Gq", {
      api_host: "https://us.i.posthog.com",
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
      capture_heatmaps: true,
      enable_recording_console_log: true,
      session_recording: {
        recordCrossOriginIframes: false,
      },
      scroll_root_selector: "main",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
