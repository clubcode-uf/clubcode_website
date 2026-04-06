import { defineQuery } from "next-sanity";
import { client } from "./client";

export const eventsQuery = defineQuery(`
  *[_type == "event"] | order(startDateTime asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    startDateTime,
    location
  }
`);

export async function getEvents() {
  return client.fetch(eventsQuery);
}
