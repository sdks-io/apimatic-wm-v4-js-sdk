import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type Event = {
  /** Carrier-normalized event code (e.g. PICKED_UP, OUT_FOR_DELIVERY, DELIVERED, EXCEPTION). */
  eventCode: string;
  eventTime: Date;
  location?: Location;
  description?: string;
};

export const eventSchema: Schema<Event> = s.object<Event>({
  eventCode: s.string(),
  eventTime: s.dateTime(),
  location: s.optional(s.lazy(() => locationSchema)),
  description: s.optional(s.string()),
});
