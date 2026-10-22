import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeedType2 = {
  WalmartFundedIncentivesEnrollment: "WALMART_FUNDED_INCENTIVES_ENROLLMENT",
} as const;
export type FeedType2 = (typeof FeedType2)[keyof typeof FeedType2] | (string & {});

export const feedType2Schema: EnumSchema<FeedType2> = s.enumOf<FeedType2>(FeedType2);
