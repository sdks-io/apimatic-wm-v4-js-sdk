import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemImage1 = {
  link?: string;
  height?: number;
  width?: number;
};

export const itemImage1Schema: Schema<ItemImage1> = s.object<ItemImage1>({
  link: s.optional(s.string()),
  height: s.optional(s.int()),
  width: s.optional(s.int()),
});
