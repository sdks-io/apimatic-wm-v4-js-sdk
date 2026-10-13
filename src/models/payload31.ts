import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { proofOfDeliverySchema, type ProofOfDelivery } from "./proof-of-delivery.js";
import { trackingSummarySchema, type TrackingSummary } from "./tracking-summary.js";

export type Payload31 = {
  trackingId?: string;
  alternateLegTrackingId?: string;
  eventHistory?: Event[];
  promisedDeliveryDate?: Date;
  summary?: TrackingSummary;
  proofOfDelivery?: ProofOfDelivery;
};

export const payload31Schema: Schema<Payload31> = s.object<Payload31>({
  trackingId: s.optional(s.string()),
  alternateLegTrackingId: s.optional(s.string()),
  eventHistory: s.optional(s.array(s.lazy(() => eventSchema))),
  promisedDeliveryDate: s.optional(s.dateTime()),
  summary: s.optional(s.lazy(() => trackingSummarySchema)),
  proofOfDelivery: s.optional(s.lazy(() => proofOfDeliverySchema)),
});
