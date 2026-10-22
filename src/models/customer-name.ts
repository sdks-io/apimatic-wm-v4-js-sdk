import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Customer information.<br><b style='color:green;'>Market availability: Global</b> */
export type CustomerName = {
  /** Customer first name.<br><b style='color:green;'>Market availability: Global</b> */
  firstName?: string;
  /** Customer last name.<br><b style='color:green;'>Market availability: Global</b> */
  lastName?: string;
};

export const customerNameSchema: Schema<CustomerName> = s.object<CustomerName>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
});
