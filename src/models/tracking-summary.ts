import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status5Schema, type Status5 } from "./status5.js";

export type TrackingSummary = {
  status?: Status5;
  statusUpdatedTime?: Date;
};

export const trackingSummarySchema: Schema<TrackingSummary> = s.object<TrackingSummary>({
  status: s.optional(s.lazy(() => status5Schema)),
  statusUpdatedTime: s.optional(s.dateTime()),
});
