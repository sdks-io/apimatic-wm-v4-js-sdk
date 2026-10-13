import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productSchema, type Product } from "./product.js";

/** Schema for price info in getPricing response. */
export type Price = {
  /** The status of the operation. */
  status: string;
  /** The seller stock keeping unit (SKU) of the item. */
  sellerSku?: string;
  /** The Walmart Item ID of the item. */
  walmartItemId?: string;
  /** An item. */
  product?: Product;
};

export const priceSchema: Schema<Price> = s.object<Price>({
  status: s.string(),
  sellerSku: s.optional(s.string()),
  walmartItemId: s.optional(s.string()),
  product: s.optional(s.lazy(() => productSchema)),
  _keysMap: {
    sellerSku: "SellerSKU",
    product: "Product",
  },
});
