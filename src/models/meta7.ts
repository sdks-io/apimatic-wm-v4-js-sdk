import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Meta information for the response. */
export type Meta7 = {
  /**
   * The total number of records are present for the requested categorization type along with
   * filters. <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  totalRecords?: number;
  /**
   * The number of records fetched in the response. <br><b style='color:green;'>Market availability:
   * US | CA | MX</span></b>
   */
  recordsFetched?: number;
  /**
   * Number of records expected in the request Limit for US is 1 to 200 <br>Limit for CA and MX is 1
   * to 1000 <br>Default is 200 <br><b style='color:green;'>Market availability: US | CA |
   * MX</span></b>
   *
   * @default 200
   */
  limit?: number;
  /**
   * The string returned from the initial API call to indicate nextCursor. Specify nextCursor value
   * to retrieve the next set of records. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  nextCursor?: string;
};

export const meta7Schema: Schema<Meta7> = s.object<Meta7>({
  totalRecords: s.optional(s.int()),
  recordsFetched: s.optional(s.int()),
  limit: s.defaulted(s.int(), 200),
  nextCursor: s.optional(s.string()),
});
