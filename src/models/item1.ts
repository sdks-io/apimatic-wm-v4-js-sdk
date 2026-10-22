import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US</b> */
export type Item1 = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  itemId?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  productName?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  productUrl?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  productImageUrl?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  skuId?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  currentPrice?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  targetPrice?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  shippingPrice?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  incentiveType?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  baseReferralFee?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  reducedReferralFee?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  enrollmentType?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  enrollmentDate?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  incentiveStatus?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  inventoryCount?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  startDate?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  expirationDate?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  incentiveId?: string;
};

export const item1Schema: Schema<Item1> = s.object<Item1>({
  itemId: s.optional(s.string()),
  productName: s.optional(s.string()),
  productUrl: s.optional(s.string()),
  productImageUrl: s.optional(s.string()),
  skuId: s.optional(s.string()),
  currentPrice: s.optional(s.float64()),
  targetPrice: s.optional(s.float64()),
  shippingPrice: s.optional(s.float64()),
  incentiveType: s.optional(s.string()),
  baseReferralFee: s.optional(s.float64()),
  reducedReferralFee: s.optional(s.float64()),
  enrollmentType: s.optional(s.string()),
  enrollmentDate: s.optional(s.string()),
  incentiveStatus: s.optional(s.string()),
  inventoryCount: s.optional(s.float64()),
  startDate: s.optional(s.string()),
  expirationDate: s.optional(s.string()),
  incentiveId: s.optional(s.string()),
});
