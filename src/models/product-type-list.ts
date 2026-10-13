import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productTypeSummarySchema, type ProductTypeSummary } from "./product-type-summary.js";

export type ProductTypeList = {
  productTypes?: ProductTypeSummary[];
};

export const productTypeListSchema: Schema<ProductTypeList> = s.object<ProductTypeList>({
  productTypes: s.optional(s.array(s.lazy(() => productTypeSummarySchema))),
});
