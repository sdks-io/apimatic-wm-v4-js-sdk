import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filtersSchema, type Filters } from "./filters.js";
import { frequencySchema, type Frequency } from "./frequency.js";

export type Payload61 = {
  /** Specifies the day of the month on which the schedule will be triggered. */
  dayOfMonth?: number;
  /**
   * Specifies the month in which the schedule will be triggered. Allowed values are from 1 to 12.
   */
  monthOfYear?: number;
  /**
   * Specifies the day of the week on which the schedule will be triggered. Allowed values are from
   * 0 to 6, where 0 represents Monday and 6 represents Sunday.
   */
  dayOfWeek?: number;
  /**
   * Specifies the hour of the day at which the schedule will be triggered. Allowed values are from
   * 0 to 23, where 0 corresponds to 12:00 AM UTC and 23 corresponds to 11:00 PM UTC. The hour
   * selection is based on the UTC timezone.
   */
  hour?: number;
  /**
   * Specifies the frequency at which the report should be generated. For example, if set to YEARLY,
   * the report will be generated once every year.
   */
  frequency?: Frequency;
  /** Defines the interval at which the report repeats based on the selected frequency. */
  repeatsEvery?: number;
  filters?: Filters;
};

export const payload61Schema: Schema<Payload61> = s.object<Payload61>({
  dayOfMonth: s.optional(s.float64()),
  monthOfYear: s.optional(s.float64()),
  dayOfWeek: s.optional(s.float64()),
  hour: s.optional(s.float64()),
  frequency: s.optional(s.lazy(() => frequencySchema)),
  repeatsEvery: s.optional(s.float64()),
  filters: s.optional(s.lazy(() => filtersSchema)),
});
