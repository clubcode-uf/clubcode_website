"use client";

import type { Exec } from "../sanity/lib/queries";
import { urlFor } from "../sanity/lib/image";
import Coverflow, { type CoverflowItem } from "./Coverflow";

export default function ExecCarousel({ execs }: { execs: Exec[] }) {
  const items: CoverflowItem[] = execs.map((exec) => ({
    key: exec._id,
    label: `${exec.name}, ${exec.role}`,
    content: (
      <>
        <h4 className="mb-4 text-xl tracking-wide text-zinc-100">{exec.role}</h4>
        {exec.image ? (
          <img
            src={urlFor(exec.image).width(360).height(360).fit("crop").url()}
            alt={exec.name}
            draggable={false}
            className="mx-auto h-[180px] w-[180px] rounded-xl object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="mx-auto flex h-[180px] w-[180px] items-center justify-center rounded-xl bg-white/10 text-4xl font-bold text-zinc-300"
          >
            {exec.name.charAt(0)}
          </div>
        )}
        <p className="mt-4 text-lg font-semibold">{exec.name}</p>
      </>
    ),
  }));

  return <Coverflow items={items} ariaLabel="Executive board members" />;
}
