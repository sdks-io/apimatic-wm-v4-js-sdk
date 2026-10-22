import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Meta information for the request. */
export type Meta6 = {
  /**
   * Number of records expected in the request limit for US is 1 to 200 and limit for CA and MX is 1
   * to 1000 default is 200 <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   *
   * @default 200
   */
  limit?: number;
  /**
   * Used for pagination when more than 200 records are retrieved. The nextCursor value of the
   * response includes a marker which needs to be passed in next call which retrieves the next page
   * of results. <br><b style='color:green;'>Market availability: US only</span></b>
   */
  nextCursor?: string;
};

export const meta6Schema: Schema<Meta6> = s.object<Meta6>({
  limit: s.defaulted(s.int(), 200),
  nextCursor: s.optional(s.string()),
});
