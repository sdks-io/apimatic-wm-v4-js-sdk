import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Issue17 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  title?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  value?: string;
};

export const issue17Schema: Schema<Issue17> = s.object<Issue17>({
  title: s.optional(s.string()),
  value: s.optional(s.string()),
});
