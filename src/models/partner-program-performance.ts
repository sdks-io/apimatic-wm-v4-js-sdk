import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerProgramPerformance = {
  refundRateSellerFault?: number;
  refundRateCustomerFault?: number;
  ots?: number;
  otd?: number;
  vtr?: number;
  cancellationSellerFault?: number;
  cancellationCustomerFault?: number;
};

export const partnerProgramPerformanceSchema: Schema<PartnerProgramPerformance> =
  s.object<PartnerProgramPerformance>({
    refundRateSellerFault: s.optional(s.float64()),
    refundRateCustomerFault: s.optional(s.float64()),
    ots: s.optional(s.float64()),
    otd: s.optional(s.float64()),
    vtr: s.optional(s.float64()),
    cancellationSellerFault: s.optional(s.float64()),
    cancellationCustomerFault: s.optional(s.float64()),
  });
