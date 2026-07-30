"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

/* ------------------------------------------------------- Reduced motion */

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduced(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/**
 * Every animation in the site funnels through this. Server render and the
 * first client render both report `false`, then React re-subscribes — so
 * there is no hydration mismatch and no setState inside an effect.
 */
export function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
}

/* ------------------------------------------------------------ In view */

/**
 * Reports once an element has entered the viewport. Stays true afterwards so
 * content never animates back out.
 */
export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px",
  },
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

/* -------------------------------------------------------- Scroll value */

/**
 * Subscribes to scroll and hands the raw value to a callback on an animation
 * frame. Keeping the value out of React state avoids a re-render per pixel.
 */
export function useScrollCallback(cb: (scrollY: number) => void) {
  const saved = useRef(cb);

  // Keep the latest callback without re-subscribing the scroll listener.
  // Declared first so it runs before the listener effect on mount.
  useEffect(() => {
    saved.current = cb;
  });

  useEffect(() => {
    let frame = 0;
    let ticking = false;

    const run = () => {
      ticking = false;
      saved.current(window.scrollY);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      frame = requestAnimationFrame(run);
    };

    frame = requestAnimationFrame(run);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

/* ------------------------------------------------------- Pointer fine? */

const POINTER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribePointer(onChange: () => void) {
  const mq = window.matchMedia(POINTER_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** True only for mouse-driven devices — pointer effects stay off on touch. */
export function useFinePointer() {
  return useSyncExternalStore(
    subscribePointer,
    () => window.matchMedia(POINTER_QUERY).matches,
    () => false,
  );
}

/* ----------------------------------------------------------- Count up */

export function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!active) return;

    if (reduced || target <= 0) {
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration, reduced]);

  return value;
}

/* --------------------------------------------------------- Scrollspy */

/** Returns the id of the section currently filling most of the viewport. */
export function useScrollSpy(ids: readonly string[], offset = 140) {
  const [active, setActive] = useState<string | null>(null);

  const update = useCallback(() => {
    let current: string | null = null;
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top - offset <= 0) current = id;
    }
    setActive(current);
  }, [ids, offset]);

  useScrollCallback(update);

  return active;
}
