import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { event4Schema, type Event4 } from "./event4.js";

/** List of updated subscription objects. */
export type V3WebhooksSubscriptionsResponse3 = {
  event?: Event4[];
};

export const v3WebhooksSubscriptionsResponse3Schema: Schema<V3WebhooksSubscriptionsResponse3> =
  s.object<V3WebhooksSubscriptionsResponse3>({
    event: s.optional(s.array(s.lazy(() => event4Schema))),
  });
