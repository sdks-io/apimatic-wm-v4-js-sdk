import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Required only when decision is APPROVED */
export type Approved = {
  /** SEO recommended value for the new product name */
  productName?: string;
  /** SEO recommended value for the new product description */
  shortDescription?: string;
};

export const approvedSchema: Schema<Approved> = s.object<Approved>({
  productName: s.optional(s.string()),
  shortDescription: s.optional(s.string()),
  _keysMap: {
    productName: "product_name",
    shortDescription: "short_description",
  },
});
