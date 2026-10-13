import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentAvailabilitySchema, type FulfillmentAvailability } from "./fulfillment-availability.js";
import { issueSchema, type Issue } from "./issue.js";
import { itemOfferByMarketplaceSchema, type ItemOfferByMarketplace } from "./item-offer-by-marketplace.js";
import {
  itemSummaryByMarketplaceSchema,
  type ItemSummaryByMarketplace,
} from "./item-summary-by-marketplace.js";

export type Item1 = {
  sku: string;
  summaries?: ItemSummaryByMarketplace[];
  /** Item attribute key-value pairs for the listing */
  attributes?: Record<string, unknown>;
  issues?: Issue[];
  offers?: ItemOfferByMarketplace[];
  fulfillmentAvailability?: FulfillmentAvailability[];
};

export const item1Schema: Schema<Item1> = s.object<Item1>({
  sku: s.string(),
  summaries: s.optional(s.array(s.lazy(() => itemSummaryByMarketplaceSchema))),
  attributes: s.optional(s.record(s.string(), s.unknown())),
  issues: s.optional(s.array(s.lazy(() => issueSchema))),
  offers: s.optional(s.array(s.lazy(() => itemOfferByMarketplaceSchema))),
  fulfillmentAvailability: s.optional(s.array(s.lazy(() => fulfillmentAvailabilitySchema))),
});
