import { AppSchema, appSchema } from "@nozbe/watermelondb";
import { products } from "@/database/schemas/products";
import { product_tags } from "@/database/schemas/product_tags";
import { groups } from "@/database/schemas/groups";
import { tags } from "@/database/schemas/tags";
import { orders } from "@/database/schemas/orders";
import { order_items } from "@/database/schemas/order_items";

export default appSchema({
  version: 1,
  tables: [products, groups, tags, product_tags, orders, order_items],
});
