import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponse4Schema, type ErrorResponse4 } from "./error-response4.js";

export type CommonResponseBoolean = {
  /** Returns `true` if the operation was successful, `false` otherwise. */
  data?: boolean;
  /** List of error details describing why the request failed. */
  errors?: ErrorResponse4[];
};

export const commonResponseBooleanSchema: Schema<CommonResponseBoolean> = s.object<CommonResponseBoolean>({
  data: s.optional(s.boolean()),
  errors: s.optional(s.array(s.lazy(() => errorResponse4Schema))),
});
