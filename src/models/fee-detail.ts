import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneyType1Schema, type MoneyType1 } from "./money-type1.js";

/**
 * Detail for a single fee component. May nest sub-fees in IncludedFeeDetailList. Mirrors SP-API
 * FeeDetail.
 */
export type FeeDetail = {
  /** Fee type, e.g. ReferralFee, WFSFulfillmentFee, VariableClosingFee. */
  feeType: string;
  /** Currency amount. */
  feeAmount: MoneyType1;
  /** Currency amount. */
  feePromotion?: MoneyType1;
  /** Currency amount. */
  taxAmount?: MoneyType1;
  /** Currency amount. */
  finalFee: MoneyType1;
};

export const feeDetailSchema: Schema<FeeDetail> = s.object<FeeDetail>({
  feeType: s.string(),
  feeAmount: moneyType1Schema,
  feePromotion: s.optional(s.lazy(() => moneyType1Schema)),
  taxAmount: s.optional(s.lazy(() => moneyType1Schema)),
  finalFee: moneyType1Schema,
  _keysMap: {
    feeType: "FeeType",
    feeAmount: "FeeAmount",
    feePromotion: "FeePromotion",
    taxAmount: "TaxAmount",
    finalFee: "FinalFee",
  },
});
