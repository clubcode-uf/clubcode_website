"use client";

import Coverflow, { type CoverflowItem } from "./Coverflow";

type CodeValue = {
  letter: string;
  title: string;
  description: string;
};

export default function CodeCarousel({ values }: { values: CodeValue[] }) {
  const items: CoverflowItem[] = values.map((v) => ({
    key: v.letter,
    label: `${v.letter} — ${v.title}`,
    content: (
      <div className="flex h-full flex-col items-center justify-center px-2">
        <span className="text-[clamp(2.5rem,7vw,3.75rem)] font-bold leading-none text-[#3ab5fb]">
          {v.letter}
        </span>
        <h2 className="mt-4 text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-zinc-100">
          {v.title}
        </h2>
        <p className="mt-3 text-[clamp(0.85rem,1.8vw,1rem)] leading-7 text-zinc-300">
          {v.description}
        </p>
      </div>
    ),
  }));

  return (
    <Coverflow
      items={items}
      ariaLabel="Club C.O.D.E. values"
      stageClassName="h-[clamp(280px,40vh,340px)]"
      cardClassName="w-[clamp(220px,80%,300px)] h-[clamp(240px,36vh,280px)] flex"
      prevArrowClassName="left-0 sm:-left-2"
      nextArrowClassName="right-0 sm:-right-2"
    />
  );
}
