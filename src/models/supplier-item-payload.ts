import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { supplierItemOrderableSchema, type SupplierItemOrderable } from "./supplier-item-orderable.js";
import { visibleSchema, type Visible } from "./unions/visible.js";

export type SupplierItemPayload = {
  orderable: SupplierItemOrderable;
  /**
   * The visible block for rich media. The expected structure depends on
   * `SupplierItemFeedHeader.subCategory`. Discriminator is based on
   * `SupplierItemFeedHeader.subCategory`
   */
  visible: Visible;
};

export const supplierItemPayloadSchema: Schema<SupplierItemPayload> = s.object<SupplierItemPayload>({
  orderable: supplierItemOrderableSchema,
  visible: visibleSchema,
  _keysMap: {
    orderable: "Orderable",
    visible: "Visible",
  },
});
