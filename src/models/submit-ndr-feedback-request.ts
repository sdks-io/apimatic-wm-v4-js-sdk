import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ndrActionSchema, type NdrAction } from "./ndr-action.js";

export type SubmitNdrFeedbackRequest = {
  sellerTrackingId: string;
  ndrAction: NdrAction;
  comments?: string;
};

export const submitNdrFeedbackRequestSchema: Schema<SubmitNdrFeedbackRequest> =
  s.object<SubmitNdrFeedbackRequest>({
    sellerTrackingId: s.string(),
    ndrAction: ndrActionSchema,
    comments: s.optional(s.string()),
  });
