import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * boxItems - A list of items that the seller will be shipping in this package. Each item must
 * correspond to a line item in the specified purchaseOrder. The lineId and SKU fields are used to
 * uniquely identify the specific item being shipped.
 */
export type BoxItem10 = {
  /** sku of an item */
  sku: string;
  /** Quantity of Item */
  quantity: number;
  /** PO Line Number */
  lineNumber: string;
};

export const boxItem10Schema: Schema<BoxItem10> = s.object<BoxItem10>({
  sku: s.string(),
  quantity: s.int(),
  lineNumber: s.string(),
});
