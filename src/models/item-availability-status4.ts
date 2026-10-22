import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Item availability status of the recommended item. <br><b style='color:green;'>Market
 * availability: US | CA | MX</span></b>
 *
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | EXISTING_IN_WALMART | Indicates that item is existing in Walmart. | string |
 * | NEW_TO_WALMART | Indicates that item is new to Walmart. | string |
 */
export const ItemAvailabilityStatus4 = {
  ExistingInWalmart: "EXISTING_IN_WALMART",
  NewToWalmart: "NEW_TO_WALMART",
} as const;
export type ItemAvailabilityStatus4 =
  | (typeof ItemAvailabilityStatus4)[keyof typeof ItemAvailabilityStatus4]
  | (string & {});

export const itemAvailabilityStatus4Schema: EnumSchema<ItemAvailabilityStatus4> =
  s.enumOf<ItemAvailabilityStatus4>(ItemAvailabilityStatus4);
