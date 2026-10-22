import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Items. */
export type Item10 = {
  /** Specifies the item identifier.<br><b style='color:green;'>Market availability: US only</b> */
  itemId?: string;
  /** Description of the item.<br><b style='color:green;'>Market availability: US only</b> */
  itemDescription?: string;
  /**
   * Represents the Stock Keeping Unit (SKU), which is a unique identifier as defined by the seller.
   * This identifier helps in tracking inventory and managing items efficiently.<br><b
   * style='color:green;'>Market availability: US only</b>
   */
  sku?: string;
};

export const item10Schema: Schema<Item10> = s.object<Item10>({
  itemId: s.optional(s.string()),
  itemDescription: s.optional(s.string()),
  sku: s.optional(s.string()),
});
