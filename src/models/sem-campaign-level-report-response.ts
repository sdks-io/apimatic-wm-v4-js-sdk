import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semCampaignReportSchema, type SemCampaignReport } from "./sem-campaign-report.js";
import { semPaginationSchema, type SemPagination } from "./sem-pagination.js";

export type SemCampaignLevelReportResponse = {
  /** Pagination details */
  pagination?: SemPagination;
  /** List of campaigns with performance data */
  data?: SemCampaignReport[];
};

export const semCampaignLevelReportResponseSchema: Schema<SemCampaignLevelReportResponse> =
  s.object<SemCampaignLevelReportResponse>({
    pagination: s.optional(s.lazy(() => semPaginationSchema)),
    data: s.optional(s.array(s.lazy(() => semCampaignReportSchema))),
  });
