import { tableSchema } from "@nozbe/watermelondb";

export const groups = tableSchema({
  name: "groups",
  columns: [
    { name: "name", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
