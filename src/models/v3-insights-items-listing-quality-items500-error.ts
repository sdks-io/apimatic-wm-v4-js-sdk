import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3InsightsItemsListingQualityItems500Error = {
  timestamp?: string;
  status?: number;
  error?: string;
  path?: string;
};

export const v3InsightsItemsListingQualityItems500ErrorSchema: Schema<V3InsightsItemsListingQualityItems500Error> =
  s.object<V3InsightsItemsListingQualityItems500Error>({
    timestamp: s.optional(s.string()),
    status: s.optional(s.float64()),
    error: s.optional(s.string()),
    path: s.optional(s.string()),
  });
