import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cumulativeRateTrend2Schema, type CumulativeRateTrend2 } from "./cumulative-rate-trend2.js";
import { otsInfractionDriversSchema, type OtsInfractionDrivers } from "./ots-infraction-drivers.js";

export type GetOtsResultPayload = {
  /** Past number of days the metrics calculated */
  reportDuration?: number;
  /** Timestamp when metrics are calculated in ISO format */
  updatedTimestamp?: string;
  /** Cumulative on time shipment rate */
  cumulativeRate?: number;
  /** Cumulative on time shipment rate trend */
  cumulativeRateTrend?: CumulativeRateTrend2;
  /** Number of orders impacted */
  impactedOrderCount?: number;
  /** Recommended on time shipment rate value */
  recommendedRate?: number;
  /** Individual drivers of on time shipment rate */
  infractionDrivers?: OtsInfractionDrivers;
};

export const getOtsResultPayloadSchema: Schema<GetOtsResultPayload> = s.object<GetOtsResultPayload>({
  reportDuration: s.optional(s.int()),
  updatedTimestamp: s.optional(s.string()),
  cumulativeRate: s.optional(s.float64()),
  cumulativeRateTrend: s.optional(s.lazy(() => cumulativeRateTrend2Schema)),
  impactedOrderCount: s.optional(s.int()),
  recommendedRate: s.optional(s.float64()),
  infractionDrivers: s.optional(s.lazy(() => otsInfractionDriversSchema)),
});
