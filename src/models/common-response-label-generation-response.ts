import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";
import { errorResponse4Schema, type ErrorResponse4 } from "./error-response4.js";

export type CommonResponseLabelGenerationResponse = {
  /** Response payload containing the generated label tracking details. */
  data?: Data1;
  /** List of error details describing why the request failed. */
  errors?: ErrorResponse4[];
};

export const commonResponseLabelGenerationResponseSchema: Schema<CommonResponseLabelGenerationResponse> =
  s.object<CommonResponseLabelGenerationResponse>({
    data: s.optional(s.lazy(() => data1Schema)),
    errors: s.optional(s.array(s.lazy(() => errorResponse4Schema))),
  });
