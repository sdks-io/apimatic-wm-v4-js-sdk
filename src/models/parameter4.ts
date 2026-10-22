import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * To apply an enum filter based on the predefined parameter.
 *
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ITEM_AVAILABILITY_STATUS | To filter based on whether the items which are new to Walmart or existing in Walmart. | string |
 * | DEMAND_SALES_TRENDS | Indicates the months of the year when high demand is observed for the recommended item. | string |
 */
export const Parameter4 = {
  ItemAvailabilityStatus: "ITEM_AVAILABILITY_STATUS",
  DemandSalesTrends: "DEMAND_SALES_TRENDS",
} as const;
export type Parameter4 = (typeof Parameter4)[keyof typeof Parameter4] | (string & {});

export const parameter4Schema: EnumSchema<Parameter4> = s.enumOf<Parameter4>(Parameter4);
