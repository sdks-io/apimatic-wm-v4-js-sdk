import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { biddingStrategyTypeSchema, type BiddingStrategyType } from "./bidding-strategy-type.js";

/** Metadata for updating the campaign. */
export type SemCampaignUpdateMetadata = {
  /**
   * Name of the campaign. Allowed characters: letters, digits, dashes, underscores, and spaces.
   * Maximum 255 characters allowed.
   */
  name?: string;
  /** Start date of the campaign in YYYY-MM-DD format. */
  startDate?: string;
  /** End date of the campaign in YYYY-MM-DD format. */
  endDate?: string;
  /**
   * Daily budget allocated for the campaign. Must be a positive value with up to two decimal
   * places. Daily budget must be between $5.00 and $2,500.00.
   */
  dailyBudget?: number;
  /**
   * Total budget allocated for the campaign. Total budget must be between $5.00 and $250,000.00.
   * Cannot be updated to a value less than what has already been spent.
   */
  totalBudget?: number;
  /** Bidding strategy type for the campaign. */
  biddingStrategyType?: BiddingStrategyType;
  /**
   * Target ROAS for the campaign. Must be a positive value, with up to two decimal places.
   *
   * @default 3.5
   */
  targetRoas?: number;
};

export const semCampaignUpdateMetadataSchema: Schema<SemCampaignUpdateMetadata> =
  s.object<SemCampaignUpdateMetadata>({
    name: s.optional(s.string()),
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    dailyBudget: s.optional(s.float64()),
    totalBudget: s.optional(s.float64()),
    biddingStrategyType: s.optional(s.lazy(() => biddingStrategyTypeSchema)),
    targetRoas: s.defaulted(s.float64(), 3.5),
  });
