import CalenderIcon from "@/components/schemaIcons/CalenderIcon";
import { defineField, defineType } from "sanity";

export const sanitySchema = defineType({
  name: "sanitySchema",
  type: "document",
  title: "SanitySchema",
  icon: CalenderIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "eventType",
      type: "string",
      options: {
        list: ["in-person", "virtual"],
        layout: "radio",
      },
    }),
    defineField({
      name: "doorsOpen",
      description: "Number of minutes before the start time for admission",
      type: "number",
      initialValue: 60,
    }),
  ],
});
