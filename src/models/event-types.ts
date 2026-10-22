import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypes1Schema, type EventTypes1 } from "./event-types1.js";

export type EventTypes = {
  /** List of event types. */
  eventTypes?: EventTypes1[];
};

export const eventTypesSchema: Schema<EventTypes> = s.object<EventTypes>({
  eventTypes: s.optional(s.array(s.lazy(() => eventTypes1Schema))),
});
