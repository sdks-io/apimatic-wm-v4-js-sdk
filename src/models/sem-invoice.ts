import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of invoices */
export type SemInvoice = {
  /** The date when the invoice was generated. */
  invoiceDate?: string;
  /** Start date of the billing period. */
  billingDateFrom?: string;
  /** End date of the billing period. */
  billingDateTo?: string;
  /** Current status of the invoice. */
  status?: string;
  /** Total amount charged in the invoice. */
  amount?: number;
  /** Currency in which the invoice amount is denominated. */
  currency?: string;
  /** Payment method used for settling the invoice. */
  paymentMode?: string;
};

export const semInvoiceSchema: Schema<SemInvoice> = s.object<SemInvoice>({
  invoiceDate: s.optional(s.string()),
  billingDateFrom: s.optional(s.string()),
  billingDateTo: s.optional(s.string()),
  status: s.optional(s.string()),
  amount: s.optional(s.float64()),
  currency: s.optional(s.string()),
  paymentMode: s.optional(s.string()),
});
