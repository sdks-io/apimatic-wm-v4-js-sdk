import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { status21Schema, type Status21 } from "./status21.js";

export type FinalPayoutCaseStatusResponse = {
  caseId?: string;
  status?: Status21;
  amount?: Money;
};

export const finalPayoutCaseStatusResponseSchema: Schema<FinalPayoutCaseStatusResponse> =
  s.object<FinalPayoutCaseStatusResponse>({
    caseId: s.optional(s.string()),
    status: s.optional(s.lazy(() => status21Schema)),
    amount: s.optional(s.lazy(() => moneySchema)),
  });
