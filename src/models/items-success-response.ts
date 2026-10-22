import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Items. */
export type ItemsSuccessResponse = {
  /** Specifies the item identifier. */
  itemId?: string;
  /** Description of the item. */
  itemDescription?: string;
  /**
   * Represents the Stock Keeping Unit (SKU), which is a unique identifier as defined by the seller.
   * This identifier helps in tracking inventory and managing items efficiently.
   */
  sku?: string;
};

export const itemsSuccessResponseSchema: Schema<ItemsSuccessResponse> = s.object<ItemsSuccessResponse>({
  itemId: s.optional(s.string()),
  itemDescription: s.optional(s.string()),
  sku: s.optional(s.string()),
});
