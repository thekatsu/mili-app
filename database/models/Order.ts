// model/Post.js
import { Model, Query } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import {
  children,
  date,
  field,
  readonly,
  text,
} from "@nozbe/watermelondb/decorators";
import { OrderItem } from "./OrderItem";

export class Order extends Model {
  static table = "orders";
  static associations: Associations = {
    order_items: {
      type: "has_many",
      foreignKey: "order_id",
    },
  };

  @children("order_items") items!: Query<OrderItem>;

  @text("short_description") shortDescription!: string;
  @text("partner_id") partnerId!: string;
  @date("opened_at") openedAt!: Date;
  @date("closed_at") closedAt!: Date;
  @field("total") total!: number;
  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
