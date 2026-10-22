import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameter20Schema, type Parameter20 } from "./parameter20.js";
import { values5Schema, type Values5 } from "./values5.js";

/**
 * Filter based on preset parameters and their associated values is possible with EnumFilter. No
 * parameter should be repeated. <br><b style='color:green;'>Market availability: US only</span></b>
 */
export type EnumFilter5 = {
  /**
   * Used to apply an enum filter based on a predefined parameter.
   *
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM_AVAILABILITY_STATUS | Filters items based on whether they are new to Walmart or already exist on Walmart. | string |
   * | DEMAND_SALES_TRENDS | Indicates the months of the year when high demand is observed for the recommended item. | string |
   */
  parameter?: Parameter20;
  /**
   * Values correspond to the parameter used to apply filters to the response. The data in values[]
   * are predefined. An OR operator is used between the values.
   *
   * | Attribute | Associated parameter of enumFilter | Description | Data Type |
   * | --- | --- | --- | --- |
   * | EXISTING_IN_WALMART | ITEM_AVAILABILITY_STATUS | Filters items that already exist on Walmart. | string |
   * | NEW_TO_WALMART | ITEM_AVAILABILITY_STATUS | Filters items that are new to Walmart. | string |
   * | JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC | DEMAND_SALES_TRENDS | Indicates the months of the year when high demand is observed for the recommended item. | string |
   */
  values?: Values5;
};

export const enumFilter5Schema: Schema<EnumFilter5> = s.object<EnumFilter5>({
  parameter: s.optional(s.lazy(() => parameter20Schema)),
  values: s.optional(s.lazy(() => values5Schema)),
});
