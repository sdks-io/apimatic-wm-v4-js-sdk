import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonInboundPlanSummarySchema,
  type CommonInboundPlanSummary,
} from "./common-inbound-plan-summary.js";
import { commonPaginationSchema, type CommonPagination } from "./common-pagination.js";

/** The `listInboundPlans` response. */
export type ListInboundPlansResponse = {
  /** A list of inbound plans with minimal information. */
  inboundPlans?: CommonInboundPlanSummary[];
  /** Contains tokens to fetch from a certain page. */
  pagination?: CommonPagination;
};

export const listInboundPlansResponseSchema: Schema<ListInboundPlansResponse> =
  s.object<ListInboundPlansResponse>({
    inboundPlans: s.optional(s.array(s.lazy(() => commonInboundPlanSummarySchema))),
    pagination: s.optional(s.lazy(() => commonPaginationSchema)),
  });
