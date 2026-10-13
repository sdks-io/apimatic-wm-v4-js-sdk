import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelTypeSchema, type ChannelType } from "./channel-type.js";
import { marketplaceOrderDetailsSchema, type MarketplaceOrderDetails } from "./marketplace-order-details.js";
import {
  marketplaceShipmentDetailsSchema,
  type MarketplaceShipmentDetails,
} from "./marketplace-shipment-details.js";

export type ChannelDetails = {
  /**
   * Sales-channel hint that lets shipping-v4 route differently for WFS-fulfilled orders,
   * marketplace-seller-fulfilled orders, and external (off-Walmart) orders.
   */
  channelType: ChannelType;
  /**
   * Marketplace-side order context for orders originating on the Walmart Marketplace surface.
   * Equivalent in shape to industry SP-API's order-details block; renamed to be vendor-neutral.
   */
  marketplaceOrderDetails?: MarketplaceOrderDetails;
  /**
   * Marketplace-side shipment context. Renamed from the industry SP-API "vendor-shipment-details"
   * block to be vendor-neutral.
   */
  marketplaceShipmentDetails?: MarketplaceShipmentDetails;
};

export const channelDetailsSchema: Schema<ChannelDetails> = s.object<ChannelDetails>({
  channelType: channelTypeSchema,
  marketplaceOrderDetails: s.optional(s.lazy(() => marketplaceOrderDetailsSchema)),
  marketplaceShipmentDetails: s.optional(s.lazy(() => marketplaceShipmentDetailsSchema)),
});
