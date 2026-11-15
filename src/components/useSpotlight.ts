import { useEffect } from "react";

/** Feeds the cursor position into --mx/--my on any [data-spot] element. */
export const useSpotlight = () => {
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const el = (event.target as Element | null)?.closest?.("[data-spot]") as HTMLElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
};
