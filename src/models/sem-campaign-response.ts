import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SemCampaignResponse = {
  /** Unique identifier for the campaign. */
  campaignId?: string;
};

export const semCampaignResponseSchema: Schema<SemCampaignResponse> = s.object<SemCampaignResponse>({
  campaignId: s.optional(s.string()),
});
