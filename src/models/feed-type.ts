import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Allowed Values */
export const FeedType = {
  FitmentAces: "FITMENT_ACES",
  FitmentPies: "FITMENT_PIES",
} as const;
export type FeedType = (typeof FeedType)[keyof typeof FeedType] | (string & {});

export const feedTypeSchema: EnumSchema<FeedType> = s.enumOf<FeedType>(FeedType);
