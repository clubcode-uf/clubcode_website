import {defineField, defineType} from "sanity";

export const eventType = defineType({
  name: "event", //internal display name for GROQ
  title: "Event", //display name shown in Studio
  type: "document", //top-level document
  fields: [
    defineField({
      name: "title", //field key in the data
      title: "Title", //display name shown in Studio
      type: "string",
      validation: (Rule) => Rule.required(), //required
    }),
    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: { source: "title" }, //special type ex: ("intro-web-dev")
      validation: (Rule) => Rule.required(), //auto generate slugs
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text", // multi-line text input (vs 'string' which is single-line)
    }),
    defineField({
      name: "startDateTime",
      title: "Start Date and Time",
      type: "datetime", // date + time picker in Studio, stores as ISO string
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
  ],
});