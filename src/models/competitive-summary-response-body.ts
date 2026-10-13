import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The body of a competitive summary response. */
export type CompetitiveSummaryResponseBody = {
  /** The Walmart Item ID of the item. */
  walmartItemId?: string;
  /** A marketplace identifier. */
  marketplaceId?: string;
  /** A list of featured buying options. */
  featuredBuyingOptions?: Record<string, unknown>[];
  /** A list of lowest priced offers by condition. */
  lowestPricedOffers?: Record<string, unknown>[];
  /** A list of reference prices. */
  referencePrices?: Record<string, unknown>[];
};

export const competitiveSummaryResponseBodySchema: Schema<CompetitiveSummaryResponseBody> =
  s.object<CompetitiveSummaryResponseBody>({
    walmartItemId: s.optional(s.string()),
    marketplaceId: s.optional(s.string()),
    featuredBuyingOptions: s.optional(s.array(s.record(s.string(), s.unknown()))),
    lowestPricedOffers: s.optional(s.array(s.record(s.string(), s.unknown()))),
    referencePrices: s.optional(s.array(s.record(s.string(), s.unknown()))),
  });
