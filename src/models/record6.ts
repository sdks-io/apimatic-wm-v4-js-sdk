import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information of item recommendations based on the categorizationType. */
export type Record6 = {
  /**
   * Name of the brand or category as per the categorizationType. <br><b style='color:green;'>Market
   * availability: US | CA | MX</span></b>
   */
  name?: string;
  /**
   * This attribute is deprecated. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  numberOfItemRecommendations?: number;
};

export const record6Schema: Schema<Record6> = s.object<Record6>({
  name: s.optional(s.string()),
  numberOfItemRecommendations: s.optional(s.int()),
});
