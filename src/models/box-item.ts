import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Box Items */
export type BoxItem = {
  /** sku of an item */
  sku: string;
  /** Quantity of Item */
  quantity: number;
  /** PO Line Number */
  lineNumber: string;
  /**
   * Name of the Product. This is a mandatory field if carrier is opted as 'Yanwen' and also for
   * India(IN) to United States(US) shipping
   */
  productName?: string;
  /** Name of the Product in Mandarin. This is a mandatory field if carrier is opted as 'Yanwen' */
  productNameInLocale?: string;
  /** HS Code. This is a mandatory field for India(IN) to United States(US) shipping */
  hsCode?: string;
  /** Origin State. This is a mandatory field for India(IN) to United States(US) shipping */
  originState?: string;
  /** Origin City. This is a mandatory field for India(IN) to United States(US) shipping */
  originCity?: string;
  /** Country of Origin. This is a mandatory field for India(IN) to United States(US) shipping */
  countryOfOrigin?: string;
};

export const boxItemSchema: Schema<BoxItem> = s.object<BoxItem>({
  sku: s.string(),
  quantity: s.int(),
  lineNumber: s.string(),
  productName: s.optional(s.string()),
  productNameInLocale: s.optional(s.string()),
  hsCode: s.optional(s.string()),
  originState: s.optional(s.string()),
  originCity: s.optional(s.string()),
  countryOfOrigin: s.optional(s.string()),
});
