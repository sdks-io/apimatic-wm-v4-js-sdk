import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current status of the item in IRP.<br><b style='color:green;'>Market availability: US only</b>
 */
export const ItemStatus9 = {
  Complete: "COMPLETE",
  Eligible: "ELIGIBLE",
  Enrolled: "ENROLLED",
} as const;
export type ItemStatus9 = (typeof ItemStatus9)[keyof typeof ItemStatus9] | (string & {});

export const itemStatus9Schema: EnumSchema<ItemStatus9> = s.enumOf<ItemStatus9>(ItemStatus9);
