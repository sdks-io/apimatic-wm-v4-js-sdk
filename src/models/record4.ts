import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemDetails3Schema, type ItemDetails3 } from "./item-details3.js";

/** Information related to the item recommendations. */
export type Record4 = {
  /**
   * Unique identifier for the recommended item. <br><b style='color:green;'>Market availability: US
   * | CA | MX</span></b>
   */
  itemRecommendationUniqueId?: string;
  /** Details of the recommended item. */
  itemDetails?: ItemDetails3;
};

export const record4Schema: Schema<Record4> = s.object<Record4>({
  itemRecommendationUniqueId: s.optional(s.string()),
  itemDetails: s.optional(s.lazy(() => itemDetails3Schema)),
});
