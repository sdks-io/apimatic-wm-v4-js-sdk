import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { events3Schema, type Events3 } from "./events3.js";

export type V3WebhooksSubscriptionsRequest = {
  /** Array of subscription definitions to create. */
  events?: Events3[];
};

export const v3WebhooksSubscriptionsRequestSchema: Schema<V3WebhooksSubscriptionsRequest> =
  s.object<V3WebhooksSubscriptionsRequest>({
    events: s.optional(s.array(s.lazy(() => events3Schema))),
  });
