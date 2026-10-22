import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { event4Schema, type Event4 } from "./event4.js";

/** List of subscriptions created in response to the request. */
export type V3WebhooksSubscriptionsResponse1 = {
  event?: Event4[];
};

export const v3WebhooksSubscriptionsResponse1Schema: Schema<V3WebhooksSubscriptionsResponse1> =
  s.object<V3WebhooksSubscriptionsResponse1>({
    event: s.optional(s.array(s.lazy(() => event4Schema))),
  });
