import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Bidding strategy type for the campaign. */
export const BiddingStrategyType = {
  TargetRoas: "TARGET_ROAS",
  MaximizeTraffic: "MAXIMIZE_TRAFFIC",
} as const;
export type BiddingStrategyType =
  | (typeof BiddingStrategyType)[keyof typeof BiddingStrategyType]
  | (string & {});

export const biddingStrategyTypeSchema: EnumSchema<BiddingStrategyType> =
  s.enumOf<BiddingStrategyType>(BiddingStrategyType);
