import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The channel via order return got initiated.<br><b style='color:green;'>Market availability:
 * US</b>
 */
export type ReturnChannel = {
  /**
   * Valid values are: ONLINE, IN_STORE, and CUSTOMER_CARE.<br><b style='color:green;'>Market
   * availability: US</b>
   */
  channelName?: string;
};

export const returnChannelSchema: Schema<ReturnChannel> = s.object<ReturnChannel>({
  channelName: s.optional(s.string()),
});
