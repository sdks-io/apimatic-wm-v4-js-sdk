import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the item in IRP. */
export const ItemStatus = {
  Complete: "COMPLETE",
  Eligible: "ELIGIBLE",
  Enrolled: "ENROLLED",
} as const;
export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus] | (string & {});

export const itemStatusSchema: EnumSchema<ItemStatus> = s.enumOf<ItemStatus>(ItemStatus);
