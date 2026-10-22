import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trendSchema, type Trend } from "./trend.js";

/** Payload in the response having the trend details for the recommended item. */
export type Payload5 = {
  /**
   * Unique ID that is returned in the response of the get recommendations API or in the on-request
   * bulk CSV file.<br><b style='color:green;'>Market availability: US only</span></b>
   */
  recommendationUniqueId: string;
  /**
   * Trend data for the recommended item. This will include Price trends and Demand trends.<br><b
   * style='color:green;'>Market availability: US only</span></b>
   */
  trends?: Trend[];
};

export const payload5Schema: Schema<Payload5> = s.object<Payload5>({
  recommendationUniqueId: s.string(),
  trends: s.optional(s.array(s.lazy(() => trendSchema))),
});
