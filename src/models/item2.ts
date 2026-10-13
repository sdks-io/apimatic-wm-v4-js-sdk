import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Item2 = {
  orderItemId: string;
  quantity: number;
};

export const item2Schema: Schema<Item2> = s.object<Item2>({
  orderItemId: s.string(),
  quantity: s.int(),
});
