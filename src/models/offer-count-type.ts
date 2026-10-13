import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentChannelTypeSchema, type FulfillmentChannelType } from "./fulfillment-channel-type.js";

/** The total number of offers for the specified condition and fulfillment channel. */
export type OfferCountType = {
  /**
   * Indicates the condition of the item. For example: New, Used, Collectible, Refurbished, or Club.
   */
  condition?: string;
  /** Indicates whether the item is fulfilled by the seller or by Walmart Fulfillment Services. */
  fulfillmentChannel?: FulfillmentChannelType;
  /** The number of offers in a fulfillment channel that meet a specific condition. */
  offerCount?: number;
};

export const offerCountTypeSchema: Schema<OfferCountType> = s.object<OfferCountType>({
  condition: s.optional(s.string()),
  fulfillmentChannel: s.optional(s.lazy(() => fulfillmentChannelTypeSchema)),
  offerCount: s.optional(s.int()),
  _keysMap: {
    offerCount: "OfferCount",
  },
});
