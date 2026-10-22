import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issue17Schema, type Issue17 } from "./issue17.js";

export type Issue16 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  score?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  isEditable?: boolean;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  attributeValue?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  isSpecAttribute?: boolean;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  attributeName?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issueCount?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issues?: Issue17[];
};

export const issue16Schema: Schema<Issue16> = s.object<Issue16>({
  score: s.optional(s.float64()),
  isEditable: s.optional(s.boolean()),
  attributeValue: s.optional(s.string()),
  isSpecAttribute: s.optional(s.boolean()),
  attributeName: s.optional(s.string()),
  issueCount: s.optional(s.int()),
  issues: s.optional(s.array(s.lazy(() => issue17Schema))),
});
