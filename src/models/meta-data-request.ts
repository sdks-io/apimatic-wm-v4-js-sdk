import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Meta information for the request. */
export type MetaDataRequest = {
  /**
   * Number of records expected in the request Limit for US is 1 to 200 <br>Limit for CA and MX is 1
   * to 1000 <br>Default is 200
   *
   * @default 200
   */
  limit?: number;
  /**
   * Used for pagination when more than 200 records are retrieved. The nextCursor value of the
   * response includes a marker which needs to be passed in next call which retrieves the next page
   * of results.
   */
  nextCursor?: string;
};

export const metaDataRequestSchema: Schema<MetaDataRequest> = s.object<MetaDataRequest>({
  limit: s.defaulted(s.int(), 200),
  nextCursor: s.optional(s.string()),
});
