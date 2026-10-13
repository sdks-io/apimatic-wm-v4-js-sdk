import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeedType = {
  ListingsFeed: "LISTINGS_FEED",
  InventoryFeed: "INVENTORY_FEED",
  PricingFeed: "PRICING_FEED",
  ItemSetupFeed: "ITEM_SETUP_FEED",
  OrderAcknowledgementFeed: "ORDER_ACKNOWLEDGEMENT_FEED",
  OrderFulfillmentFeed: "ORDER_FULFILLMENT_FEED",
  OrderCancellationFeed: "ORDER_CANCELLATION_FEED",
  RetireItemFeed: "RETIRE_ITEM_FEED",
} as const;
export type FeedType = (typeof FeedType)[keyof typeof FeedType] | (string & {});

export const feedTypeSchema: EnumSchema<FeedType> = s.enumOf<FeedType>(FeedType);
