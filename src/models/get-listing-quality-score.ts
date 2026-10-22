import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  listingQualityScorePayloadSchema,
  type ListingQualityScorePayload,
} from "./listing-quality-score-payload.js";

export type GetListingQualityScore = {
  payload?: ListingQualityScorePayload;
};

export const getListingQualityScoreSchema: Schema<GetListingQualityScore> = s.object<GetListingQualityScore>({
  payload: s.optional(s.lazy(() => listingQualityScorePayloadSchema)),
});
