import { tableSchema } from "@nozbe/watermelondb";

export const orders = tableSchema({
  name: "orders",
  columns: [
    { name: "short_description", type: "string", isOptional: true },
    { name: "partner_id", type: "string", isOptional: true },
    { name: "opened_at", type: "number" },
    { name: "closed_at", type: "number", isOptional: true },
    { name: "total", type: "number" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
});
