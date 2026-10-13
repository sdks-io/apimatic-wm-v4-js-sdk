import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeedStatus = {
  Received: "RECEIVED",
  InProgress: "IN_PROGRESS",
  Done: "DONE",
  Error: "ERROR",
} as const;
export type FeedStatus = (typeof FeedStatus)[keyof typeof FeedStatus] | (string & {});

export const feedStatusSchema: EnumSchema<FeedStatus> = s.enumOf<FeedStatus>(FeedStatus);
