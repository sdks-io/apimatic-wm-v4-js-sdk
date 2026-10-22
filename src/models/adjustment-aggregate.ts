import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdjustmentAggregate = {
  netPayable?: number;
  disputeSettlement?: number;
  returnShipServCharge?: number;
  returnHandlingServCharge?: number;
  fwdShippingServiceFee?: number;
};

export const adjustmentAggregateSchema: Schema<AdjustmentAggregate> = s.object<AdjustmentAggregate>({
  netPayable: s.optional(s.float64()),
  disputeSettlement: s.optional(s.float64()),
  returnShipServCharge: s.optional(s.float64()),
  returnHandlingServCharge: s.optional(s.float64()),
  fwdShippingServiceFee: s.optional(s.float64()),
});
