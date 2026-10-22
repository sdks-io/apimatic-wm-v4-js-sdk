import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";

/**
 * Standardized error response envelope containing an array of error details. All error responses
 * from the API follow this structure.
 */
export type ErrorResponse = {
  /**
   * List of error details. Typically contains a single error, but may contain multiple errors for
   * validation failures.
   */
  error?: ErrorDetail[];
};

export const errorResponseSchema: Schema<ErrorResponse> = s.object<ErrorResponse>({
  error: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
