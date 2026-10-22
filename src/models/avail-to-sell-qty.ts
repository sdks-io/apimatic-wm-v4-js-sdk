import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Quantity of an item that is available to be allocated to orders. */
export type AvailToSellQty = {
  /** The unit of measurement. Example: 'EACH' @default "EACH" */
  unit?: "EACH";
  /** Inventory Count */
  amount: number;
};

export const availToSellQtySchema: Schema<AvailToSellQty> = s.object<AvailToSellQty>({
  unit: s.defaulted(s.literal("EACH"), "EACH"),
  amount: s.float64(),
});
