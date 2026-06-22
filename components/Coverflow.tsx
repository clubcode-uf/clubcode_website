"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const AUTOPLAY_MS = 4000;
const DRAG_THRESHOLD = 60; // px of drag before a slide flips

export type CoverflowItem = {
  /** Stable key for the slide. */
  key: string;
  /** Accessible label announced for the slide. */
  label: string;
  /** Card contents. */
  content: React.ReactNode;
};

type CoverflowProps = {
  items: CoverflowItem[];
  /** Accessible name for the whole carousel region. */
  ariaLabel: string;
  /** Height of the 3D stage. */
  stageClassName?: string;
  /** Width of each card. */
  cardClassName?: string;
  /** Horizontal position of the prev arrow (overrides the default offset). */
  prevArrowClassName?: string;
  /** Horizontal position of the next arrow (overrides the default offset). */
  nextArrowClassName?: string;
};

/**
 * A fluid 3D coverflow carousel: the focused card sits centered while
 * neighbours fan out at depth on both sides. Supports drag/swipe, arrow
 * buttons, clickable side cards, keyboard arrows, dot navigation, and
 * autoplay that pauses on interaction. Infinite-looping.
 */
export default function Coverflow({
  items,
  ariaLabel,
  stageClassName,
  cardClassName,
  prevArrowClassName = "left-2 sm:left-6",
  nextArrowClassName = "right-2 sm:right-6",
}: CoverflowProps) {
  const count = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Live drag state (in "slide units"; 1 == one full card width dragged).
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragging = useRef(false);
  const startX = useRef(0);
  const widthRef = useRef(1);
  const trackRef = useRef<HTMLDivElement>(null);

  // Measure the stage so the fan-out spacing scales with available width:
  // wide on desktop, tighter on phones so neighbours never run off-screen.
  const [stageWidth, setStageWidth] = useState(0);
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setStageWidth(entry.contentRect.width)
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Fan distance per slide: ~38% of the stage width, clamped to a sane range.
  const fan = Math.max(120, Math.min(stageWidth * 0.38, 240));

  // Shortest signed distance from the active index to slide i, accounting for
  // the infinite wrap so neighbours fan out on both sides near the edges.
  const offsetFor = useCallback(
    (i: number) => {
      let d = i - active;
      if (d > count / 2) d -= count;
      if (d < -count / 2) d += count;
      return d;
    },
    [active, count]
  );

  const go = useCallback(
    (dir: number) => setActive((a) => (a + dir + count) % count),
    [count]
  );
  const goTo = useCallback((i: number) => setActive(((i % count) + count) % count), [count]);

  // Autoplay — paused on hover, focus, or active drag.
  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, go, count]);

  // Keyboard navigation when the carousel region is focused.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  };

  // --- Pointer drag / swipe ---------------------------------------------
  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    setIsDragging(true);
    startX.current = e.clientX;
    widthRef.current = trackRef.current?.offsetWidth ?? 1;
    setPaused(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - startX.current;
    setDragOffset(dx / widthRef.current);
  };

  const endDrag = () => {
    if (!dragging.current) return;
    dragging.current = false;
    setIsDragging(false);
    if (dragOffset <= -0.001 || dragOffset >= 0.001) {
      const slidesMoved = Math.round(-dragOffset);
      const passedThreshold =
        Math.abs(dragOffset * widthRef.current) > DRAG_THRESHOLD;
      const step = slidesMoved !== 0 ? slidesMoved : passedThreshold ? Math.sign(-dragOffset) : 0;
      if (step !== 0) setActive((a) => (a + step + count) % count);
    }
    setDragOffset(0);
    setPaused(false);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative w-full select-none outline-none"
    >
      {/* Stage */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        className={cn(
          "relative mx-auto w-full cursor-grab touch-pan-y active:cursor-grabbing [perspective:1200px]",
          stageClassName ?? "h-[360px]"
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {items.map((item, i) => {
          // Position relative to centre, including the live drag.
          const pos = offsetFor(i) + dragOffset;
          const abs = Math.abs(pos);
          const visible = abs <= 2.5;

          // Cards fan out: shift sideways, recede in depth, rotate, and fade.
          // Spacing scales with the measured stage width (see `fan`).
          const translateX = pos * fan;
          const translateZ = -abs * fan * 0.95;
          const rotateY = pos * -22;
          const scale = Math.max(0.7, 1 - abs * 0.14);
          const opacity = abs > 2.2 ? 0 : Math.max(0, 1 - abs * 0.32);
          const isCenter = Math.abs(pos) < 0.5;

          return (
            <button
              key={item.key}
              type="button"
              aria-label={item.label}
              aria-hidden={!visible}
              tabIndex={isCenter ? 0 : -1}
              onClick={() => !isCenter && goTo(i)}
              className={cn(
                "absolute left-1/2 top-1/2 origin-center rounded-2xl border p-5 text-center font-mono text-white shadow-xl backdrop-blur-md",
                "border-white/20 bg-white/5",
                cardClassName ?? "w-[260px]",
                isDragging
                  ? "transition-none"
                  : "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isCenter
                  ? "ring-1 ring-white/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
                  : "cursor-pointer hover:border-white/40"
              )}
              style={{
                transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex: 100 - Math.round(abs * 10),
                pointerEvents: visible ? "auto" : "none",
              }}
            >
              {item.content}
            </button>
          );
        })}
      </div>

      {/* Arrow controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className={cn(
          "absolute top-1/2 z-200 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/25",
          prevArrowClassName
        )}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className={cn(
          "absolute top-1/2 z-200 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/25",
          nextArrowClassName
        )}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.key}
            type="button"
            aria-label={`Go to ${item.label}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === active ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
            )}
          />
        ))}
      </div>

      {/* Announce slide changes to screen readers. */}
      <div aria-live="polite" className="sr-only">
        {items[active]?.label}
      </div>
    </div>
  );
}
