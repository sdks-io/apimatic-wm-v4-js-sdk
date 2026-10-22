import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pricing1Schema, type Pricing1 } from "./pricing1.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type PricingList2 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  replaceAll?: boolean;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  pricing: Pricing1[];
};

export const pricingList2Schema: Schema<PricingList2> = s.object<PricingList2>({
  replaceAll: s.optional(s.boolean()),
  pricing: s.array(s.lazy(() => pricing1Schema)),
});
