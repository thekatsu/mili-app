// model/Post.js
import { Model } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import {
  date,
  field,
  immutableRelation,
  readonly,
  text,
} from "@nozbe/watermelondb/decorators";

export class OrderItem extends Model {
  static table = "order_items";
  static associations: Associations = {
    orders: {
      type: "belongs_to",
      key: "order_id",
    },
  };

  @immutableRelation("orders", "order_id") orderId!: string;
  @text("product_id") productId!: string;
  @field("amount") amount!: number;
  @field("price") price!: number;
  @field("total") total!: number;
  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
