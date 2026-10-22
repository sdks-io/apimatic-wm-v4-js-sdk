import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promoDiscountSchema, type PromoDiscount } from "./promo-discount.js";

export type PriceFeedPromoDiscountItem = {
  /**
   * The field ‘Promo&Discount’ is for the US market. <br><b style='color:green;'>Market
   * availability: US</b>
   */
  promoDiscount: PromoDiscount;
};

export const priceFeedPromoDiscountItemSchema: Schema<PriceFeedPromoDiscountItem> =
  s.object<PriceFeedPromoDiscountItem>({
    promoDiscount: promoDiscountSchema,
    _keysMap: {
      promoDiscount: "Promo&Discount",
    },
  });
