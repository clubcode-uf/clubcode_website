import { type Exec } from "../lib/data";

export default function ExecCard({ exec }: { exec: Exec }) {
  return (
    <div className="rounded-lg border border-white/20 bg-base-200/10 p-4 text-center font-mono text-white shadow-sm backdrop-blur-md">
      <h4 className="mb-4 block text-center text-2xl">{exec.role}</h4>
      <img
        src={exec.image}
        alt={exec.name}
        className="mx-auto block h-[200px] w-[200px] rounded-md object-cover"
      />
      <p className="mt-4">{exec.name}</p>
    </div>
  );
}
 
