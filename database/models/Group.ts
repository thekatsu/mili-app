// model/Post.js
import { Model } from "@nozbe/watermelondb";
import { Associations } from "@nozbe/watermelondb/Model";
import {
  date,
  readonly,
  relation,
  text,
  writer,
} from "@nozbe/watermelondb/decorators";

export class Group extends Model {
  static table = "groups";
  static associations: Associations = {
    products: {
      type: "has_many",
      foreignKey: "group_id",
    },
  };

  @text("name") name!: string;
  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;

  @writer
  async updateName(newName: string) {
    await this.update((group) => {
      group.name = newName;
    });
  }
}
