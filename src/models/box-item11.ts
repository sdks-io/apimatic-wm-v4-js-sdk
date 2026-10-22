import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Box Items */
export type BoxItem11 = {
  /**
   * sku of an item
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  sku: string;
  /**
   * Quantity of Item
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  quantity: number;
  /**
   * PO Line Number
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  lineNumber: string;
  /**
   * Name of the Product. This is a mandatory field if carrier is opted as 'Yanwen' and also for
   * India(IN) to United States(US) shipping
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  productName?: string;
  /**
   * Name of the Product in Mandarin. This is a mandatory field if carrier is opted as 'Yanwen'
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  productNameInLocale?: string;
  /**
   * HS Code. This is a mandatory field for India(IN) to United States(US) shipping
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  hsCode?: string;
  /**
   * Origin State. This is a mandatory field for India(IN) to United States(US) shipping
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  originState?: string;
  /**
   * Origin City. This is a mandatory field for India(IN) to United States(US) shipping
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  originCity?: string;
  /**
   * Country of Origin. This is a mandatory field for India(IN) to United States(US) shipping
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  countryOfOrigin?: string;
};

export const boxItem11Schema: Schema<BoxItem11> = s.object<BoxItem11>({
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
