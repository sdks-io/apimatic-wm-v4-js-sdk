import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of item details included in the catalog response. */
export type SemItemDetail = {
  /** A unique ID which identifies the item. */
  itemId?: string;
  /** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
  sku?: string;
  /** Product ID of the item */
  productId?: string;
  /** A seller-specified, alphanumeric string uniquely identifying the product name. */
  productName?: string;
  /** Category of the item. */
  categoryName?: string;
  /** URL where the item can be viewed. */
  productUrl?: string;
  /** URL of the image representing the item. */
  productImageUrl?: string;
  /** Recommendation type for the item, indicating how it is recommended for SEM campaigns. */
  recommendationType?: string;
};

export const semItemDetailSchema: Schema<SemItemDetail> = s.object<SemItemDetail>({
  itemId: s.optional(s.string()),
  sku: s.optional(s.string()),
  productId: s.optional(s.string()),
  productName: s.optional(s.string()),
  categoryName: s.optional(s.string()),
  productUrl: s.optional(s.string()),
  productImageUrl: s.optional(s.string()),
  recommendationType: s.optional(s.string()),
});
