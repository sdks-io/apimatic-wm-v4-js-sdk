import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semPageSchema, type SemPage } from "./sem-page.js";

export type SemBillingHistoryRequest = {
  /** Pagination criteria */
  page?: SemPage;
};

export const semBillingHistoryRequestSchema: Schema<SemBillingHistoryRequest> =
  s.object<SemBillingHistoryRequest>({
    page: s.optional(s.lazy(() => semPageSchema)),
  });
