import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Value3 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  scoreType?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  scoreValue?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  impact?: string;
};

export const value3Schema: Schema<Value3> = s.object<Value3>({
  scoreType: s.optional(s.string()),
  scoreValue: s.optional(s.int()),
  impact: s.optional(s.string()),
});
