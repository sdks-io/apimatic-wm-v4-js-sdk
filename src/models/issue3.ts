import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Issue3 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  date?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  publishFlag?: boolean;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  transactableFlag?: boolean;
};

export const issue3Schema: Schema<Issue3> = s.object<Issue3>({
  date: s.optional(s.string()),
  publishFlag: s.optional(s.boolean()),
  transactableFlag: s.optional(s.boolean()),
});
