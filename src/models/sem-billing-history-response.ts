import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semInvoiceSchema, type SemInvoice } from "./sem-invoice.js";
import { semPaginationSchema, type SemPagination } from "./sem-pagination.js";

export type SemBillingHistoryResponse = {
  /** Pagination details */
  pagination?: SemPagination;
  /** List of invoices */
  data?: SemInvoice[];
};

export const semBillingHistoryResponseSchema: Schema<SemBillingHistoryResponse> =
  s.object<SemBillingHistoryResponse>({
    pagination: s.optional(s.lazy(() => semPaginationSchema)),
    data: s.optional(s.array(s.lazy(() => semInvoiceSchema))),
  });
