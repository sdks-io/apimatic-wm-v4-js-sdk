import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3InsightsItemsListingQualityScore500Error = {
  timestamp?: string;
  status?: number;
  error?: string;
  path?: string;
};

export const v3InsightsItemsListingQualityScore500ErrorSchema: Schema<V3InsightsItemsListingQualityScore500Error> =
  s.object<V3InsightsItemsListingQualityScore500Error>({
    timestamp: s.optional(s.string()),
    status: s.optional(s.float64()),
    error: s.optional(s.string()),
    path: s.optional(s.string()),
  });
