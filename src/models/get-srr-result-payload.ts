import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cumulativeRateTrend4Schema, type CumulativeRateTrend4 } from "./cumulative-rate-trend4.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";
import {
  sellerAccountableSrrDriversSchema,
  type SellerAccountableSrrDrivers,
} from "./seller-accountable-srr-drivers.js";

export type GetSrrResultPayload = {
  /** Past number of days the metrics calculated */
  reportDuration?: number;
  /** Timestamp when metrics are calculated in ISO format */
  updatedTimestamp?: string;
  /** Cumulative seller response rate */
  cumulativeRate?: number;
  /** Cumulative seller response rate trend */
  cumulativeRateTrend?: CumulativeRateTrend4;
  /** Number of customers impacted */
  impactedCustomerCount?: number;
  /** Minimum seller accountable seller response rate required as per Walmart standards */
  standard?: string;
  /** Risk level as per Walmart standards */
  riskLevel?: RiskLevel;
  /** Seller accountable drivers, which impacting the seller response rate */
  sellerAccountableDrivers?: SellerAccountableSrrDrivers;
};

export const getSrrResultPayloadSchema: Schema<GetSrrResultPayload> = s.object<GetSrrResultPayload>({
  reportDuration: s.optional(s.int()),
  updatedTimestamp: s.optional(s.string()),
  cumulativeRate: s.optional(s.float64()),
  cumulativeRateTrend: s.optional(s.lazy(() => cumulativeRateTrend4Schema)),
  impactedCustomerCount: s.optional(s.int()),
  standard: s.optional(s.string()),
  riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
  sellerAccountableDrivers: s.optional(s.lazy(() => sellerAccountableSrrDriversSchema)),
});
