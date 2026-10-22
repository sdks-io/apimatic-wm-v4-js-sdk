import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Quantity that has been ordered by the customers but not yet shipped. */
export type SupplyQuantity = {
  /** The unit of measurement. Example: 'EACH' @default "EACH" */
  unit?: "EACH";
  /** Inventory Count */
  amount: number;
};

export const supplyQuantitySchema: Schema<SupplyQuantity> = s.object<SupplyQuantity>({
  unit: s.defaulted(s.literal("EACH"), "EACH"),
  amount: s.float64(),
});
