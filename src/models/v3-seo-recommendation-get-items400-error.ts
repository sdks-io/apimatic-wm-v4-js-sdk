import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { item3Schema, type Item3 } from "./item3.js";

export type V3SeoRecommendationGetItems400Error = {
  error?: string;
  /** The link to the next scrollID to be used for pagination */
  nextCursor?: string;
  /** The link to the previously used scrollID if one was provided. */
  previousCursor?: string;
  /** The total number of records available regardless of state */
  totalRecords?: number;
  /** The number of records fetched according to the search filters */
  recordsFetched?: number;
  items?: Item3[];
};

export const v3SeoRecommendationGetItems400ErrorSchema: Schema<V3SeoRecommendationGetItems400Error> =
  s.object<V3SeoRecommendationGetItems400Error>({
    error: s.optional(s.string()),
    nextCursor: s.optional(s.string()),
    previousCursor: s.optional(s.string()),
    totalRecords: s.optional(s.int()),
    recordsFetched: s.optional(s.int()),
    items: s.optional(s.array(s.lazy(() => item3Schema))),
    _keysMap: {
      nextCursor: "next_cursor",
      previousCursor: "previous_cursor",
      totalRecords: "total_records",
      recordsFetched: "records_fetched",
    },
  });
