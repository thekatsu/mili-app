import { tableSchema } from "@nozbe/watermelondb";

export const product_tags = tableSchema({
  name: "product_tags",
  columns: [
    { name: "product_id", type: "string", isIndexed: true },
    { name: "tag_id", type: "string", isIndexed: true },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
