import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

export type DisbursementsV4FinalPayoutCaseUpdateStatusRequest = {
  status: Status3;
  notes?: string;
};

export const disbursementsV4FinalPayoutCaseUpdateStatusRequestSchema: Schema<DisbursementsV4FinalPayoutCaseUpdateStatusRequest> =
  s.object<DisbursementsV4FinalPayoutCaseUpdateStatusRequest>({
    status: status3Schema,
    notes: s.optional(s.string()),
  });
