import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of event types. */
export type EventTypes2 = {
  /**
   * Resource (functional category) that the event type is mapped to (for example, ITEM, PRICE,
   * ORDER).
   */
  resourceName?: string;
  /** Event type available for subscription. */
  eventType?: string;
  /** Version identifier of the event type. */
  eventVersion?: string;
  /** Description of the specific event type. */
  description?: string;
};

export const eventTypes2Schema: Schema<EventTypes2> = s.object<EventTypes2>({
  resourceName: s.optional(s.string()),
  eventType: s.optional(s.string()),
  eventVersion: s.optional(s.string()),
  description: s.optional(s.string()),
});
