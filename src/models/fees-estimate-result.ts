import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feesEstimateErrorSchema, type FeesEstimateError } from "./fees-estimate-error.js";
import { feesEstimateIdentifierSchema, type FeesEstimateIdentifier } from "./fees-estimate-identifier.js";
import { feesEstimateSchema, type FeesEstimate } from "./fees-estimate.js";
import { status4Schema, type Status4 } from "./status4.js";

/**
 * Fee estimate result for one item. Status indicates Success, ClientError, or ServiceError. Mirrors
 * SP-API FeesEstimateResult.
 */
export type FeesEstimateResult = {
  /** Outcome of the fee estimate. */
  status?: Status4;
  /**
   * Echoes back the item identifier and request parameters that produced this result. Mirrors
   * SP-API FeesEstimateIdentifier.
   */
  feesEstimateIdentifier?: FeesEstimateIdentifier;
  /** The estimated fees broken down by component. Mirrors SP-API FeesEstimate. */
  feesEstimate?: FeesEstimate;
  /** Error detail when a fee estimate could not be computed. */
  error?: FeesEstimateError;
};

export const feesEstimateResultSchema: Schema<FeesEstimateResult> = s.object<FeesEstimateResult>({
  status: s.optional(s.lazy(() => status4Schema)),
  feesEstimateIdentifier: s.optional(s.lazy(() => feesEstimateIdentifierSchema)),
  feesEstimate: s.optional(s.lazy(() => feesEstimateSchema)),
  error: s.optional(s.lazy(() => feesEstimateErrorSchema)),
  _keysMap: {
    status: "Status",
    feesEstimateIdentifier: "FeesEstimateIdentifier",
    feesEstimate: "FeesEstimate",
    error: "Error",
  },
});
