import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import { status11Schema, type Status11 } from "./status11.js";

export type PayoutStatusResponse = {
  status?: Status11;
  amount?: Money;
  scheduledDate?: Date;
  completedDate?: Date;
};

export const payoutStatusResponseSchema: Schema<PayoutStatusResponse> = s.object<PayoutStatusResponse>({
  status: s.optional(s.lazy(() => status11Schema)),
  amount: s.optional(s.lazy(() => moneySchema)),
  scheduledDate: s.optional(s.dateTime()),
  completedDate: s.optional(s.dateTime()),
});
