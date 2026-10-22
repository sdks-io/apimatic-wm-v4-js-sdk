import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { events1Schema, type Events1 } from "./events1.js";

export type Events = {
  /** List of subscriptions grouped by event. */
  events?: Events1[];
};

export const eventsSchema: Schema<Events> = s.object<Events>({
  events: s.optional(s.array(s.lazy(() => events1Schema))),
});
