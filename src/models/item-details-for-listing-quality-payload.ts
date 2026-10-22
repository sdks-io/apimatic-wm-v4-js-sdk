import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { qualityScoreSchema, type QualityScore } from "./quality-score.js";
import { scoreDetailsSchema, type ScoreDetails } from "./score-details.js";
import { statsSchema, type Stats } from "./stats.js";

export type ItemDetailsForListingQualityPayload = {
  productId?: string;
  scoreDetails?: ScoreDetails;
  wfsEnabled?: string;
  priority?: string;
  productName?: string;
  itemId?: string;
  sellerId?: string;
  pageViews?: string;
  stats?: Stats;
  imageUrL?: string;
  qualityScore?: QualityScore;
  offerId?: string;
  sku?: string;
  category?: string;
  postPurchaseIssues?: string;
  productType?: string;
  condition?: string;
  fastShippingRegionsCount?: number;
  freeShippingRegionsCount?: number;
  fastShippingFlag?: number;
  freeShippingFlag?: number;
  last30DaysConversionRate?: number;
  last30DaysPageViews?: number;
  gmv?: number;
  isCustomerFavorites?: boolean;
  isInStock?: boolean;
  isFastAndFreeShipping?: boolean;
};

export const itemDetailsForListingQualityPayloadSchema: Schema<ItemDetailsForListingQualityPayload> =
  s.object<ItemDetailsForListingQualityPayload>({
    productId: s.optional(s.string()),
    scoreDetails: s.optional(s.lazy(() => scoreDetailsSchema)),
    wfsEnabled: s.optional(s.string()),
    priority: s.optional(s.string()),
    productName: s.optional(s.string()),
    itemId: s.optional(s.string()),
    sellerId: s.optional(s.string()),
    pageViews: s.optional(s.string()),
    stats: s.optional(s.lazy(() => statsSchema)),
    imageUrL: s.optional(s.string()),
    qualityScore: s.optional(s.lazy(() => qualityScoreSchema)),
    offerId: s.optional(s.string()),
    sku: s.optional(s.string()),
    category: s.optional(s.string()),
    postPurchaseIssues: s.optional(s.string()),
    productType: s.optional(s.string()),
    condition: s.optional(s.string()),
    fastShippingRegionsCount: s.optional(s.int()),
    freeShippingRegionsCount: s.optional(s.int()),
    fastShippingFlag: s.optional(s.int()),
    freeShippingFlag: s.optional(s.int()),
    last30DaysConversionRate: s.optional(s.float64()),
    last30DaysPageViews: s.optional(s.int()),
    gmv: s.optional(s.float64()),
    isCustomerFavorites: s.optional(s.boolean()),
    isInStock: s.optional(s.boolean()),
    isFastAndFreeShipping: s.optional(s.boolean()),
  });
