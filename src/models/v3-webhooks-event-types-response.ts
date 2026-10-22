import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypes2Schema, type EventTypes2 } from "./event-types2.js";

export type V3WebhooksEventTypesResponse = {
  /**
   * List of event type definitions available for subscription.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  eventTypes?: EventTypes2[];
};

export const v3WebhooksEventTypesResponseSchema: Schema<V3WebhooksEventTypesResponse> =
  s.object<V3WebhooksEventTypesResponse>({
    eventTypes: s.optional(s.array(s.lazy(() => eventTypes2Schema))),
  });
