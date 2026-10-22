import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3WebhooksSubscriptionsResponse2 = {
  /**
   * Unique identifier of the deleted subscription.<br><b style='color:green;'>Market availability:
   * Global</b>
   */
  subscriptionId?: string;
  /**
   * Confirmation message indicating the subscription was deleted.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  message?: string;
};

export const v3WebhooksSubscriptionsResponse2Schema: Schema<V3WebhooksSubscriptionsResponse2> =
  s.object<V3WebhooksSubscriptionsResponse2>({
    subscriptionId: s.optional(s.string()),
    message: s.optional(s.string()),
  });
