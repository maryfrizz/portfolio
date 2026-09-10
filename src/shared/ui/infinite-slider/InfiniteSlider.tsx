"use client";

import { animate, motion, useMotionValue, useReducedMotion } from "motion/react";
import { type ReactNode, useEffect, useRef, useState } from "react";

export type InfiniteSliderProps = {
  children: ReactNode;
  /** Space between repeated items, in pixels. */
  gap?: number;
  /** Travel speed, in pixels per second. */
  speed?: number;
  /** Optional speed while the pointer is over the slider. Use 0 to pause. */
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

/**
 * A continuously looping row or column of content.
 *
 * The children are rendered twice so the animation can reset without a visible
 * break. Keep one complete copy of the content inside this component.
 */
export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const translation = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const [trackSize, setTrackSize] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const currentSpeed = isHovering && speedOnHover !== undefined ? speedOnHover : speed;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateSize = () => {
      const { height, width } = track.getBoundingClientRect();
      setTrackSize(direction === "horizontal" ? width : height);
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(track);
    return () => observer.disconnect();
  }, [direction]);

  useEffect(() => {
    if (reduceMotion || !trackSize || currentSpeed <= 0) {
      translation.set(0);
      return;
    }

    // The track contains two equal copies. Its midpoint is the seamless reset.
    const loopDistance = (trackSize + gap) / 2;
    const from = reverse ? -loopDistance : 0;
    const to = reverse ? 0 : -loopDistance;
    translation.set(from);

    const controls = animate(translation, to, {
      duration: loopDistance / currentSpeed,
      ease: "linear",
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
    });

    return controls.stop;
  }, [currentSpeed, gap, reduceMotion, reverse, trackSize, translation]);

  return (
    <div className={["overflow-hidden", className].filter(Boolean).join(" ")}>
      <motion.div
        className="flex w-max"
        onHoverEnd={speedOnHover === undefined ? undefined : () => setIsHovering(false)}
        onHoverStart={speedOnHover === undefined ? undefined : () => setIsHovering(true)}
        ref={trackRef}
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          flexDirection: direction === "horizontal" ? "row" : "column",
          gap,
        }}
      >
        {children}
        <span aria-hidden="true" className="contents">
          {children}
        </span>
      </motion.div>
    </div>
  );
}
