import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Tags that indicate why an item is in demand, helping sellers quickly assess customer interest and
 * competitive trends. <br><b style='color:green;'>Market availability: US | CA | MX</b>
 */
export const SalesInsights2 = {
  BestSeller: "BEST_SELLER",
  Trending: "TRENDING",
  FirstMover: "FIRST_MOVER",
  HighlySearched: "HIGHLY_SEARCHED",
} as const;
export type SalesInsights2 = (typeof SalesInsights2)[keyof typeof SalesInsights2] | (string & {});

export const salesInsights2Schema: EnumSchema<SalesInsights2> = s.enumOf<SalesInsights2>(SalesInsights2);
