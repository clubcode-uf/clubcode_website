import {defineField, defineType} from "sanity";

export const execType = defineType({
  name: "exec", //internal display name for GROQ
  title: "Executive", //display name shown in Studio
  type: "document", //top-level document
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string", // ex: "President", "Treasurer"
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true }, // lets editors crop/focus the headshot
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number", // controls display order of the exec board
      validation: (Rule) => Rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "image" },
  },
});
