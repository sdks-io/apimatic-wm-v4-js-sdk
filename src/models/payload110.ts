import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recommendedItemSchema, type RecommendedItem } from "./recommended-item.js";
import { totalInsightSchema, type TotalInsight } from "./total-insight.js";

export type Payload110 = {
  recommendedItems?: RecommendedItem[];
  totalInsights?: TotalInsight[];
  /** The total number of item-level restock insights available to you. */
  totalRecords?: number;
};

export const payload110Schema: Schema<Payload110> = s.object<Payload110>({
  recommendedItems: s.optional(s.array(s.lazy(() => recommendedItemSchema))),
  totalInsights: s.optional(s.array(s.lazy(() => totalInsightSchema))),
  totalRecords: s.optional(s.float64()),
});
