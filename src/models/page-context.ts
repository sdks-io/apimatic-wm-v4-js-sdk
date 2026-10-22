import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US</b> */
export type PageContext = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  pageNo?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  currentPageCount?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  totalCount?: number;
  /** <br><b style='color:green;'>Market availability: US</b> */
  totalPages?: number;
};

export const pageContextSchema: Schema<PageContext> = s.object<PageContext>({
  pageNo: s.optional(s.int()),
  currentPageCount: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  totalPages: s.optional(s.int()),
});
