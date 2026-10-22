import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contentAndDiscoverabilitySchema,
  type ContentAndDiscoverability,
} from "./content-and-discoverability.js";
import { offerSchema, type Offer } from "./offer.js";
import { postPurchaseSchema, type PostPurchase } from "./post-purchase.js";
import { ratingReviewsSchema, type RatingReviews } from "./rating-reviews.js";

export type ScoreDetails = {
  offer?: Offer;
  ratingReviews?: RatingReviews;
  postPurchase?: PostPurchase;
  contentAndDiscoverability?: ContentAndDiscoverability;
};

export const scoreDetailsSchema: Schema<ScoreDetails> = s.object<ScoreDetails>({
  offer: s.optional(s.lazy(() => offerSchema)),
  ratingReviews: s.optional(s.lazy(() => ratingReviewsSchema)),
  postPurchase: s.optional(s.lazy(() => postPurchaseSchema)),
  contentAndDiscoverability: s.optional(s.lazy(() => contentAndDiscoverabilitySchema)),
});
