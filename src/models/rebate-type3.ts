import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export const RebateType3 = {
  Amount: "AMOUNT",
  Product: "PRODUCT",
} as const;
export type RebateType3 = (typeof RebateType3)[keyof typeof RebateType3] | (string & {});

export const rebateType3Schema: EnumSchema<RebateType3> = s.enumOf<RebateType3>(RebateType3);
