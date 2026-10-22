import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetail429Schema, type ErrorDetail429 } from "./error-detail429.js";

/** Error response envelope for rate limit (429) errors returned by the API Gateway. */
export type ErrorResponse429Error = {
  /** List of rate limit error details. */
  error?: ErrorDetail429[];
};

export const errorResponse429ErrorSchema: Schema<ErrorResponse429Error> = s.object<ErrorResponse429Error>({
  error: s.optional(s.array(s.lazy(() => errorDetail429Schema))),
});
