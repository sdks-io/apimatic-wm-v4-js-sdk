import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semTrafficSchema, type SemTraffic } from "./sem-traffic.js";

/** List of Campaigns with performance data */
export type SemCampaignReport = {
  /** Unique identifier for the campaign. */
  campaignId?: string;
  /** Name of the campaign. */
  name?: string;
  /** Start date of the campaign in 'YYYY-MM-DD' format. */
  startDate?: string;
  /** End date of the campaign in 'YYYY-MM-DD' format. */
  endDate?: string;
  /** Daily budget allocated for the campaign. */
  dailyBudget?: number;
  /** Total budget allocated for the campaign. */
  totalBudget?: number;
  /** Bidding strategy type for the campaign. */
  biddingStrategyType?: string;
  /** Target ROAS for the campaign. */
  targetRoas?: number;
  /** Current status of the campaign. */
  status?: string;
  /** Date when the campaign was created in 'YYYY-MM-DD' format. */
  createdDate?: string;
  /** Performance data of the campaign */
  traffic?: SemTraffic;
};

export const semCampaignReportSchema: Schema<SemCampaignReport> = s.object<SemCampaignReport>({
  campaignId: s.optional(s.string()),
  name: s.optional(s.string()),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  dailyBudget: s.optional(s.float64()),
  totalBudget: s.optional(s.float64()),
  biddingStrategyType: s.optional(s.string()),
  targetRoas: s.optional(s.float64()),
  status: s.optional(s.string()),
  createdDate: s.optional(s.string()),
  traffic: s.optional(s.lazy(() => semTrafficSchema)),
});
