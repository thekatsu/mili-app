import { tableSchema } from "@nozbe/watermelondb";

export const tags = tableSchema({
  name: "tags",
  columns: [
    { name: "name", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
