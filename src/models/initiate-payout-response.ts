import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type InitiatePayoutResponse = {
  payoutId?: string;
  status?: string;
  amount?: Money;
};

export const initiatePayoutResponseSchema: Schema<InitiatePayoutResponse> = s.object<InitiatePayoutResponse>({
  payoutId: s.optional(s.string()),
  status: s.optional(s.string()),
  amount: s.optional(s.lazy(() => moneySchema)),
});
