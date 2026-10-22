import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentProcessorSummarySchema, type PaymentProcessorSummary } from "./payment-processor-summary.js";

export type Payload10 = {
  /** Walmart partner identifier for the seller account. */
  partnerId?: string;
  /** List of yearly summaries with the tax forms issued for each payout year. */
  paymentProcessorSummary?: PaymentProcessorSummary[];
};

export const payload10Schema: Schema<Payload10> = s.object<Payload10>({
  partnerId: s.optional(s.string()),
  paymentProcessorSummary: s.optional(s.array(s.lazy(() => paymentProcessorSummarySchema))),
});
