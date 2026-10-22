import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { DateRange4, dateRange4Schema } from "./date-range4.js";
import { itemStatus8Schema, type ItemStatus8 } from "./item-status8.js";
import { price22Schema, type Price22 } from "./price22.js";

/** Specifies the filter request.<br><b style='color:green;'>Market availability: US only</b> */
export type Filter1 = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ELIGIBLE | To get items which are eligible for the program | string |
   * | ENROLLED | To get items which are currently enrolled into the program | string |
   * | COMPLETE | To get items which have attained target reviews through the program | string |
   * <br><b style='color:green;'>Market availability: US only</b>
   */
  itemStatus: ItemStatus8;
  /**
   * Date range to filter impressions, page views, and sales.<br><b style='color:green;'>Market
   * availability: US only</b>
   *
   * @default DateRange4._7Days
   */
  dateRange?: DateRange4;
  /** Category of the items. */
  category?: string[];
  /** Price range of the items.<br><b style='color:green;'>Market availability: US only</b> */
  price?: Price22;
  /**
   * Filter items by customer favorite status. Set to true to return only customer favorite items.
   * Set to false to return only non-customer favorite items. If omitted, all items are returned
   * regardless of customer favorite status.<br><b style='color:green;'>Market availability: US
   * only</b>
   */
  isCustomerFavorite?: boolean;
};

export const filter1Schema: Schema<Filter1> = s.object<Filter1>({
  itemStatus: itemStatus8Schema,
  dateRange: s.defaulted(dateRange4Schema, DateRange4._7Days),
  category: s.optional(s.array(s.string())),
  price: s.optional(s.lazy(() => price22Schema)),
  isCustomerFavorite: s.optional(s.boolean()),
});
