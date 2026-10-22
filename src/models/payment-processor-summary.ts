import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taxFormSchema, type TaxForm } from "./tax-form.js";

export type PaymentProcessorSummary = {
  /** Payout year for which tax forms were generated, formatted as YYYY. */
  payoutYear?: string;
  /** Tax forms available for the specified payout year. */
  taxForms?: TaxForm[];
};

export const paymentProcessorSummarySchema: Schema<PaymentProcessorSummary> =
  s.object<PaymentProcessorSummary>({
    payoutYear: s.optional(s.string()),
    taxForms: s.optional(s.array(s.lazy(() => taxFormSchema))),
  });
