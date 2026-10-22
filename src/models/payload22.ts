import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recommendedItem1Schema, type RecommendedItem1 } from "./recommended-item1.js";
import { totalInsight1Schema, type TotalInsight1 } from "./total-insight1.js";

export type Payload22 = {
  recommendedItems?: RecommendedItem1[];
  totalInsights?: TotalInsight1[];
  /** Total number of Fulfill with WFS insights available to you. */
  totalRecords?: number;
};

export const payload22Schema: Schema<Payload22> = s.object<Payload22>({
  recommendedItems: s.optional(s.array(s.lazy(() => recommendedItem1Schema))),
  totalInsights: s.optional(s.array(s.lazy(() => totalInsight1Schema))),
  totalRecords: s.optional(s.float64()),
});
