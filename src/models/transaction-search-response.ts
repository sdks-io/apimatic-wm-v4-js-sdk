import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { settlementTransactionSchema, type SettlementTransaction } from "./settlement-transaction.js";

export type TransactionSearchResponse = {
  nextToken?: string;
  totalRecords?: number;
  transactions?: SettlementTransaction[];
};

export const transactionSearchResponseSchema: Schema<TransactionSearchResponse> =
  s.object<TransactionSearchResponse>({
    nextToken: s.optional(s.string()),
    totalRecords: s.optional(s.int()),
    transactions: s.optional(s.array(s.lazy(() => settlementTransactionSchema))),
  });
