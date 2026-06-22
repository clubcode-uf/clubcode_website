"use client";

import { useEffect, useRef, useState } from "react";

type TerminalProps = {
  /** Lines printed sequentially, each preceded by a prompt. */
  lines: string[];
  /** Title shown in the window's title bar. */
  title?: string;
  /** The prompt rendered before each line. */
  prompt?: string;
  /** ms between characters while typing. */
  speed?: number;
  className?: string;
  /** Called once when every line has finished typing. */
  onDone?: () => void;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function Terminal({
  lines,
  title = "about — bash",
  prompt = "$",
  speed = 22,
  className,
  onDone,
}: TerminalProps) {
  const total = lines.length;

  // Which line is currently typing, and how many chars of it are shown.
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const done = line >= total;

  // Skip straight to the end when the user prefers reduced motion. Applied
  // after mount (not in the initializer) so the server and first client
  // render agree on an empty terminal, avoiding a hydration mismatch.
  useEffect(() => {
    if (prefersReducedMotion()) setLine(total);
  }, [total]);

  // Notify the parent exactly once when all lines have been typed.
  const notifiedRef = useRef(false);
  useEffect(() => {
    if (done && !notifiedRef.current) {
      notifiedRef.current = true;
      onDone?.();
    }
  }, [done, onDone]);

  useEffect(() => {
    if (prefersReducedMotion() || done) return;

    const current = lines[line];
    if (char < current.length) {
      timeoutRef.current = window.setTimeout(() => setChar((c) => c + 1), speed);
    } else {
      // Brief pause at end of line, then advance to the next one.
      timeoutRef.current = window.setTimeout(() => {
        setLine((l) => l + 1);
        setChar(0);
      }, 450);
    }

    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, [line, char, lines, speed, done]);

  return (
    <div
      className={
        "overflow-hidden rounded-xl border border-white/20 bg-zinc-950/70 font-mono shadow-2xl backdrop-blur-md " +
        (className ?? "")
      }
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f56]" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" />
        <span className="size-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-zinc-400">{title}</span>
      </div>

      {/* Body */}
      <div className="space-y-4 p-5 text-left text-lg leading-8 text-zinc-200 sm:p-7">
        {lines.map((text, i) => {
          // A line is hidden until typing reaches it; the active line shows a
          // partial slice; completed lines show in full.
          if (!done && i > line) return null;
          const shown = done || i < line ? text : text.slice(0, char);
          const isActive = !done && i === line;
          const isLast = done && i === total - 1;

          return (
            <p key={i} aria-label={text}>
              <span className="mr-2 select-none text-[#27c93f]" aria-hidden="true">
                {prompt}
              </span>
              <span aria-hidden="true">{shown}</span>
              {(isActive || isLast) && (
                <span
                  aria-hidden="true"
                  className="ml-0.5 inline-block w-px animate-[caret-blink_1s_steps(1)_infinite] motion-reduce:animate-none self-stretch border-r-[0.6em] border-zinc-200 align-middle"
                  style={{ height: "1.1em" }}
                />
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
}
