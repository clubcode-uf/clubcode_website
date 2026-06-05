"use client";

import { type Exec } from "../lib/data";
import Coverflow, { type CoverflowItem } from "./Coverflow";

export default function ExecCarousel({ execs }: { execs: Exec[] }) {
  const items: CoverflowItem[] = execs.map((exec) => ({
    key: exec.id,
    label: `${exec.name}, ${exec.role}`,
    content: (
      <>
        <h4 className="mb-4 text-xl tracking-wide text-zinc-100">{exec.role}</h4>
        <img
          src={exec.image}
          alt={exec.name}
          draggable={false}
          className="mx-auto h-[180px] w-[180px] rounded-xl object-cover"
        />
        <p className="mt-4 text-lg font-semibold">{exec.name}</p>
      </>
    ),
  }));

  return <Coverflow items={items} ariaLabel="Executive board members" />;
}
