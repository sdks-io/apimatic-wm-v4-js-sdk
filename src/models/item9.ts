import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Items */
export type Item9 = {
  /** Specifies the item identifier.<br><b style='color:green;'>Market availability: US only</b> */
  itemId: string;
  /**
   * Custom target number of reviews requested to be collected for the item. Default is 5.<br><b
   * style='color:green;'>Market availability: US only</b>
   */
  targetReviews?: number;
};

export const item9Schema: Schema<Item9> = s.object<Item9>({
  itemId: s.string(),
  targetReviews: s.optional(s.int()),
});
