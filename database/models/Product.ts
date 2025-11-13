// model/Post.js
import { Model, Q } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import {
  readonly,
  text,
  date,
  lazy,
  relation,
} from "@nozbe/watermelondb/decorators";

export class Product extends Model {
  static table = "products";
  static associations: Associations = {
    groups: {
      type: "belongs_to",
      key: "group_id",
    },
    product_tags: {
      type: "has_many",
      foreignKey: "product_id",
    },
  };

  @text("name") name!: string;
  @text("image") image!: string;
  @relation("groups", "group_id") groupId!: string;
  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  @lazy
  tags = this.collections
    .get("tags")
    .query(Q.on("product_tags", "product_id", this.id));
}
