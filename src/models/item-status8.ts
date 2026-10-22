import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ELIGIBLE | To get items which are eligible for the program | string |
 * | ENROLLED | To get items which are currently enrolled into the program | string |
 * | COMPLETE | To get items which have attained target reviews through the program | string |
 * <br><b style='color:green;'>Market availability: US only</b>
 */
export const ItemStatus8 = {
  Eligible: "ELIGIBLE",
  Enrolled: "ENROLLED",
  Complete: "COMPLETE",
} as const;
export type ItemStatus8 = (typeof ItemStatus8)[keyof typeof ItemStatus8] | (string & {});

export const itemStatus8Schema: EnumSchema<ItemStatus8> = s.enumOf<ItemStatus8>(ItemStatus8);
