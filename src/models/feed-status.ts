import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Can be one of the following: RECEIVED, INPROGRESS, PROCESSED, or ERROR */
export const FeedStatus = {
  Received: "RECEIVED",
  Inprogress: "INPROGRESS",
  Processed: "PROCESSED",
  Error: "ERROR",
} as const;
export type FeedStatus = (typeof FeedStatus)[keyof typeof FeedStatus] | (string & {});

export const feedStatusSchema: EnumSchema<FeedStatus> = s.enumOf<FeedStatus>(FeedStatus);
