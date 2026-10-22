import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";
import { errorResponse4Schema, type ErrorResponse4 } from "./error-response4.js";

export type CommonResponseListLabelGenerationResponse = {
  /** List of label details generated for the specified purchase order ID. */
  data?: Data2[];
  /** List of error details describing why the request failed. */
  errors?: ErrorResponse4[];
};

export const commonResponseListLabelGenerationResponseSchema: Schema<CommonResponseListLabelGenerationResponse> =
  s.object<CommonResponseListLabelGenerationResponse>({
    data: s.optional(s.array(s.lazy(() => data2Schema))),
    errors: s.optional(s.array(s.lazy(() => errorResponse4Schema))),
  });
