import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorIdentifiersSchema, type ErrorIdentifiers } from "./error-identifiers.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type Error5 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  code?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  field?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  description?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  info?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  severity?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  category?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  errorIdentifiers?: ErrorIdentifiers;
};

export const error5Schema: Schema<Error5> = s.object<Error5>({
  code: s.optional(s.string()),
  field: s.optional(s.string()),
  description: s.optional(s.string()),
  info: s.optional(s.string()),
  severity: s.optional(s.string()),
  category: s.optional(s.string()),
  errorIdentifiers: s.optional(s.lazy(() => errorIdentifiersSchema)),
});
