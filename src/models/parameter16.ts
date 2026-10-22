import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This attribute applies an enum filter based on the predefined parameter.
 *
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ITEM_AVAILABILITY_STATUS | The filters shows if an item is new or existing at Walmart. | string |
 * | DEMAND_SALES_TRENDS | The months of the year when demand is high for an item. | string |
 */
export const Parameter16 = {
  ItemAvailabilityStatus: "ITEM_AVAILABILITY_STATUS",
  DemandSalesTrends: "DEMAND_SALES_TRENDS",
} as const;
export type Parameter16 = (typeof Parameter16)[keyof typeof Parameter16] | (string & {});

export const parameter16Schema: EnumSchema<Parameter16> = s.enumOf<Parameter16>(Parameter16);
