import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trendingItemSchema, type TrendingItem } from "./trending-item.js";

export type GetTrendingResultPayload = {
  /** Total count of qualified items */
  totalCount?: number;
  /** List of Qualified Items */
  items?: TrendingItem[];
};

export const getTrendingResultPayloadSchema: Schema<GetTrendingResultPayload> =
  s.object<GetTrendingResultPayload>({
    totalCount: s.optional(s.int()),
    items: s.optional(s.array(s.lazy(() => trendingItemSchema))),
  });
