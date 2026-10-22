import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recommendationSchema, type Recommendation } from "./recommendation.js";

export type Item3 = {
  itemId?: string;
  productName?: string;
  shortDescription?: string;
  imageUrl?: string;
  sku?: string;
  walmartUrl?: string;
  productType?: string;
  status?: string;
  recommendation?: Recommendation;
};

export const item3Schema: Schema<Item3> = s.object<Item3>({
  itemId: s.optional(s.string()),
  productName: s.optional(s.string()),
  shortDescription: s.optional(s.string()),
  imageUrl: s.optional(s.string()),
  sku: s.optional(s.string()),
  walmartUrl: s.optional(s.string()),
  productType: s.optional(s.string()),
  status: s.optional(s.string()),
  recommendation: s.optional(s.lazy(() => recommendationSchema)),
  _keysMap: {
    itemId: "item_id",
    productName: "product_name",
    shortDescription: "short_description",
    imageUrl: "image_url",
    walmartUrl: "walmart_url",
    productType: "product_type",
  },
});
