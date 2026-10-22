import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusQuantity = {
  /** The unit of measurement for status quantity (e.g., EACH) */
  unitOfMeasurement?: string;
  /** The amount for the status quantity */
  amount?: string;
};

export const statusQuantitySchema: Schema<StatusQuantity> = s.object<StatusQuantity>({
  unitOfMeasurement: s.optional(s.string()),
  amount: s.optional(s.string()),
});
