import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Seller accountable On Time Delivery rate trend */
export const SellerAccountableTrend = {
  GreenUp: "GREEN_UP",
  Green: "GREEN",
  GreenDown: "GREEN_DOWN",
  YellowUp: "YELLOW_UP",
  Yellow: "YELLOW",
  YellowDown: "YELLOW_DOWN",
  RedUp: "RED_UP",
  Red: "RED",
  RedDown: "RED_DOWN",
} as const;
export type SellerAccountableTrend =
  | (typeof SellerAccountableTrend)[keyof typeof SellerAccountableTrend]
  | (string & {});

export const sellerAccountableTrendSchema: EnumSchema<SellerAccountableTrend> =
  s.enumOf<SellerAccountableTrend>(SellerAccountableTrend);
