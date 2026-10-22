import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Indicates the quantity that has been ordered by the customers but not yet shipped.
 *
 * <strong style="color: green;">Market availability: Global</strong>
 */
export type InputQty13 = {
  /**
   * Indicates a unit of measure. Walmart Marketplace supports only EACH, which indicates one
   * individual sellable item.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   *
   * @default "EACH"
   */
  unit?: "EACH";
  /**
   * Inventory Count.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  amount: number;
};

export const inputQty13Schema: Schema<InputQty13> = s.object<InputQty13>({
  unit: s.defaulted(s.literal("EACH"), "EACH"),
  amount: s.float64(),
});
