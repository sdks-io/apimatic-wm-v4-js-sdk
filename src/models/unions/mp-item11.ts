import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { priceFeedPriceItemSchema, type PriceFeedPriceItem } from "../price-feed-price-item.js";
import {
  priceFeedPromoDiscountItemSchema,
  type PriceFeedPromoDiscountItem,
} from "../price-feed-promo-discount-item.js";

export type MpItem11 = PriceFeedPriceItem[] | PriceFeedPromoDiscountItem[];

export const mpItem11Schema: Schema<MpItem11> = s.of<MpItem11>(
  s.union([
    s.array(s.lazy(() => priceFeedPriceItemSchema)),
    s.array(s.lazy(() => priceFeedPromoDiscountItemSchema)),
  ]),
);
