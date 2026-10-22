import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issue3Schema, type Issue3 } from "./issue3.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type PublishAndTransactable3 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issueTitle?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  totalIssue?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  maxIssue?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issues?: Issue3[];
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  score?: number;
};

export const publishAndTransactable3Schema: Schema<PublishAndTransactable3> =
  s.object<PublishAndTransactable3>({
    issueTitle: s.optional(s.string()),
    totalIssue: s.optional(s.int()),
    maxIssue: s.optional(s.int()),
    issues: s.optional(s.array(s.lazy(() => issue3Schema))),
    score: s.optional(s.int()),
  });
