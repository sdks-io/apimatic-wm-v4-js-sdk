import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Performance data of the campaign */
export type SemTraffic = {
  /** The number of times the advertisement was displayed. */
  impressions?: number;
  /** The number of times the advertisement was clicked. */
  clicks?: number;
  /** Click-Through Rate (CTR), calculated as clicks divided by impressions. */
  ctr?: number;
  /** Total amount spent on ads. */
  adspend?: number;
  /** Cost Per Click (CPC), calculated as ad spend divided by clicks. */
  cpc?: number;
  /** Gross Merchandise Value (GMV), representing total sales generated. */
  gmv?: number;
  /** Return on Ad Spend (ROAS), calculated as GMV divided by ad spend. */
  roas?: number;
};

export const semTrafficSchema: Schema<SemTraffic> = s.object<SemTraffic>({
  impressions: s.optional(s.int()),
  clicks: s.optional(s.int()),
  ctr: s.optional(s.float64()),
  adspend: s.optional(s.float64()),
  cpc: s.optional(s.float64()),
  gmv: s.optional(s.float64()),
  roas: s.optional(s.float64()),
});
