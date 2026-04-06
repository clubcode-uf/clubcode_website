import { getEvents } from "../../sanity/lib/queries";
import Navbar from "../../components/Navbar";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div>
      <Navbar/>
      <h1>Upcoming Events</h1>
      {events.map((event: any) => (
        <div key={event._id}>
          <h2>{event.title}</h2>
          <p>{event.location}</p>
          <p>{event.startDateTime}</p>
          <p>{event.summary}</p>
        </div>
      ))}
    </div>
  );
}
