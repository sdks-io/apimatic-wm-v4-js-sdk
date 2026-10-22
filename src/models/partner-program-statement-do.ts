import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerProgramAccSummarySchema,
  type PartnerProgramAccSummary,
} from "./partner-program-acc-summary.js";
import {
  partnerProgramTransactionDetailsSchema,
  type PartnerProgramTransactionDetails,
} from "./partner-program-transaction-details.js";
import { sellerInfoSchema, type SellerInfo } from "./seller-info.js";

export type PartnerProgramStatementDo = {
  outstandingMcaBalance?: number;
  sellerInfo?: SellerInfo;
  accountSummary?: PartnerProgramAccSummary;
  transactionDetails?: PartnerProgramTransactionDetails;
};

export const partnerProgramStatementDoSchema: Schema<PartnerProgramStatementDo> =
  s.object<PartnerProgramStatementDo>({
    outstandingMcaBalance: s.optional(s.float64()),
    sellerInfo: s.optional(s.lazy(() => sellerInfoSchema)),
    accountSummary: s.optional(s.lazy(() => partnerProgramAccSummarySchema)),
    transactionDetails: s.optional(s.lazy(() => partnerProgramTransactionDetailsSchema)),
    _keysMap: {
      outstandingMcaBalance: "outstandingMCABalance",
    },
  });
