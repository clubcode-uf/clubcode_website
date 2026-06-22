import React from "react";

/**
 * A translucent content card with a title, a right-aligned meta line, and a
 * body. Shared by the Teams list and the Events list so their styling stays
 * in sync.
 */
export default function InfoCard({
  title,
  meta,
  body,
}: {
  title: React.ReactNode;
  meta: React.ReactNode;
  body: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-base-200/10 backdrop-blur-md border border-white/20 p-7 shadow-lg transition duration-200 hover:scale-[1.03]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[22px] font-bold font-mono">{title}</h2>
        <p className="text-right font-mono opacity-70 shrink-0">{meta}</p>
      </div>
      <p className="text-sm mt-4 font-mono">{body}</p>
    </div>
  );
}
