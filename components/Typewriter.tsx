"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  /** The full string to type out. */
  text: string;
  /** ms between characters while typing. */
  speed?: number;
  /** ms to hold the full text before restarting (0 = type once, no loop). */
  loopDelay?: number;
  className?: string;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function Typewriter({
  text,
  speed = 70,
  loopDelay = 0,
  className,
}: TypewriterProps) {
  // When reduced motion is requested, start fully typed and never animate.
  const [count, setCount] = useState(() =>
    prefersReducedMotion() ? text.length : 0
  );
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    if (count < text.length) {
      timeoutRef.current = window.setTimeout(() => setCount((c) => c + 1), speed);
    } else if (loopDelay > 0) {
      timeoutRef.current = window.setTimeout(() => setCount(0), loopDelay);
    }

    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, [count, text, speed, loopDelay]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-px animate-[caret-blink_1s_steps(1)_infinite] self-stretch border-r-2 border-current align-middle"
        style={{ height: "1em" }}
      />
    </span>
  );
}
