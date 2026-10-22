import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Box Items */
export type BoxItem8 = {
  /** sku of an item. <br/><b>Applicable to SWW and WPS.</span></b> */
  sku: string;
  /** Quantity of Item. <br/><b>Applicable to SWW and WPS.</span></b> */
  quantity: number;
  /**
   * Country of origin (country code) of item.<br/><b>Applicable to SWW and WPS.</span></b>
   *
   * <b style="color: green;">Market availability: MX</b>
   */
  countryOfOrigin?: string;
  /** primeLineNo from CA order's response. <br/><b>Applicable to SWW and WPS.</span></b> */
  lineNumber: string;
};

export const boxItem8Schema: Schema<BoxItem8> = s.object<BoxItem8>({
  sku: s.string(),
  quantity: s.int(),
  countryOfOrigin: s.optional(s.string()),
  lineNumber: s.string(),
});
