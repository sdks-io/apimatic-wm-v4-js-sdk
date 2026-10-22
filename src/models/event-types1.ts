import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of event types. */
export type EventTypes1 = {
  /** Resource (functional category) that the event type is mapped to. */
  resourceName?: string;
  /** Event type to subscribe to. */
  eventType?: string;
  /** Version of the specific event type. */
  eventVersion?: string;
  /** Description of the specific event type. */
  description?: string;
};

export const eventTypes1Schema: Schema<EventTypes1> = s.object<EventTypes1>({
  resourceName: s.optional(s.string()),
  eventType: s.optional(s.string()),
  eventVersion: s.optional(s.string()),
  description: s.optional(s.string()),
});
