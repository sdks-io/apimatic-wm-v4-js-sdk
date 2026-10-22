import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Tags that indicate why an item is in demand, helping sellers quickly assess customer interest and
 * competitive signal. <br><b style='color:green;'>Market availability: US | CA | MX</b>
 */
export const SalesInsights = {
  BestSeller: "BEST_SELLER",
  Trending: "TRENDING",
  FirstMover: "FIRST_MOVER",
  HighlySearched: "HIGHLY_SEARCHED",
} as const;
export type SalesInsights = (typeof SalesInsights)[keyof typeof SalesInsights] | (string & {});

export const salesInsightsSchema: EnumSchema<SalesInsights> = s.enumOf<SalesInsights>(SalesInsights);
