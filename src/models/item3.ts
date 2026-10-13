import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { weightSchema, type Weight } from "./weight.js";

export type Item3 = {
  quantity: number;
  description: string;
  unitPrice?: Money;
  unitWeight?: Weight;
  sellerSku?: string;
};

export const item3Schema: Schema<Item3> = s.object<Item3>({
  quantity: s.int(),
  description: s.string(),
  unitPrice: s.optional(s.lazy(() => moneySchema)),
  unitWeight: s.optional(s.lazy(() => weightSchema)),
  sellerSku: s.optional(s.string()),
});
