import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { biddingStrategyTypeSchema, type BiddingStrategyType } from "./bidding-strategy-type.js";

/** Metadata for creating a campaign. */
export type SemCampaignCreateMetadata = {
  /**
   * Name of the campaign. Allowed characters: letters, digits, dashes, underscores, and spaces.
   * Maximum 255 characters allowed.
   */
  name: string;
  /** Start date of the campaign in YYYY-MM-DD format. */
  startDate: string;
  /** End date of the campaign in YYYY-MM-DD format. */
  endDate?: string;
  /**
   * Daily budget allocated for the campaign. Must be a positive value with up to 2 decimal places.
   * Daily budget must be between $5.00 and $2,500.00.
   */
  dailyBudget: number;
  /**
   * Total budget allocated for the campaign. Must be a positive value with up to 2 decimal places.
   * Total budget must be between $5.00 and $250,000.00. Total budget must be greater than or equal
   * to daily budget.
   */
  totalBudget?: number;
  /** Bidding strategy type for the campaign. */
  biddingStrategyType?: BiddingStrategyType;
  /**
   * Target ROAS for the campaign. Must be a positive value between 1.00 and 20.00, with up to 2
   * decimal places.
   *
   * @default 3.5
   */
  targetRoas?: number;
};

export const semCampaignCreateMetadataSchema: Schema<SemCampaignCreateMetadata> =
  s.object<SemCampaignCreateMetadata>({
    name: s.string(),
    startDate: s.string(),
    endDate: s.optional(s.string()),
    dailyBudget: s.float64(),
    totalBudget: s.optional(s.float64()),
    biddingStrategyType: s.optional(s.lazy(() => biddingStrategyTypeSchema)),
    targetRoas: s.defaulted(s.float64(), 3.5),
  });
