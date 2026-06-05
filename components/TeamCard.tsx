import React from "react";
import type { Team } from "../lib/data";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className="rounded-3xl bg-base-200/10 backdrop-blur-md border border-white/20 p-7 shadow-lg transition duration-200 hover:scale-[1.03]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[22px] font-bold font-mono">{team.name}</h2>
        <p className="text-right font-mono opacity-70 shrink-0">
          {team.leads.join(", ")}
        </p>
      </div>
      <p className="text-sm mt-4 font-mono">{team.members.join(", ")}</p>
    </div>
  );
}
