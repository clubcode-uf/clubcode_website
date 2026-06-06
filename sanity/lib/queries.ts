import { defineQuery } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export type Exec = {
  _id: string;
  name: string;
  role: string;
  image?: SanityImageSource;
  order: number;
};

export type Team = {
  _id: string;
  name: string;
  leads: string[];
  members?: string[];
  order: number;
};

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

export const execsQuery = defineQuery(`
  *[_type == "exec"] | order(order asc) {
    _id,
    name,
    role,
    image,
    order
  }
`);

export async function getExecs(): Promise<Exec[]> {
  return client.fetch(execsQuery);
}

export const teamsQuery = defineQuery(`
  *[_type == "team"] | order(order asc) {
    _id,
    name,
    leads,
    members,
    order
  }
`);

export async function getTeams(): Promise<Team[]> {
  return client.fetch(teamsQuery);
}
