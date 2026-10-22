import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerProgramAccSummary = {
  openingBalance?: number;
  orderActivity?: number;
  walmartFulfillmentServices?: number;
  otherActivities?: number;
  reserve?: number;
  paidToYou?: number;
  closingBalance?: number;
  scheduledSettlementDate?: string;
  paymentProcessor?: string;
  settleCycle?: string;
  reserveToDate?: number;
  lastUpdatedDate?: string;
  holdAmt?: number;
  holdDates?: string;
};

export const partnerProgramAccSummarySchema: Schema<PartnerProgramAccSummary> =
  s.object<PartnerProgramAccSummary>({
    openingBalance: s.optional(s.float64()),
    orderActivity: s.optional(s.float64()),
    walmartFulfillmentServices: s.optional(s.float64()),
    otherActivities: s.optional(s.float64()),
    reserve: s.optional(s.float64()),
    paidToYou: s.optional(s.float64()),
    closingBalance: s.optional(s.float64()),
    scheduledSettlementDate: s.optional(s.string()),
    paymentProcessor: s.optional(s.string()),
    settleCycle: s.optional(s.string()),
    reserveToDate: s.optional(s.float64()),
    lastUpdatedDate: s.optional(s.string()),
    holdAmt: s.optional(s.float64()),
    holdDates: s.optional(s.string()),
  });
