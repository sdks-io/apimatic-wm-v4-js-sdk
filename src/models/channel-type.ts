import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sales-channel hint that lets shipping-v4 route differently for WFS-fulfilled orders,
 * marketplace-seller-fulfilled orders, and external (off-Walmart) orders.
 */
export const ChannelType = {
  WalmartMarketplace: "WALMART_MARKETPLACE",
  External: "EXTERNAL",
  Wfs: "WFS",
} as const;
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType] | (string & {});

export const channelTypeSchema: EnumSchema<ChannelType> = s.enumOf<ChannelType>(ChannelType);
