import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Quantity that has been ordered by the customers but not yet shipped.
 *
 * <strong style="color: green;">Market availability: Global</strong>
 */
export type Quantity5 = {
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

export const quantity5Schema: Schema<Quantity5> = s.object<Quantity5>({
  unit: s.defaulted(s.literal("EACH"), "EACH"),
  amount: s.float64(),
});
