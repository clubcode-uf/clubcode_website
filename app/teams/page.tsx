import { teams, execs } from "../../lib/data";
import TeamCard from "../../components/TeamCard";
import ExecCard from "../../components/ExecCard";
import Navbar from "../../components/Navbar";
import DottedSurface from "../../components/DottedSurface/DottedSurface";

export const metadata = {
  title: "Teams — Club CODE",
};

export default function TeamsPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <DottedSurface />
      </div>
      <Navbar />
      <div className="flex flex-col items-center min-h-full py-12 font-mono">
        <div className="w-full max-w-5xl px-6">
          <h1 className="text-center text-5xl font-bold text-zinc-50">
            Executive Board
          </h1>
          <p className="text-center text-xl text-zinc-300 mb-3">
            2026-2027
          </p>

          <div className="grid grid-cols-4 gap-6">
            {execs.map((exec) => (
              <ExecCard key={exec.name} exec={exec} />
            ))}
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-zinc-50">Teams</h2>
            <p className="mt-1 text-sm text-zinc-300">
              Explore the groups within the club.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {teams.map((t) => (
                <TeamCard key={t.id} team={t} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
