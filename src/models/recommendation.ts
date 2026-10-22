import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Recommendation = {
  productName?: string;
  shortDescription?: string;
};

export const recommendationSchema: Schema<Recommendation> = s.object<Recommendation>({
  productName: s.optional(s.string()),
  shortDescription: s.optional(s.string()),
  _keysMap: {
    productName: "product_name",
    shortDescription: "short_description",
  },
});
