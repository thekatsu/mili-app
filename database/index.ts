import { Database } from "@nozbe/watermelondb";
import { setGenerator } from "@nozbe/watermelondb/utils/common/randomId";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import * as Crypto from "expo-crypto";

import appSchema from "@/database/schemas";
import schemaMigrations from "@/database/migrations";
import {
  Group,
  Order,
  OrderItem,
  Product,
  ProductTag,
  Tag,
} from "@/database/models";

const adapter = new SQLiteAdapter({
  schema: appSchema,
  migrations: schemaMigrations,
  jsi: true,
  onSetUpError: (error) => {
    console.log(error);
  },
});

export const db = new Database({
  adapter,
  modelClasses: [Group, Order, OrderItem, Product, ProductTag, Tag],
});

setGenerator(() => Crypto.randomUUID());
