import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Meta information for the response. <br><b style='color:green;'>Market availability: US
 * only</span></b>
 */
export type Meta8 = {
  /**
   * The total number of records are present for the requested variants based on the primary variant
   * item ID.
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

export const meta8Schema: Schema<Meta8> = s.object<Meta8>({
  totalRecords: s.optional(s.int()),
  recordsFetched: s.optional(s.int()),
  limit: s.defaulted(s.int(), 200),
  nextCursor: s.optional(s.string()),
});
