import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { DateRange, dateRangeSchema } from "./date-range.js";
import { itemStatus3Schema, type ItemStatus3 } from "./item-status3.js";
import { priceRequestSchema, type PriceRequest } from "./price-request.js";

/** Filter request. */
export type FilterRequest = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ELIGIBLE | To get items which are eligible for the program | string |
   * | ENROLLED | To get items which are currently enrolled into the program | string |
   * | COMPLETE | To get items which have attained target reviews through the program | string |
   */
  itemStatus: ItemStatus3;
  /** Date range to filter impressions, page views, and sales. @default DateRange._7Days */
  dateRange?: DateRange;
  /** Category of the items. */
  category?: string;
  /** Price range of the items. */
  price?: PriceRequest;
};

export const filterRequestSchema: Schema<FilterRequest> = s.object<FilterRequest>({
  itemStatus: itemStatus3Schema,
  dateRange: s.defaulted(dateRangeSchema, DateRange._7Days),
  category: s.optional(s.string()),
  price: s.optional(s.lazy(() => priceRequestSchema)),
});
