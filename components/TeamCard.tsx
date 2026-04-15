import React from "react";
import type { Team } from "../lib/data";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{team.name}</h3>
      {team.description && (
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{team.description}</p>
      )}
      <div className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
        <strong>Members:</strong>
        <ul className="mt-1 ml-4 list-disc">
          {team.members.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
