// model/Post.js
import { Model } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import {
  date,
  immutableRelation,
  readonly,
} from "@nozbe/watermelondb/decorators";

export class ProductTag extends Model {
  static table = "product_tags";
  static associations: Associations = {
    products: {
      type: "belongs_to",
      key: "product_id",
    },
    tags: {
      type: "belongs_to",
      key: "tag_id",
    },
  };

  @immutableRelation("products", "product_id") product!: string;
  @immutableRelation("tags", "tag_id") tag!: string;
  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
