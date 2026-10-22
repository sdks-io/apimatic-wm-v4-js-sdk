import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** itemWeight.<br><b style='color:green;'>Market availability: US</b> */
export type ItemWeight = {
  /** Unit of measure for the quantity.<br><b style='color:green;'>Market availability: US</b> */
  unitOfMeasure?: string;
  /**
   * Numeric value for the quantity in the specified unit of measure.<br><b
   * style='color:green;'>Market availability: US</b>
   */
  measurementValue?: number;
};

export const itemWeightSchema: Schema<ItemWeight> = s.object<ItemWeight>({
  unitOfMeasure: s.optional(s.string()),
  measurementValue: s.optional(s.float64()),
});
