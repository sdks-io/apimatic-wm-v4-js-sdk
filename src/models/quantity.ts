import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Total quantity returned in this return line.> */
export type Quantity = {
  /** The unit of measure in the item's weight (e.g., 'EACH' or 'EA') */
  unitOfMeasure: string;
  /** The quantity of the unit of measure for the item */
  measurementValue: number;
};

export const quantitySchema: Schema<Quantity> = s.object<Quantity>({
  unitOfMeasure: s.string(),
  measurementValue: s.int(),
});
