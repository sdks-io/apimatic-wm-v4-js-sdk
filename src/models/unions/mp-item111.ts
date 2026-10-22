import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  priceFeedPromoDiscountItemSchema,
  type PriceFeedPromoDiscountItem,
} from "../price-feed-promo-discount-item.js";
import { promotionFeedPriceItemSchema, type PromotionFeedPriceItem } from "../promotion-feed-price-item.js";

export type MpItem111 = PromotionFeedPriceItem[] | PriceFeedPromoDiscountItem[];

export const mpItem111Schema: Schema<MpItem111> = s.of<MpItem111>(
  s.union([
    s.array(s.lazy(() => promotionFeedPriceItemSchema)),
    s.array(s.lazy(() => priceFeedPromoDiscountItemSchema)),
  ]),
);
