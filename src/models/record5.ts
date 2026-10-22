import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemDetails4Schema, type ItemDetails4 } from "./item-details4.js";

/** Information related to the item recommendations. */
export type Record5 = {
  /**
   * Unique identifier for the recommended item. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  itemRecommendationUniqueId?: string;
  /**
   * Details of the recommended item.<br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  itemDetails?: ItemDetails4;
};

export const record5Schema: Schema<Record5> = s.object<Record5>({
  itemRecommendationUniqueId: s.optional(s.string()),
  itemDetails: s.optional(s.lazy(() => itemDetails4Schema)),
});
