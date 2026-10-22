import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** customerName.<br><b style='color:green;'>Market availability: MX</b> */
export type CustomerName1 = {
  /** firstName.<br><b style='color:green;'>Market availability: MX</b> */
  firstName?: string;
  /** lastName.<br><b style='color:green;'>Market availability: MX</b> */
  lastName?: string;
};

export const customerName1Schema: Schema<CustomerName1> = s.object<CustomerName1>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
});
