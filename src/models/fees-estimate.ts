import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feeDetailSchema, type FeeDetail } from "./fee-detail.js";
import { moneyType1Schema, type MoneyType1 } from "./money-type1.js";

/** The estimated fees broken down by component. Mirrors SP-API FeesEstimate. */
export type FeesEstimate = {
  timeOfFeesEstimation: Date;
  /** Currency amount. */
  totalFeesEstimate: MoneyType1;
  feeDetailList?: FeeDetail[];
};

export const feesEstimateSchema: Schema<FeesEstimate> = s.object<FeesEstimate>({
  timeOfFeesEstimation: s.dateTime(),
  totalFeesEstimate: moneyType1Schema,
  feeDetailList: s.optional(s.array(s.lazy(() => feeDetailSchema))),
  _keysMap: {
    timeOfFeesEstimation: "TimeOfFeesEstimation",
    totalFeesEstimate: "TotalFeesEstimate",
    feeDetailList: "FeeDetailList",
  },
});
