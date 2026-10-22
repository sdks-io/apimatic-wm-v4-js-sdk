import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeedType3 = {
  ProgramActions: "PROGRAM_ACTIONS",
} as const;
export type FeedType3 = (typeof FeedType3)[keyof typeof FeedType3] | (string & {});

export const feedType3Schema: EnumSchema<FeedType3> = s.enumOf<FeedType3>(FeedType3);
