import { getEvents } from "../../sanity/lib/queries";
import Navbar from "../../components/Navbar";
import DottedSurface from "../../components/DottedSurface/DottedSurface";
import InfoCard from "../../components/InfoCard";

export const metadata = {
  title: "Events",
};

function formatEventDate(dateString?: string) {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <DottedSurface />
      </div>
      <Navbar />
      <main className="min-h-screen flex justify-center px-6 py-12">
        <div className="w-full max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold font-mono text-center">
            Upcoming Events
          </h1>

          {events.length === 0 ? (
            <p className="text-center font-mono opacity-70">
              No upcoming events right now — check back soon.
            </p>
          ) : (
            events.map((event) => (
              <InfoCard
                key={event._id}
                title={event.title}
                meta={[event.location, formatEventDate(event.startDateTime)]
                  .filter(Boolean)
                  .join(" | ")}
                body={event.summary}
              />
            ))
          )}
        </div>
      </main>
    </>
  );
}
