import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requestStatusResponseSchema, type RequestStatusResponse } from "./request-status-response.js";

export type RequestsStatusResponse = {
  /** Current page */
  page?: number;
  /** Number of records fetched. */
  totalCount?: number;
  /** Number of records to be returned. Default is 10. */
  limit?: number;
  /**
   * Used for pagination when more than specified limit (or default 10) records are found. Use this
   * param for next API call. Just have to use this value as query param. Need to pass only the
   * cursor value and not the initial API call query params. For e.g. if
   * ['nextCursor'='reportType=ITEM&requestStatus=ERROR&requestSubmissionStartDate=2021-08-20T10:52:59Z&requestSubmissionEndDate=2021-09-14T10:52:59Z&page=2&limit=1']
   * then subsequent call to will be
   * [marketplace.walmartapis.com/v3/reports/reportRequests?reportType=ITEM&requestStatus=ERROR&requestSubmissionStartDate=2021-08-20T10:52:59Z&requestSubmissionEndDate=2021-09-14T10:52:59Z&page=2&limit=1].
   * Just have to use nextCursor value instead of query params
   */
  nextCursor?: string;
  /** List of requests */
  requests?: RequestStatusResponse[];
};

export const requestsStatusResponseSchema: Schema<RequestsStatusResponse> = s.object<RequestsStatusResponse>({
  page: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  limit: s.optional(s.int()),
  nextCursor: s.optional(s.string()),
  requests: s.optional(s.array(s.lazy(() => requestStatusResponseSchema))),
});
