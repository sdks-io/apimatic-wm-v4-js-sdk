import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Payload in the response for rejecting recommendations. */
export type RejectRecommendationsResponsePayload = {
  /** Message confirming the rejection of the recommendations. */
  message?: string;
};

export const rejectRecommendationsResponsePayloadSchema: Schema<RejectRecommendationsResponsePayload> =
  s.object<RejectRecommendationsResponsePayload>({
    message: s.optional(s.string()),
  });
