import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

export type V3ReportsSchedulesResponse = {
  /** Current page */
  page?: number;
  /** Number of records fetched. */
  totalCount?: number;
  /** Number of records to be returned. Default is 10. */
  limit?: number;
  /**
   * Specifies pagination when records exceed the specified limit (or default of 10); pass this
   * parameter for the next API call. You only need to pass the cursor value as a query parameter,
   * not the initial API call query parameters. For example, if
   * ['nextCursor'='reportType=ITEM&requestStatus=ERROR&requestSubmissionStartDate=2021-08-20T10:52:59Z&requestSubmissionEndDate=2021-09-14T10:52:59Z&page=2&limit=1']
   * then the subsequent call will be:
   * [marketplace.walmartapis.com/v3/reports/reportRequests?reportType=ITEM&requestStatus=ERROR&requestSubmissionStartDate=2021-08-20T10:52:59Z&requestSubmissionEndDate=2021-09-14T10:52:59Z&page=2&limit=1].
   * You only need to use the nextCursor value instead of the original query parameters.
   */
  nextCursor?: string;
  schedules?: Schedule[];
};

export const v3ReportsSchedulesResponseSchema: Schema<V3ReportsSchedulesResponse> =
  s.object<V3ReportsSchedulesResponse>({
    page: s.optional(s.int()),
    totalCount: s.optional(s.int()),
    limit: s.optional(s.int()),
    nextCursor: s.optional(s.string()),
    schedules: s.optional(s.array(s.lazy(() => scheduleSchema))),
  });
