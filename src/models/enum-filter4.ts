import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameter16Schema, type Parameter16 } from "./parameter16.js";
import { values4Schema, type Values4 } from "./values4.js";

/**
 * Filter based on preset parameters and their associated values is possible with EnumFilter. No
 * parameter should be repeated.
 */
export type EnumFilter4 = {
  /**
   * This attribute applies an enum filter based on the predefined parameter.
   *
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM_AVAILABILITY_STATUS | The filters shows if an item is new or existing at Walmart. | string |
   * | DEMAND_SALES_TRENDS | The months of the year when demand is high for an item. | string |
   */
  parameter?: Parameter16;
  /**
   * Values correspond to the parameter used to apply filters to the response. The data in values[]
   * are predefined. An OR operator is applied between multiple values.
   *
   * | Attribute | Associated parameter of enumFilter | Description | Data Type |
   * | --- | ----------- | ----------- | ------- |
   * | EXISTING_IN_WALMART | ITEM_AVAILABILITY_STATUS | Filters items that already exist on Walmart. | string |
   * | NEW_TO_WALMART | ITEM_AVAILABILITY_STATUS | Filters items that are new to Walmart. | string |
   * | JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC | DEMAND_SALES_TRENDS | Indicates the months of the year when high demand is expected for the recommended item. | string |
   */
  values?: Values4;
};

export const enumFilter4Schema: Schema<EnumFilter4> = s.object<EnumFilter4>({
  parameter: s.optional(s.lazy(() => parameter16Schema)),
  values: s.optional(s.lazy(() => values4Schema)),
});
