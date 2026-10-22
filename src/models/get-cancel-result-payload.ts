import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cumulativeRateTrend8Schema, type CumulativeRateTrend8 } from "./cumulative-rate-trend8.js";
import {
  nonAccountableCancellationsDriversSchema,
  type NonAccountableCancellationsDrivers,
} from "./non-accountable-cancellations-drivers.js";
import {
  performanceRecommendationSchema,
  type PerformanceRecommendation,
} from "./performance-recommendation.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";
import {
  sellerAccountableCancellationsDriversSchema,
  type SellerAccountableCancellationsDrivers,
} from "./seller-accountable-cancellations-drivers.js";

export type GetCancelResultPayload = {
  /** Past number of days the metrics calculated */
  reportDuration?: number;
  /** Timestamp when metrics are calculated in ISO format */
  updatedTimestamp?: string;
  /** Cumulative rate of orders cancelled */
  cumulativeRate?: number;
  /** Cumulative rate of orders cancelled trend */
  cumulativeRateTrend?: CumulativeRateTrend8;
  /** gmvLoss incurred */
  gmvLoss?: number;
  /** Number of orders impacted */
  ordersImpacted?: number;
  /** Maximum allowed cumulative cancellations rate as per Walmart standards */
  standard?: string;
  /** Risk level as per Walmart standards */
  riskLevel?: RiskLevel;
  /** Seller accountable drivers, which impacting the cancellations rate */
  sellerAccountableDrivers?: SellerAccountableCancellationsDrivers;
  /** Non Accountable drivers, which impacting the cancellations rate */
  nonAccountableDrivers?: NonAccountableCancellationsDrivers;
  /** Recommendations to decrease the cancellation rate */
  recommendations?: PerformanceRecommendation[];
};

export const getCancelResultPayloadSchema: Schema<GetCancelResultPayload> = s.object<GetCancelResultPayload>({
  reportDuration: s.optional(s.int()),
  updatedTimestamp: s.optional(s.string()),
  cumulativeRate: s.optional(s.float64()),
  cumulativeRateTrend: s.optional(s.lazy(() => cumulativeRateTrend8Schema)),
  gmvLoss: s.optional(s.float64()),
  ordersImpacted: s.optional(s.int()),
  standard: s.optional(s.string()),
  riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
  sellerAccountableDrivers: s.optional(s.lazy(() => sellerAccountableCancellationsDriversSchema)),
  nonAccountableDrivers: s.optional(s.lazy(() => nonAccountableCancellationsDriversSchema)),
  recommendations: s.optional(s.array(s.lazy(() => performanceRecommendationSchema))),
});
