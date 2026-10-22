import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Meta information for the response. */
export type MetaDataResponse = {
  /**
   * The total number of records are present for the requested categorization type along with
   * filters.
   */
  totalRecords?: number;
  /** The number of records fetched in the response. */
  recordsFetched?: number;
  /** Number of records expected in the request @default 200 */
  limit?: number;
  /**
   * The string returned from the initial API call to indicate nextCursor. Specify nextCursor value
   * to retrieve the next set of records.
   */
  nextCursor?: string;
};

export const metaDataResponseSchema: Schema<MetaDataResponse> = s.object<MetaDataResponse>({
  totalRecords: s.optional(s.int()),
  recordsFetched: s.optional(s.int()),
  limit: s.defaulted(s.int(), 200),
  nextCursor: s.optional(s.string()),
});
