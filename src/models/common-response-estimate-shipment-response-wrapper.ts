import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponse4Schema, type ErrorResponse4 } from "./error-response4.js";
import {
  estimateShipmentResponseWrapperSchema,
  type EstimateShipmentResponseWrapper,
} from "./estimate-shipment-response-wrapper.js";

export type CommonResponseEstimateShipmentResponseWrapper = {
  /** Response payload containing the list of shipping cost estimates. */
  data?: EstimateShipmentResponseWrapper;
  /** List of error details describing why the request failed. */
  errors?: ErrorResponse4[];
};

export const commonResponseEstimateShipmentResponseWrapperSchema: Schema<CommonResponseEstimateShipmentResponseWrapper> =
  s.object<CommonResponseEstimateShipmentResponseWrapper>({
    data: s.optional(s.lazy(() => estimateShipmentResponseWrapperSchema)),
    errors: s.optional(s.array(s.lazy(() => errorResponse4Schema))),
  });
