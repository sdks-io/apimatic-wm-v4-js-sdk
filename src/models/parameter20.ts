import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Used to apply an enum filter based on a predefined parameter.
 *
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | ITEM_AVAILABILITY_STATUS | Filters items based on whether they are new to Walmart or already exist on Walmart. | string |
 * | DEMAND_SALES_TRENDS | Indicates the months of the year when high demand is observed for the recommended item. | string |
 */
export const Parameter20 = {
  ItemAvailabilityStatus: "ITEM_AVAILABILITY_STATUS",
  DemandSalesTrends: "DEMAND_SALES_TRENDS",
} as const;
export type Parameter20 = (typeof Parameter20)[keyof typeof Parameter20] | (string & {});

export const parameter20Schema: EnumSchema<Parameter20> = s.enumOf<Parameter20>(Parameter20);
