import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Shows the criteria for the Pro Seller badge. */
export type CriteriaData = {
  /** Number of orders received during the last 90 days. */
  orders?: number;
  /** Delivery Defect rate in the given timeframe. */
  deliveryDefectRate?: string;
  /** Cancellation rate in the given timeframe. */
  cancellationRate?: string;
  /** Trending Catalog Quality Score coverage. */
  listingQualityCatalog?: number;
  /** Days active on the platform. */
  activeDays?: number;
};

export const criteriaDataSchema: Schema<CriteriaData> = s.object<CriteriaData>({
  orders: s.optional(s.int()),
  deliveryDefectRate: s.optional(s.string()),
  cancellationRate: s.optional(s.string()),
  listingQualityCatalog: s.optional(s.int()),
  activeDays: s.optional(s.int()),
});
