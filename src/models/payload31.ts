import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recommendedItem2Schema, type RecommendedItem2 } from "./recommended-item2.js";
import { totalInsight2Schema, type TotalInsight2 } from "./total-insight2.js";

export type Payload31 = {
  recommendedItems?: RecommendedItem2[];
  totalInsights?: TotalInsight2[];
  /** Total number of WFS Unpublished insights available to you. */
  totalRecords?: number;
};

export const payload31Schema: Schema<Payload31> = s.object<Payload31>({
  recommendedItems: s.optional(s.array(s.lazy(() => recommendedItem2Schema))),
  totalInsights: s.optional(s.array(s.lazy(() => totalInsight2Schema))),
  totalRecords: s.optional(s.float64()),
});
