import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Predefined values used to apply filters to the response. Multiple values are evaluated using the
 * OR operator.
 *
 * | Attribute | Associated parameter of enumFilter | Description | Data Type |
 * | --- | --- | --- | --- |
 * | EXISTING_IN_WALMART | ITEM_AVAILABILITY_STATUS | Filters items that already exist on Walmart. | string |
 * | NEW_TO_WALMART | ITEM_AVAILABILITY_STATUS | Filters items that are new to Walmart. | string |
 * | JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC | DEMAND_SALES_TRENDS | Indicates the months of the year when high demand is observed for the recommended item. | string |
 */
export const Values = {
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
export type Values = (typeof Values)[keyof typeof Values] | (string & {});

export const valuesSchema: EnumSchema<Values> = s.enumOf<Values>(Values);
