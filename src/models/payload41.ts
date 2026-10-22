import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { DateRange4, dateRange4Schema } from "./date-range4.js";
import { item121Schema, type Item121 } from "./item121.js";

/** Response payload. */
export type Payload41 = {
  /**
   * The total number of items found.<br><b style='color:green;'>Market availability: US only</b>
   */
  totalItems?: number;
  /**
   * The total number of items fetched.<br><b style='color:green;'>Market availability: US only</b>
   */
  fetchedItems?: number;
  /**
   * Date range to filter impressions, page views, and sales.<br><b style='color:green;'>Market
   * availability: US only</b>
   *
   * @default DateRange4._7Days
   */
  dateRange?: DateRange4;
  items?: Item121[];
  /**
   * Specifies the searchId to fetch the subsequent set of results.<br><b
   * style='color:green;'>Market availability: US only</b>
   */
  scrollId?: string;
};

export const payload41Schema: Schema<Payload41> = s.object<Payload41>({
  totalItems: s.optional(s.int()),
  fetchedItems: s.optional(s.int()),
  dateRange: s.defaulted(dateRange4Schema, DateRange4._7Days),
  items: s.optional(s.array(s.lazy(() => item121Schema))),
  scrollId: s.optional(s.string()),
});
