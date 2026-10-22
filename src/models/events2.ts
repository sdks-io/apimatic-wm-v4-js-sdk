import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { event3Schema, type Event3 } from "./event3.js";

/** List of events. */
export type Events2 = {
  /** Array of subscription objects returned by the service. */
  event?: Event3[];
};

export const events2Schema: Schema<Events2> = s.object<Events2>({
  event: s.optional(s.array(s.lazy(() => event3Schema))),
});
