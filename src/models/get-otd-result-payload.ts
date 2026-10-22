import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  nonAccountableOtdDriversSchema,
  type NonAccountableOtdDrivers,
} from "./non-accountable-otd-drivers.js";
import { overallTrendSchema, type OverallTrend } from "./overall-trend.js";
import {
  performanceRecommendationSchema,
  type PerformanceRecommendation,
} from "./performance-recommendation.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";
import {
  sellerAccountableOtdDriversSchema,
  type SellerAccountableOtdDrivers,
} from "./seller-accountable-otd-drivers.js";
import { sellerAccountableTrendSchema, type SellerAccountableTrend } from "./seller-accountable-trend.js";
import { shippingMethodSchema, type ShippingMethod } from "./shipping-method.js";

export type GetOtdResultPayload = {
  /** Past number of days the metrics calculated */
  reportDuration?: number;
  /** Timestamp when metrics are calculated in ISO format */
  updatedTimestamp?: string;
  /** shipping methods used to calculate these metrics */
  shippingMethod?: ShippingMethod;
  /** Overall ontime delivery rate */
  overallRate?: number;
  /** Overall On Time Delivery trand */
  overallTrend?: OverallTrend;
  /** Seller accountable ontime delivery rate */
  sellerAccountableRate?: number;
  /** Seller accountable On Time Delivery rate trend */
  sellerAccountableTrend?: SellerAccountableTrend;
  /** Number of customers impacted */
  impactedCustomerCount?: number;
  /** Minimum seller accountable on time delivery rate required as per Walmart standards */
  standard?: string;
  /** Risk level as per Walmart standards */
  riskLevel?: RiskLevel;
  /** Seller accountable drivers, which impacting the on time delivery rate */
  sellerAccountableDrivers?: SellerAccountableOtdDrivers;
  /** Non Accountable drivers, which impacting the on time delivery rate */
  nonAccountableDrivers?: NonAccountableOtdDrivers;
  /** Recommendations to improve the On Time Delivery rate */
  recommendations?: PerformanceRecommendation[];
};

export const getOtdResultPayloadSchema: Schema<GetOtdResultPayload> = s.object<GetOtdResultPayload>({
  reportDuration: s.optional(s.int()),
  updatedTimestamp: s.optional(s.string()),
  shippingMethod: s.optional(s.lazy(() => shippingMethodSchema)),
  overallRate: s.optional(s.float64()),
  overallTrend: s.optional(s.lazy(() => overallTrendSchema)),
  sellerAccountableRate: s.optional(s.float64()),
  sellerAccountableTrend: s.optional(s.lazy(() => sellerAccountableTrendSchema)),
  impactedCustomerCount: s.optional(s.int()),
  standard: s.optional(s.string()),
  riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
  sellerAccountableDrivers: s.optional(s.lazy(() => sellerAccountableOtdDriversSchema)),
  nonAccountableDrivers: s.optional(s.lazy(() => nonAccountableOtdDriversSchema)),
  recommendations: s.optional(s.array(s.lazy(() => performanceRecommendationSchema))),
});
