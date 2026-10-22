import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FeedStatus1 = {
  Received: "RECEIVED",
  Inprogress: "INPROGRESS",
  Processed: "PROCESSED",
  Error: "ERROR",
} as const;
export type FeedStatus1 = (typeof FeedStatus1)[keyof typeof FeedStatus1] | (string & {});

export const feedStatus1Schema: EnumSchema<FeedStatus1> = s.enumOf<FeedStatus1>(FeedStatus1);
