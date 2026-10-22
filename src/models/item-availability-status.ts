import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Item availability status of the recommended item.
 *
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | EXISTING_IN_WALMART | Indicates that item is existing in Walmart. | string |
 * | NEW_TO_WALMART | Indicates that item is new to Walmart. | string |
 */
export const ItemAvailabilityStatus = {
  ExistingInWalmart: "EXISTING_IN_WALMART",
  NewToWalmart: "NEW_TO_WALMART",
} as const;
export type ItemAvailabilityStatus =
  | (typeof ItemAvailabilityStatus)[keyof typeof ItemAvailabilityStatus]
  | (string & {});

export const itemAvailabilityStatusSchema: EnumSchema<ItemAvailabilityStatus> =
  s.enumOf<ItemAvailabilityStatus>(ItemAvailabilityStatus);
