import {defineField, defineType} from "sanity";

export const teamType = defineType({
  name: "team", //internal display name for GROQ
  title: "Team", //display name shown in Studio
  type: "document", //top-level document
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string", // ex: "Web Development"
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "leads",
      title: "Leads",
      type: "array", // list of lead names
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "members",
      title: "Members",
      type: "array", // list of member names
      of: [{ type: "string" }],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number", // controls display order of the teams list
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
    select: { title: "name", subtitle: "leads" },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: Array.isArray(subtitle) ? subtitle.join(", ") : subtitle,
      };
    },
  },
});
