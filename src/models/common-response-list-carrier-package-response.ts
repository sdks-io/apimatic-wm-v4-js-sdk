import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";
import { errorResponse4Schema, type ErrorResponse4 } from "./error-response4.js";

export type CommonResponseListCarrierPackageResponse = {
  /** List of supported carrier package types. */
  data?: Data3[];
  /** List of error details describing why the request failed. */
  errors?: ErrorResponse4[];
};

export const commonResponseListCarrierPackageResponseSchema: Schema<CommonResponseListCarrierPackageResponse> =
  s.object<CommonResponseListCarrierPackageResponse>({
    data: s.optional(s.array(s.lazy(() => data3Schema))),
    errors: s.optional(s.array(s.lazy(() => errorResponse4Schema))),
  });
