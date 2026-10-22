import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeedType11 = {
  IncentiveEnrollment: "INCENTIVE_ENROLLMENT",
} as const;
export type FeedType11 = (typeof FeedType11)[keyof typeof FeedType11] | (string & {});

export const feedType11Schema: EnumSchema<FeedType11> = s.enumOf<FeedType11>(FeedType11);
