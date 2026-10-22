import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cumulativeAccuracyTrendSchema, type CumulativeAccuracyTrend } from "./cumulative-accuracy-trend.js";

export type GetSflaResultPayload = {
  /** Past number of days the metrics calculated */
  reportDuration?: number;
  /** Timestamp when metrics are calculated in ISO format */
  updatedTimestamp?: string;
  /** Cumulative ship-from location accuracy */
  cumulativeAccuracy?: number;
  /** Cumulative ship-from location accuracy trend */
  cumulativeAccuracyTrend?: CumulativeAccuracyTrend;
  /** Number of orders impacted */
  impactedOrderCount?: number;
  /** Recommended Carrier method accuracy value */
  recommendedAccuracy?: number;
  /** Ship-from location accuracies of individual places */
  infractionDrivers?: Record<string, number>;
};

export const getSflaResultPayloadSchema: Schema<GetSflaResultPayload> = s.object<GetSflaResultPayload>({
  reportDuration: s.optional(s.int()),
  updatedTimestamp: s.optional(s.string()),
  cumulativeAccuracy: s.optional(s.float64()),
  cumulativeAccuracyTrend: s.optional(s.lazy(() => cumulativeAccuracyTrendSchema)),
  impactedOrderCount: s.optional(s.int()),
  recommendedAccuracy: s.optional(s.float64()),
  infractionDrivers: s.optional(s.record(s.string(), s.float64())),
});
