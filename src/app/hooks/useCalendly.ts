// hooks/useCalendly.ts
"use client";

import { useEffect, useCallback } from "react";

const CALENDLY_URL = "https://calendly.com/redact-tribetek/30min";

export function useCalendly() {
  useEffect(() => {
    // Load Calendly script
    if (
      !document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Load Calendly CSS (for proper popup styling)
    if (
      !document.querySelector(
        'link[href="https://assets.calendly.com/assets/external/widget.css"]'
      )
    ) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);

  const openCalendly = useCallback(() => {
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: CALENDLY_URL,
      });
    } else {
      console.warn("Calendly script not loaded yet");
    }
  }, []);

  return { openCalendly };
}
