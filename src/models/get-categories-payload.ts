import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productTypeSchema, type ProductType } from "./product-type.js";

export type GetCategoriesPayload = {
  name?: string;
  count?: number;
  /** productType is only applicable for categories */
  productType?: ProductType[];
};

export const getCategoriesPayloadSchema: Schema<GetCategoriesPayload> = s.object<GetCategoriesPayload>({
  name: s.optional(s.string()),
  count: s.optional(s.int()),
  productType: s.optional(s.array(s.lazy(() => productTypeSchema))),
});
