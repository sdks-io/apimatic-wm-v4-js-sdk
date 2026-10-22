import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Meta data about the list.<br><b style='color:green;'>Market availability: MX</b> */
export type Meta12 = {
  /** Total no of return orders.<br><b style='color:green;'>Market availability: MX</b> */
  totalCount?: number;
  /** The number of orders to be returned.<br><b style='color:green;'>Market availability: MX</b> */
  limit?: number;
  /** nextCursorMark.<br><b style='color:green;'>Market availability: MX</b> */
  nextCursorMark?: string;
};

export const meta12Schema: Schema<Meta12> = s.object<Meta12>({
  totalCount: s.optional(s.int()),
  limit: s.optional(s.int()),
  nextCursorMark: s.optional(s.string()),
});
