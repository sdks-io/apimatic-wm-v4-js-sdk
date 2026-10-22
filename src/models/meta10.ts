import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Meta information for the request. <br><b style='color:green;'>Market availability: US
 * only</span></b>
 */
export type Meta10 = {
  /**
   * Number of records expected in the request. Limit for US is 1 to 200 <br><b
   * style='color:green;'>Market availability: US only</span></b>
   *
   * @default 200
   */
  limit?: number;
  /**
   * Used for pagination when more than 200 records are retrieved. The nextCursor value of the
   * response includes a marker which needs to be passed in next call which retrieves the next page
   * of results.<br><b style='color:green;'>Market availability: US only</span></b>
   */
  nextCursor?: string;
};

export const meta10Schema: Schema<Meta10> = s.object<Meta10>({
  limit: s.defaulted(s.int(), 200),
  nextCursor: s.optional(s.string()),
});
