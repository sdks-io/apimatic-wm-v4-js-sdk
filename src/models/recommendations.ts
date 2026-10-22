import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Recommendations on how to increase chances of Pro Seller Badge eligibility */
export type Recommendations = {
  /** Recommendations on reducing the delivery defect rate */
  deliveryDefectRate?: string;
  /** Recommendations on reducing the Cancellation rate */
  cancellationRate?: string;
  /** Recommendations on increasing the trending item catalog coverage */
  listingQualityCatalog?: string;
};

export const recommendationsSchema: Schema<Recommendations> = s.object<Recommendations>({
  deliveryDefectRate: s.optional(s.string()),
  cancellationRate: s.optional(s.string()),
  listingQualityCatalog: s.optional(s.string()),
});
