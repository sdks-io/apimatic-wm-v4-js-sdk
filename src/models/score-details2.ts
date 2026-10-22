import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contentAndDiscoverability4Schema,
  type ContentAndDiscoverability4,
} from "./content-and-discoverability4.js";
import { offer2Schema, type Offer2 } from "./offer2.js";
import { postPurchase2Schema, type PostPurchase2 } from "./post-purchase2.js";
import { ratingReviews2Schema, type RatingReviews2 } from "./rating-reviews2.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type ScoreDetails2 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  offer?: Offer2;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  ratingReviews?: RatingReviews2;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  postPurchase?: PostPurchase2;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  contentAndDiscoverability?: ContentAndDiscoverability4;
};

export const scoreDetails2Schema: Schema<ScoreDetails2> = s.object<ScoreDetails2>({
  offer: s.optional(s.lazy(() => offer2Schema)),
  ratingReviews: s.optional(s.lazy(() => ratingReviews2Schema)),
  postPurchase: s.optional(s.lazy(() => postPurchase2Schema)),
  contentAndDiscoverability: s.optional(s.lazy(() => contentAndDiscoverability4Schema)),
});
