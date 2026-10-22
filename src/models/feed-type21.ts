import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeedType21 = {
  PriceAndPromotion: "PRICE_AND_PROMOTION",
} as const;
export type FeedType21 = (typeof FeedType21)[keyof typeof FeedType21] | (string & {});

export const feedType21Schema: EnumSchema<FeedType21> = s.enumOf<FeedType21>(FeedType21);
