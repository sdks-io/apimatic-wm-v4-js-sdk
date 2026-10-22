import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerTxns = {
  netPayable?: number;
  advancePayment?: number;
};

export const partnerTxnsSchema: Schema<PartnerTxns> = s.object<PartnerTxns>({
  netPayable: s.optional(s.float64()),
  advancePayment: s.optional(s.float64()),
});
