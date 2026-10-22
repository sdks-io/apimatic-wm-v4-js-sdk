import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameter4Schema, type Parameter4 } from "./parameter4.js";
import { values1Schema, type Values1 } from "./values1.js";

/**
 * Filter based on preset parameters and their associated values is possible with EnumFilter. No
 * parameter should be repeated.
 */
export type EnumFilter1 = {
  /**
   * To apply an enum filter based on the predefined parameter.
   *
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM_AVAILABILITY_STATUS | To filter based on whether the items which are new to Walmart or existing in Walmart. | string |
   * | DEMAND_SALES_TRENDS | Indicates the months of the year when high demand is observed for the recommended item. | string |
   */
  parameter?: Parameter4;
  /**
   * Values correspond to the parameter for applying filter on the response. The data in values[]
   * are predefined. OR operator is used between the values.
   *
   * | Attribute | Associated parameter of enumFilter | Description | Data Type |
   * | --- | ----------- | ----------- | ------- |
   * | EXISTING_IN_WALMART | ITEM_AVAILABILITY_STATUS | Filters existing items at Walmart. | string |
   * | NEW_TO_WALMART | ITEM_AVAILABILITY_STATUS | Filters new items at Walmart. | string |
   * | JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC | DEMAND_SALES_TRENDS | Indicates the months of the year when high demand is observed for the recommended item. | string |
   */
  values?: Values1;
};

export const enumFilter1Schema: Schema<EnumFilter1> = s.object<EnumFilter1>({
  parameter: s.optional(s.lazy(() => parameter4Schema)),
  values: s.optional(s.lazy(() => values1Schema)),
});
