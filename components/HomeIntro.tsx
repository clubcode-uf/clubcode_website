"use client";

import { useState } from "react";
import FlipLogo from "./FlipLogo";
import Terminal from "./Terminal";

const BLURB =
  "Club C.O.D.E. is a student-run organization dedicated to fostering a community of developers, designers, and tech enthusiasts. We build projects, host events, and help each other grow.";

/**
 * Home page right column: the flip logo above the terminal blurb. Once the
 * terminal finishes typing, the logo shrinks so the column's height settles —
 * roughly aligning the terminal's bottom with the carousel nav in the left
 * column.
 */
export default function HomeIntro() {
  const [typed, setTyped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-[clamp(2.5rem,5vh,4rem)] text-center">
      <FlipLogo
        className={
          typed
            ? "w-[clamp(8rem,15vw,12rem)]"
            : "w-[clamp(11rem,22vw,18rem)]"
        }
      />

      <Terminal
        lines={[BLURB]}
        title="clubcode.txt — bash"
        className="w-full max-w-md text-left"
        onDone={() => setTyped(true)}
      />
    </div>
  );
}
