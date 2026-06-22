import type { Team } from "../sanity/lib/queries";
import InfoCard from "./InfoCard";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <InfoCard
      title={team.name}
      meta={team.leads.join(", ")}
      body={(team.members ?? []).join(", ")}
    />
  );
}
