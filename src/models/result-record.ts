import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feedRecordSchema, type FeedRecord } from "./feed-record.js";

/** Specifies the feed status results. */
export type ResultRecord = {
  /** Specifies the feed status results. */
  feed?: FeedRecord[];
};

export const resultRecordSchema: Schema<ResultRecord> = s.object<ResultRecord>({
  feed: s.optional(s.array(s.lazy(() => feedRecordSchema))),
});
