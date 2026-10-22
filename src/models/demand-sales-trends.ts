import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the months of the year when high demand is observed for the recommended item. The
 * sequence of month is in the decreasing order of the high demand. The values are comma separated.
 *
 * | Attribute | Description | Data Type |
 * | --- | ----------- | ------- |
 * | JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC | Months of the year. | string |
 */
export const DemandSalesTrends = {
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
export type DemandSalesTrends = (typeof DemandSalesTrends)[keyof typeof DemandSalesTrends] | (string & {});

export const demandSalesTrendsSchema: EnumSchema<DemandSalesTrends> =
  s.enumOf<DemandSalesTrends>(DemandSalesTrends);
