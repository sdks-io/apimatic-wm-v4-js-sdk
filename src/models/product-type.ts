import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** productType is only applicable for categories */
export type ProductType = {
  name?: string;
  count?: number;
};

export const productTypeSchema: Schema<ProductType> = s.object<ProductType>({
  name: s.optional(s.string()),
  count: s.optional(s.int()),
});
