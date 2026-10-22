import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Box Items */
export type BoxItem7 = {
  /**
   * The stock keeping unit of an item.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  sku?: string;
  /**
   * Quantity of the item.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  quantity?: number;
  /**
   * PO line number.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  lineNumber?: string;
  /**
   * The name of the product. This parameter is required if carrier is opted as 'Yanwen' and also
   * for shipping from India(IN) to United-States(US).
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  productName?: string;
  /**
   * The name of the product in Mandarin. This parameter is required if carrier is opted as 'Yanwen'
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  productNameInLocale?: string;
  /**
   * The HS code, Harmonized System code, is a six-digit numerical identifier used for classifying
   * traded products worldwide. This is a mandatory field for India (IN) to United States (US)
   * shipping
   *
   * <strong style="color: green;">Market availability: US only</strong>
   */
  hsCode?: string;
  /**
   * Origin state. This field is mandatory for shipments from India (IN) to the United States (US).
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  originState?: string;
  /**
   * Origin city. This field is mandatory for shipments from India (IN) to the United States (US).
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  originCity?: string;
  /**
   * Country of origin. This field is mandatory for shipments from India (IN) to the United States
   * (US).
   *
   * <b style="color: green;">Market availability: US only</b>
   */
  countryOfOrigin?: string;
};

export const boxItem7Schema: Schema<BoxItem7> = s.object<BoxItem7>({
  sku: s.optional(s.string()),
  quantity: s.optional(s.int()),
  lineNumber: s.optional(s.string()),
  productName: s.optional(s.string()),
  productNameInLocale: s.optional(s.string()),
  hsCode: s.optional(s.string()),
  originState: s.optional(s.string()),
  originCity: s.optional(s.string()),
  countryOfOrigin: s.optional(s.string()),
});
