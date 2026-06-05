"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "../lib/utils";

// How often the logo flips on its own. Kept long so it's an occasional
// flourish, not a constant spin. Clicking flips it any time.
const AUTO_FLIP_MS = 12000;

export default function FlipLogo({ className }: { className?: string }) {
  const [flipping, setFlipping] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const flip = useCallback(() => {
    if (timeoutRef.current !== null) return; // ignore while mid-flip
    setFlipping(true);
    timeoutRef.current = window.setTimeout(() => {
      setFlipping(false);
      timeoutRef.current = null;
    }, 900); // matches the CSS flip duration
  }, []);

  // Occasional automatic flip.
  useEffect(() => {
    const id = window.setInterval(flip, AUTO_FLIP_MS);
    return () => window.clearInterval(id);
  }, [flip]);

  return (
    <div className="[perspective:1000px]">
      <Image
        src="/images/ClubCodeLogo.png"
        alt="Club C.O.D.E. logo"
        width={500}
        height={500}
        priority
        onClick={flip}
        role="button"
        tabIndex={0}
        aria-label="Flip the Club C.O.D.E. logo"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            flip();
          }
        }}
        className={cn(
          "aspect-square cursor-pointer rounded-full object-contain shadow-[0_0_0_6px_rgba(255,255,255,0.95),0_18px_60px_rgba(58,181,251,0.18)] [transform-style:preserve-3d] transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          className ?? "w-[clamp(11rem,22vw,18rem)]",
          flipping && "animate-coin-flip"
        )}
      />
    </div>
  );
}
