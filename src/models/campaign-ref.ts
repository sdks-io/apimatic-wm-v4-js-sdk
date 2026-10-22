import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Campaign association reference. Represents a campaign that an item belongs to. A single item can
 * appear in multiple campaigns.
 */
export type CampaignRef = {
  /** Campaign identifier. */
  campaignId?: string;
  /** Human-readable campaign name. */
  campaignName?: string;
};

export const campaignRefSchema: Schema<CampaignRef> = s.object<CampaignRef>({
  campaignId: s.optional(s.string()),
  campaignName: s.optional(s.string()),
});
