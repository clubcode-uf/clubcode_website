import type { Exec } from "../sanity/lib/queries";
import { urlFor } from "../sanity/lib/image";

export default function ExecCard({ exec }: { exec: Exec }) {
  return (
    <div className="rounded-lg border border-white/20 bg-base-200/10 p-4 text-center font-mono text-white shadow-sm backdrop-blur-md">
      <h4 className="mb-4 block text-center text-2xl">{exec.role}</h4>
      {exec.image ? (
        <img
          src={urlFor(exec.image).width(400).height(400).fit("crop").url()}
          alt={exec.name}
          className="mx-auto block h-[200px] w-[200px] rounded-md object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="mx-auto flex h-[200px] w-[200px] items-center justify-center rounded-md bg-white/10 text-4xl font-bold text-zinc-300"
        >
          {exec.name.charAt(0)}
        </div>
      )}
      <p className="mt-4">{exec.name}</p>
    </div>
  );
}
