import { tableSchema } from "@nozbe/watermelondb";

export const order_items = tableSchema({
  name: "order_items",
  columns: [
    { name: "order_id", type: "string", isIndexed: true },
    { name: "product_id", type: "string", isIndexed: true },
    { name: "amount", type: "number" },
    { name: "price", type: "number" },
    { name: "total", type: "number" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
