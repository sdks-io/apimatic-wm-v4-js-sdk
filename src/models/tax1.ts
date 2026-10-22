import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gmvSchema, type Gmv } from "./gmv.js";

export type Tax1 = {
  /** taxName.<br><b style='color:green;'>Market availability: MX</b> */
  taxName?: string;
  /** taxName.<br><b style='color:green;'>Market availability: MX</b> */
  taxAmount?: Gmv;
};

export const tax1Schema: Schema<Tax1> = s.object<Tax1>({
  taxName: s.optional(s.string()),
  taxAmount: s.optional(s.lazy(() => gmvSchema)),
});
