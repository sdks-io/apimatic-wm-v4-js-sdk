import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SupplierItemOrderable = {
  /** Product GTIN (Global Trade Item Number) — the unique product identifier. */
  productId: string;
};

export const supplierItemOrderableSchema: Schema<SupplierItemOrderable> = s.object<SupplierItemOrderable>({
  productId: s.string(),
});
