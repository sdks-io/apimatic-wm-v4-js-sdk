import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DisbursementsV4PaymentAutoPayoutRequest = {
  /** true to enable automatic payouts; false to disable */
  enabled: boolean;
};

export const disbursementsV4PaymentAutoPayoutRequestSchema: Schema<DisbursementsV4PaymentAutoPayoutRequest> =
  s.object<DisbursementsV4PaymentAutoPayoutRequest>({
    enabled: s.boolean(),
  });
