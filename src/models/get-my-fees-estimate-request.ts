import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feesEstimateRequestSchema, type FeesEstimateRequest } from "./fees-estimate-request.js";

/**
 * Request wrapper for single-item fee estimate endpoints. Mirrors SP-API GetMyFeesEstimateRequest.
 */
export type GetMyFeesEstimateRequest = {
  /**
   * Fee estimate parameters for a single item. Used in both single-item and batch endpoints.
   * Mirrors SP-API FeesEstimateRequest.
   */
  feesEstimateRequest?: FeesEstimateRequest;
};

export const getMyFeesEstimateRequestSchema: Schema<GetMyFeesEstimateRequest> =
  s.object<GetMyFeesEstimateRequest>({
    feesEstimateRequest: s.optional(s.lazy(() => feesEstimateRequestSchema)),
    _keysMap: {
      feesEstimateRequest: "FeesEstimateRequest",
    },
  });
