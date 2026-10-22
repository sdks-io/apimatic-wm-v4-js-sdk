import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3InsightsItemsUnpublishedCounts500Error1 = {
  timestamp?: string;
  status?: number;
  error?: string;
  path?: string;
};

export const v3InsightsItemsUnpublishedCounts500Error1Schema: Schema<V3InsightsItemsUnpublishedCounts500Error1> =
  s.object<V3InsightsItemsUnpublishedCounts500Error1>({
    timestamp: s.optional(s.string()),
    status: s.optional(s.float64()),
    error: s.optional(s.string()),
    path: s.optional(s.string()),
  });
