"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [backgroundReady, setBackgroundReady] = useState(false);
  const [mediaReady, setMediaReady] = useState(false);
  const backgroundDuration = 0.24;

  useEffect(() => {
    if (reduceMotion) {
      setHasRevealed(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    let animationFrame = 0;

    const revealAtViewportCenter = () => {
      const { width, height, top } = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;

      if (!width || !height || top > viewportCenter) {
        animationFrame = window.requestAnimationFrame(revealAtViewportCenter);
        return;
      }

      setHasRevealed(true);
    };

    revealAtViewportCenter();

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!hasRevealed) return;
    const element = elementRef.current;
    if (!element) return;
    let cancelled = false;
    const cleanups: (() => void)[] = [];
    const ready = Array.from(element.querySelectorAll("img")).map(
      (image) =>
        new Promise<void>((resolve) => {
          const finish = () => {
            image.removeEventListener("load", finish);
            image.removeEventListener("error", finish);
            image
              .decode()
              .catch(() => {})
              .then(resolve);
          };
          image.addEventListener("load", finish);
          image.addEventListener("error", finish);
          cleanups.push(() => {
            image.removeEventListener("load", finish);
            image.removeEventListener("error", finish);
          });
          // Start native lazy loading as soon as the reveal begins.
          image.loading = "eager";
          if (image.complete) finish();
        }),
    );
    Promise.all(ready).then(() => {
      if (!cancelled) setMediaReady(true);
    });
    return () => {
      cancelled = true;
      for (const cleanup of cleanups) cleanup();
    };
  }, [hasRevealed]);

  return (
    <motion.div
      animate={{ opacity: hasRevealed ? 1 : 0 }}
      className={className}
      initial={false}
      onAnimationComplete={() => {
        if (hasRevealed) setBackgroundReady(true);
      }}
      ref={elementRef}
      style={{ position: "relative", backgroundColor: "#f3f4f6" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { delay: hasRevealed ? delay : 0, duration: backgroundDuration, ease: "linear" }
      }
    >
      <motion.div
        animate={{
          opacity: reduceMotion || (backgroundReady && mediaReady) ? 1 : 0,
        }}
        className="absolute inset-0"
        initial={false}
        transition={
          reduceMotion ? { duration: 0 } : { delay: 0.18, duration: 0.54, ease: "linear" }
        }
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
