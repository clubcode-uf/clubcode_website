import { getTeams, getExecs } from "../../sanity/lib/queries";
import TeamCard from "../../components/TeamCard";
import ExecCarousel from "../../components/ExecCarousel";
import Navbar from "../../components/Navbar";
import DottedSurface from "../../components/DottedSurface/DottedSurface";

export const metadata = {
  title: "Teams",
};

export default async function TeamsPage() {
  const [teams, execs] = await Promise.all([getTeams(), getExecs()]);

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
          <p className="text-center text-xl text-zinc-300 mb-8">
            2026-2027
          </p>

          <ExecCarousel execs={execs} />

          <section className="mt-16 space-y-6">
            <h2 className="text-4xl font-bold font-mono text-center">
              Teams
            </h2>

            {teams.map((t) => (
              <TeamCard key={t._id} team={t} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
