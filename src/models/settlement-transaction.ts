import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type SettlementTransaction = {
  purchaseOrderId?: string;
  transactionType?: string;
  amount?: Money;
  postedDate?: Date;
};

export const settlementTransactionSchema: Schema<SettlementTransaction> = s.object<SettlementTransaction>({
  purchaseOrderId: s.optional(s.string()),
  transactionType: s.optional(s.string()),
  amount: s.optional(s.lazy(() => moneySchema)),
  postedDate: s.optional(s.dateTime()),
});
