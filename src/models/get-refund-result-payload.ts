import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cumulativeRateTrend6Schema, type CumulativeRateTrend6 } from "./cumulative-rate-trend6.js";
import { gmvLossTrendSchema, type GmvLossTrend } from "./gmv-loss-trend.js";
import {
  nonAccountableRefundsDriversSchema,
  type NonAccountableRefundsDrivers,
} from "./non-accountable-refunds-drivers.js";
import { ordersImpactedTrendSchema, type OrdersImpactedTrend } from "./orders-impacted-trend.js";
import {
  performanceRecommendationSchema,
  type PerformanceRecommendation,
} from "./performance-recommendation.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";
import {
  sellerAccountableRefundsDriversSchema,
  type SellerAccountableRefundsDrivers,
} from "./seller-accountable-refunds-drivers.js";

export type GetRefundResultPayload = {
  /** Past number of days the metrics calculated */
  reportDuration?: number;
  /** Timestamp when metrics are calculated in ISO format */
  updatedTimestamp?: string;
  /** Cumulative refunds rate */
  cumulativeRate?: number;
  /** Cumulative refunds rate trend */
  cumulativeRateTrend?: CumulativeRateTrend6;
  /** gmvLoss incurred */
  gmvLoss?: number;
  /** gmv Loss trend */
  gmvLossTrend?: GmvLossTrend;
  /** Number of orders impacted */
  ordersImpacted?: number;
  /** Impacted orders trend */
  ordersImpactedTrend?: OrdersImpactedTrend;
  /** Maximum allowed cumulative refund rate as per Walmart standards */
  standard?: string;
  /** Risk level as per Walmart standards */
  riskLevel?: RiskLevel;
  /** Seller accountable drivers, which impacting the refunds rate */
  sellerAccountableDrivers?: SellerAccountableRefundsDrivers;
  /** Non Accountable drivers, which impacting the refunds rate */
  nonAccountableDrivers?: NonAccountableRefundsDrivers;
  /** recommendations insights */
  recommendations?: PerformanceRecommendation[];
};

export const getRefundResultPayloadSchema: Schema<GetRefundResultPayload> = s.object<GetRefundResultPayload>({
  reportDuration: s.optional(s.int()),
  updatedTimestamp: s.optional(s.string()),
  cumulativeRate: s.optional(s.float64()),
  cumulativeRateTrend: s.optional(s.lazy(() => cumulativeRateTrend6Schema)),
  gmvLoss: s.optional(s.float64()),
  gmvLossTrend: s.optional(s.lazy(() => gmvLossTrendSchema)),
  ordersImpacted: s.optional(s.int()),
  ordersImpactedTrend: s.optional(s.lazy(() => ordersImpactedTrendSchema)),
  standard: s.optional(s.string()),
  riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
  sellerAccountableDrivers: s.optional(s.lazy(() => sellerAccountableRefundsDriversSchema)),
  nonAccountableDrivers: s.optional(s.lazy(() => nonAccountableRefundsDriversSchema)),
  recommendations: s.optional(s.array(s.lazy(() => performanceRecommendationSchema))),
});
