import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Box items. This is a mandatory field for India(IN) to United States(US) shipping */
export type EstimatesBoxItem = {
  /** sku of an item */
  sku: string;
  /** Quantity of Item */
  quantity: number;
  /** PO Line Number */
  lineNumber: string;
};

export const estimatesBoxItemSchema: Schema<EstimatesBoxItem> = s.object<EstimatesBoxItem>({
  sku: s.string(),
  quantity: s.int(),
  lineNumber: s.string(),
});
