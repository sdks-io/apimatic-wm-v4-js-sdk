import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Values correspond to the parameter for applying filter on the response. The data in values[] are
 * predefined. OR operator is used between the values.
 *
 * | Attribute | Associated parameter of enumFilter | Description | Data Type |
 * | --- | ----------- | ----------- | ------- |
 * | EXISTING_IN_WALMART | ITEM_AVAILABILITY_STATUS | Filters existing items at Walmart. | string |
 * | NEW_TO_WALMART | ITEM_AVAILABILITY_STATUS | Filters new items at Walmart. | string |
 * | JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC | DEMAND_SALES_TRENDS | Indicates the months of the year when high demand is observed for the recommended item. | string |
 */
export const Values1 = {
  ExistingInWalmart: "EXISTING_IN_WALMART",
  NewToWalmart: "NEW_TO_WALMART",
  MostSearchedFor: "MOST_SEARCHED_FOR",
  BestSellers: "BEST_SELLERS",
  DealItems: "DEAL_ITEMS",
  Jan: "JAN",
  Feb: "FEB",
  Mar: "MAR",
  Apr: "APR",
  May: "MAY",
  Jun: "JUN",
  Jul: "JUL",
  Aug: "AUG",
  Sep: "SEP",
  Oct: "OCT",
  Nov: "NOV",
  Dec: "DEC",
} as const;
export type Values1 = (typeof Values1)[keyof typeof Values1] | (string & {});

export const values1Schema: EnumSchema<Values1> = s.enumOf<Values1>(Values1);
