import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3ReportsSchedulesRequest = {
  /** Defines the interval at which the report repeats based on the selected frequency. */
  repeatsEvery?: number;
  /**
   * Specifies the hour of the day at which the schedule will be triggered. Allowed values are from
   * 0 to 23, where 0 corresponds to 12:00 AM UTC and 23 corresponds to 11:00 PM UTC. The hour
   * selection is based on the UTC timezone.
   */
  hour?: number;
  /** Specifies the day of the month on which the schedule will be triggered. */
  dayOfMonth?: number;
  /**
   * Specifies the day of the week on which the schedule will be triggered. Allowed values are from
   * 0 to 6, where 0 represents Monday and 6 represents Sunday.
   */
  dayOfWeek?: number;
  /**
   * Specifies the month in which the schedule will be triggered. Allowed values are from 1 to 12.
   */
  monthOfYear?: number;
  /**
   * Specifies the start date for the schedule. The date should be in a valid date format (Example:
   * YYYY-MM-DD).
   */
  scheduleStartDate?: string;
};

export const v3ReportsSchedulesRequestSchema: Schema<V3ReportsSchedulesRequest> =
  s.object<V3ReportsSchedulesRequest>({
    repeatsEvery: s.optional(s.float64()),
    hour: s.optional(s.float64()),
    dayOfMonth: s.optional(s.float64()),
    dayOfWeek: s.optional(s.float64()),
    monthOfYear: s.optional(s.float64()),
    scheduleStartDate: s.optional(s.string()),
  });
