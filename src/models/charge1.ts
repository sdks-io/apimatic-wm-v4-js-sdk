import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gmvSchema, type Gmv } from "./gmv.js";
import { tax1Schema, type Tax1 } from "./tax1.js";

export type Charge1 = {
  /** chargeType.<br><b style='color:green;'>Market availability: MX</b> */
  chargeType?: string;
  /** chargeName.<br><b style='color:green;'>Market availability: Global</b> */
  chargeName?: string;
  /** chargeAmount.<br><b style='color:green;'>Market availability: MX | CA |CL</b> */
  chargeAmount?: Gmv;
  /** tax.<br><b style='color:green;'>Market availability: MX</b> */
  tax?: Tax1[];
};

export const charge1Schema: Schema<Charge1> = s.object<Charge1>({
  chargeType: s.optional(s.string()),
  chargeName: s.optional(s.string()),
  chargeAmount: s.optional(s.lazy(() => gmvSchema)),
  tax: s.optional(s.array(s.lazy(() => tax1Schema))),
});
