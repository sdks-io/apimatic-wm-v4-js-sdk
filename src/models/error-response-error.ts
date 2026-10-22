import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";

/**
 * Standardized error response envelope containing an array of error details. All error responses
 * from the API follow this structure.
 */
export type ErrorResponseError = {
  /**
   * List of error details. Typically contains a single error, but may contain multiple errors for
   * validation failures.
   */
  error?: ErrorDetail[];
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>({
  error: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
