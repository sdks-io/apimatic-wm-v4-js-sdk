import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feesEstimateResultSchema, type FeesEstimateResult } from "./fees-estimate-result.js";

/** Wraps the fee estimate result for a single-item endpoint. */
export type GetMyFeesEstimateResult = {
  /**
   * Fee estimate result for one item. Status indicates Success, ClientError, or ServiceError.
   * Mirrors SP-API FeesEstimateResult.
   */
  feesEstimateResult?: FeesEstimateResult;
};

export const getMyFeesEstimateResultSchema: Schema<GetMyFeesEstimateResult> =
  s.object<GetMyFeesEstimateResult>({
    feesEstimateResult: s.optional(s.lazy(() => feesEstimateResultSchema)),
    _keysMap: {
      feesEstimateResult: "FeesEstimateResult",
    },
  });
