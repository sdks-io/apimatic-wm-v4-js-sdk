import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { settlementTransactionSchema, type SettlementTransaction } from "./settlement-transaction.js";

export type SettlementDetailsResponse = {
  nextToken?: string;
  totalRecords?: number;
  transactions?: SettlementTransaction[];
};

export const settlementDetailsResponseSchema: Schema<SettlementDetailsResponse> =
  s.object<SettlementDetailsResponse>({
    nextToken: s.optional(s.string()),
    totalRecords: s.optional(s.int()),
    transactions: s.optional(s.array(s.lazy(() => settlementTransactionSchema))),
  });
