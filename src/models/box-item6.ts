import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Box Items */
export type BoxItem6 = {
  /**
   * The item sku.
   *
   * <b style="color: green;">Market availability: Global
   */
  sku: string;
  /**
   * Number of items.
   *
   * <b style="color: green;">Market availability: Global
   */
  quantity: number;
  /**
   * PO Line Number
   *
   * <b style="color: green;">Market availability: Global
   */
  lineNumber: string;
  /**
   * The name of the product. This parameter is required if carrier is opted as 'Yanwen' and also
   * for shipping from India(IN) to United-States(US).
   *
   * <b style="color: green;">Market availability: US only
   */
  productName?: string;
  /**
   * The name of the product in Mandarin. This parameter is required if carrier is opted as
   * 'Yanwen'.
   *
   * <b style="color: green;">Market availability: US only
   */
  productNameInLocale?: string;
  /**
   * HS Code. This is a mandatory field for India (IN) to United States (US) shipping
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  hsCode?: string;
  /**
   * Origin State. This is a mandatory field for India (IN) to United States (US) shipping
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  originState?: string;
  /**
   * Origin City. This is a mandatory field for India (IN) to United States (US) shipping
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  originCity?: string;
  /**
   * Country of Origin. This is a mandatory field for India (IN) to United States (US) shipping
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  countryOfOrigin?: string;
};

export const boxItem6Schema: Schema<BoxItem6> = s.object<BoxItem6>({
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
