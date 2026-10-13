import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { refundTypeSchema, type RefundType } from "./refund-type.js";

export type RefundOrderLine = {
  lineNumber: string;
  refundAmount: Money;
  /**
   * Why the refund is being issued. Compressed from gmp-orders-mono's 22-entry `RefundReason` enum
   * to the three classes that actually drive downstream behaviour today (return-flow vs cancel-flow
   * vs goodwill-credit). Free-form sub-reason goes in `reason`.
   */
  refundType: RefundType;
  /** Optional free-form note (e.g. "item arrived damaged"). */
  reason?: string;
};

export const refundOrderLineSchema: Schema<RefundOrderLine> = s.object<RefundOrderLine>({
  lineNumber: s.string(),
  refundAmount: moneySchema,
  refundType: refundTypeSchema,
  reason: s.optional(s.string()),
});
