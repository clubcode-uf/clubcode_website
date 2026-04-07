import { getEvents } from "../../sanity/lib/queries";
import Navbar from "../../components/Navbar";

export default async function EventsPage() {
  const events = await getEvents();

  function formatEventDate(dateString: string){
    return new Date(dateString).toLocaleString("en-US",{
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
  })
  }

return (
  <>
    <Navbar />
    <main className="min-h-screen flex justify-center px-6 py-12">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-4xl font-bold text-center">Upcoming Events</h1>

        {events.map((event: any) => (
          <div
            key={event._id}
            className="rounded-3xl bg-base-200 p-7 shadow-sm transition duration-200 hover:scale-[1.03]"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p className="text-right opacity-70 shrink-0">
                {event.location} | {formatEventDate(event.startDateTime)}
              </p>
            </div>
            <p className="mt-4">{event.summary}</p>

          </div>
        ))}
      </div>
    </main>
  </>
);
}