// model/Post.js
import { Model, Q } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import { date, lazy, readonly, text } from "@nozbe/watermelondb/decorators";

export class Tag extends Model {
  static table = "tags";
  static associations: Associations = {
    product_tags: {
      type: "has_many",
      foreignKey: "tag_id",
    },
  };

  @text("name") name!: string;
  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  @lazy
  tags = this.collections
    .get("products")
    .query(Q.on("product_tags", "tag_id", this.id));
}
