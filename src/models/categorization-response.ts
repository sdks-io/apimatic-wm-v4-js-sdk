import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  categorizationResponsePayloadSchema,
  type CategorizationResponsePayload,
} from "./categorization-response-payload.js";

export type CategorizationResponse = {
  /** Payload in the response having the categorization details about the item recommendations. */
  payload?: CategorizationResponsePayload;
};

export const categorizationResponseSchema: Schema<CategorizationResponse> = s.object<CategorizationResponse>({
  payload: s.optional(s.lazy(() => categorizationResponsePayloadSchema)),
});
