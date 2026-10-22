import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** quantity.<br><b style='color:green;'>Market availability: MX</b> */
export type Quantity1 = {
  /** currency.<br><b style='color:green;'>Market availability: MX</b> */
  unitOfMeasurement?: string;
  /** amount.<br><b style='color:green;'>Market availability: MX</b> */
  amount?: string;
};

export const quantity1Schema: Schema<Quantity1> = s.object<Quantity1>({
  unitOfMeasurement: s.optional(s.string()),
  amount: s.optional(s.string()),
});
