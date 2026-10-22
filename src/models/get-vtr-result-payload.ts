import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cumulativeRateTrendSchema, type CumulativeRateTrend } from "./cumulative-rate-trend.js";
import {
  nonAccountableVtrDriversSchema,
  type NonAccountableVtrDrivers,
} from "./non-accountable-vtr-drivers.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";
import {
  sellerAccountableVtrDriversSchema,
  type SellerAccountableVtrDrivers,
} from "./seller-accountable-vtr-drivers.js";
import { shippingMethodSchema, type ShippingMethod } from "./shipping-method.js";

export type GetVtrResultPayload = {
  /** Past number of days the metrics calculated */
  reportDuration?: number;
  /** Timestamp when metrics are calculated in ISO format */
  updatedTimestamp?: string;
  /** shipping methods used to calculate these metrics */
  shippingMethod?: ShippingMethod;
  /** Cumulative valid tracking rate */
  cumulativeRate?: number;
  /** Cumulative valid tracking rate trend */
  cumulativeRateTrend?: CumulativeRateTrend;
  /** Number of customers impacted */
  impactedCustomerCount?: number;
  /** Minimum seller accountable valid tracking rate required as per Walmart standards */
  standard?: string;
  /** Risk level as per Walmart standards */
  riskLevel?: RiskLevel;
  /** Seller accountable drivers, which impacting the valid tracking rate */
  sellerAccountableDrivers?: SellerAccountableVtrDrivers;
  /** Non Accountable drivers, which impacting the valid tracking rate */
  nonAccountableDrivers?: NonAccountableVtrDrivers;
};

export const getVtrResultPayloadSchema: Schema<GetVtrResultPayload> = s.object<GetVtrResultPayload>({
  reportDuration: s.optional(s.int()),
  updatedTimestamp: s.optional(s.string()),
  shippingMethod: s.optional(s.lazy(() => shippingMethodSchema)),
  cumulativeRate: s.optional(s.float64()),
  cumulativeRateTrend: s.optional(s.lazy(() => cumulativeRateTrendSchema)),
  impactedCustomerCount: s.optional(s.int()),
  standard: s.optional(s.string()),
  riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
  sellerAccountableDrivers: s.optional(s.lazy(() => sellerAccountableVtrDriversSchema)),
  nonAccountableDrivers: s.optional(s.lazy(() => nonAccountableVtrDriversSchema)),
});
