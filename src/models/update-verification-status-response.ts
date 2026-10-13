import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationStatus1Schema, type VerificationStatus1 } from "./verification-status1.js";

export type UpdateVerificationStatusResponse = {
  purchaseOrderId?: string;
  verificationStatus?: VerificationStatus1;
  updatedAt?: Date;
};

export const updateVerificationStatusResponseSchema: Schema<UpdateVerificationStatusResponse> =
  s.object<UpdateVerificationStatusResponse>({
    purchaseOrderId: s.optional(s.string()),
    verificationStatus: s.optional(s.lazy(() => verificationStatus1Schema)),
    updatedAt: s.optional(s.dateTime()),
  });
