import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ELIGIBLE | To get items which are eligible for the program | string |
 * | ENROLLED | To get items which are currently enrolled into the program | string |
 * | COMPLETE | To get items which have attained target reviews through the program | string |
 */
export const ItemStatus3 = {
  Eligible: "ELIGIBLE",
  Enrolled: "ENROLLED",
  Complete: "COMPLETE",
} as const;
export type ItemStatus3 = (typeof ItemStatus3)[keyof typeof ItemStatus3] | (string & {});

export const itemStatus3Schema: EnumSchema<ItemStatus3> = s.enumOf<ItemStatus3>(ItemStatus3);
