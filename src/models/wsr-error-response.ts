import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wsrErrorDetailSchema, type WsrErrorDetail } from "./wsr-error-detail.js";

/** Error response wrapper containing an array of errors */
export type WsrErrorResponse = {
  /** List of error details */
  errors?: WsrErrorDetail[];
};

export const wsrErrorResponseSchema: Schema<WsrErrorResponse> = s.object<WsrErrorResponse>({
  errors: s.optional(s.array(s.lazy(() => wsrErrorDetailSchema))),
});
