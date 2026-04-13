import { getEvents } from "../../sanity/lib/queries";
import Navbar from "../../components/Navbar";
import WavesBg from "../../components/ui/WavesBg";

export default async function EventsPage() {
  const events = await getEvents();

  function formatEventDate(dateString: string) {
    return new Date(dateString).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <>
      <WavesBg />
      <Navbar />
      <main className="min-h-screen flex justify-center px-6 py-12">
        <div className="w-full max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold font-mono text-center">
            Upcoming Events
          </h1>

          {events.map((event: any) => (
            <div
              key={event._id}
              className="rounded-3xl bg-base-200/10 backdrop-blur-md border border-white/20 p-7 shadow-lg transition duration-200 hover:scale-[1.03]"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-[22px] font-bold font-mono">{event.title}</h2>
                <p className="text-right font-mono opacity-70 shrink-0">
                  {event.location} | {formatEventDate(event.startDateTime)}
                </p>
              </div>
              <p className="text-sm mt-4 font-mono">{event.summary}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
