import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** IRP status of the items. */
export const ItemStatus5 = {
  Enrolled: "ENROLLED",
  Eligible: "ELIGIBLE",
  Complete: "COMPLETE",
} as const;
export type ItemStatus5 = (typeof ItemStatus5)[keyof typeof ItemStatus5] | (string & {});

export const itemStatus5Schema: EnumSchema<ItemStatus5> = s.enumOf<ItemStatus5>(ItemStatus5);
