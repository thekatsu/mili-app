import { tableSchema } from "@nozbe/watermelondb";

export const products = tableSchema({
  name: "products",
  columns: [
    { name: "name", type: "string" },
    { name: "image", type: "string" },
    { name: "group_id", type: "string", isIndexed: true },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
