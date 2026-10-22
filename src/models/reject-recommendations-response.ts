import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  rejectRecommendationsResponsePayloadSchema,
  type RejectRecommendationsResponsePayload,
} from "./reject-recommendations-response-payload.js";

export type RejectRecommendationsResponse = {
  /** Payload in the response for rejecting recommendations. */
  payload?: RejectRecommendationsResponsePayload;
};

export const rejectRecommendationsResponseSchema: Schema<RejectRecommendationsResponse> =
  s.object<RejectRecommendationsResponse>({
    payload: s.optional(s.lazy(() => rejectRecommendationsResponsePayloadSchema)),
  });
