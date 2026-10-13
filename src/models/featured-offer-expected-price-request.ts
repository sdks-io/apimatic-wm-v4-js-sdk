import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An individual FOEP request for a particular SKU. */
export type FeaturedOfferExpectedPriceRequest = {
  /** A marketplace identifier. */
  marketplaceId: string;
  /** The seller stock keeping unit (SKU) of the item. */
  sku: string;
};

export const featuredOfferExpectedPriceRequestSchema: Schema<FeaturedOfferExpectedPriceRequest> =
  s.object<FeaturedOfferExpectedPriceRequest>({
    marketplaceId: s.string(),
    sku: s.string(),
  });
