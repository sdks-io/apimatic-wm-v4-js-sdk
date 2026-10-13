import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemProductType = {
  /** Walmart product type (e.g. "Electronics", "Clothing") */
  productType?: string;
};

export const itemProductTypeSchema: Schema<ItemProductType> = s.object<ItemProductType>({
  productType: s.optional(s.string()),
});
