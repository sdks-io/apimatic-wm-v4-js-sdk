import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";
import { resultRecordSchema, type ResultRecord } from "./result-record.js";

export type V3Feeds500Error = {
  errors?: Error3[];
  /** Total number of feeds returned. */
  totalResults?: number;
  /** The object response to the starting number, where 0 is the first available. */
  offset?: number;
  /** The number of items to be returned. */
  limit?: number;
  /** Specifies the feed status results. */
  results?: ResultRecord;
};

export const v3Feeds500ErrorSchema: Schema<V3Feeds500Error> = s.object<V3Feeds500Error>({
  errors: s.optional(s.array(s.lazy(() => error3Schema))),
  totalResults: s.optional(s.int()),
  offset: s.optional(s.int()),
  limit: s.optional(s.int()),
  results: s.optional(s.lazy(() => resultRecordSchema)),
});
