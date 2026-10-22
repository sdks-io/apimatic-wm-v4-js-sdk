import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Box Items */
export type BoxItem9 = {
  /** sku of an item */
  sku: string;
  /** Quantity of Item */
  quantity: number;
  /** primeLineNo from CA order's response */
  lineNumber: string;
};

export const boxItem9Schema: Schema<BoxItem9> = s.object<BoxItem9>({
  sku: s.string(),
  quantity: s.int(),
  lineNumber: s.string(),
});
