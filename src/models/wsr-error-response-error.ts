import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wsrErrorDetailSchema, type WsrErrorDetail } from "./wsr-error-detail.js";

/** Error response wrapper containing an array of errors */
export type WsrErrorResponseError = {
  /** List of error details */
  errors?: WsrErrorDetail[];
};

export const wsrErrorResponseErrorSchema: Schema<WsrErrorResponseError> = s.object<WsrErrorResponseError>({
  errors: s.optional(s.array(s.lazy(() => wsrErrorDetailSchema))),
});
