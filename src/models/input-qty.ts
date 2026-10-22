import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Quantity of an item that is input by the seller */
export type InputQty = {
  /** The unit of measurement. Example: 'EACH' @default "EACH" */
  unit?: "EACH";
  /** Inventory Count */
  amount: number;
};

export const inputQtySchema: Schema<InputQty> = s.object<InputQty>({
  unit: s.defaulted(s.literal("EACH"), "EACH"),
  amount: s.float64(),
});
