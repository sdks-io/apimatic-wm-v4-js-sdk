import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lagTimeHeader1Schema, type LagTimeHeader1 } from "./lag-time-header1.js";
import { lagTime2Schema, type LagTime2 } from "./lag-time2.js";

export type V3FeedsRequest = {
  /**
   * Defines the header metadata for a lag time update feed.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  lagTimeHeader: LagTimeHeader1;
  /**
   * Details for each lag time entry.
   *
   * <strong style="color: green;">Market availability: Global</strong>
   */
  lagTime?: LagTime2[];
};

export const v3FeedsRequestSchema: Schema<V3FeedsRequest> = s.object<V3FeedsRequest>({
  lagTimeHeader: lagTimeHeader1Schema,
  lagTime: s.optional(s.array(s.lazy(() => lagTime2Schema))),
});
