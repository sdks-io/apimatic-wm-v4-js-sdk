import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cumulativeAccuracyTrend2Schema,
  type CumulativeAccuracyTrend2,
} from "./cumulative-accuracy-trend2.js";

export type GetCmaResultPayload = {
  /** Past number of days the metrics calculated */
  reportDuration?: number;
  /** Timestamp when metrics are calculated in ISO format */
  updatedTimestamp?: string;
  /** Cumulative carrier method accuracy */
  cumulativeAccuracy?: number;
  /** Cumulative carrier method accuracy trend */
  cumulativeAccuracyTrend?: CumulativeAccuracyTrend2;
  /** Number of orders impacted */
  impactedOrderCount?: number;
  /** Recommended Carrier method accuracy value */
  recommendedAccuracy?: number;
  /** Individual carrier method accuracies */
  infractionDrivers?: Record<string, number>;
};

export const getCmaResultPayloadSchema: Schema<GetCmaResultPayload> = s.object<GetCmaResultPayload>({
  reportDuration: s.optional(s.int()),
  updatedTimestamp: s.optional(s.string()),
  cumulativeAccuracy: s.optional(s.float64()),
  cumulativeAccuracyTrend: s.optional(s.lazy(() => cumulativeAccuracyTrend2Schema)),
  impactedOrderCount: s.optional(s.int()),
  recommendedAccuracy: s.optional(s.float64()),
  infractionDrivers: s.optional(s.record(s.string(), s.float64())),
});
