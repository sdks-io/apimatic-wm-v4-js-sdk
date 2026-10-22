import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { events2Schema, type Events2 } from "./events2.js";

export type V3WebhooksSubscriptionsResponse = {
  /**
   * List of subscriptions that match the request filters.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  events?: Events2[];
};

export const v3WebhooksSubscriptionsResponseSchema: Schema<V3WebhooksSubscriptionsResponse> =
  s.object<V3WebhooksSubscriptionsResponse>({
    events: s.optional(s.array(s.lazy(() => events2Schema))),
  });
