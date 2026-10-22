import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta1 = {
  /** Total no of return orders.<br><b style='color:green;'>Market availability: Global</b> */
  totalCount?: number;
  /**
   * The number of orders to be returned.<br><b style='color:green;'>Market availability: Global</b>
   */
  limit?: number;
  /**
   * String to be used as query parameter for getting next set of return orders.<br><b
   * style='color:green;'>Market availability: Global</b>
   */
  nextCursorMark?: string;
};

export const meta1Schema: Schema<Meta1> = s.object<Meta1>({
  totalCount: s.optional(s.int()),
  limit: s.optional(s.int()),
  nextCursorMark: s.optional(s.string()),
});
