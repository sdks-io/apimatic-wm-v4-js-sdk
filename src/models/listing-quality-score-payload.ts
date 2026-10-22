import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { postPurchaseQualitySchema, type PostPurchaseQuality } from "./post-purchase-quality.js";
import { scoreSchema, type Score } from "./score.js";

export type ListingQualityScorePayload = {
  /** Listing Quality */
  listingQuality?: number;
  /** Score */
  score?: Score;
  /** Post Purchase Quality */
  postPurchaseQuality?: PostPurchaseQuality;
};

export const listingQualityScorePayloadSchema: Schema<ListingQualityScorePayload> =
  s.object<ListingQualityScorePayload>({
    listingQuality: s.optional(s.float64()),
    score: s.optional(s.lazy(() => scoreSchema)),
    postPurchaseQuality: s.optional(s.lazy(() => postPurchaseQualitySchema)),
  });
