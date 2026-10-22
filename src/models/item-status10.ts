import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** IRP status of the items.<br><b style='color:green;'>Market availability: US only</b> */
export const ItemStatus10 = {
  Enrolled: "ENROLLED",
  Eligible: "ELIGIBLE",
  Complete: "COMPLETE",
} as const;
export type ItemStatus10 = (typeof ItemStatus10)[keyof typeof ItemStatus10] | (string & {});

export const itemStatus10Schema: EnumSchema<ItemStatus10> = s.enumOf<ItemStatus10>(ItemStatus10);
