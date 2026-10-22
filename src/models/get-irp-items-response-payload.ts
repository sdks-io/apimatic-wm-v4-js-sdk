import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { DateRange, dateRangeSchema } from "./date-range.js";
import { itemsPayloadSchema, type ItemsPayload } from "./items-payload.js";

/** Response payload. */
export type GetIrpItemsResponsePayload = {
  /** The total of items found. */
  totalItems?: number;
  /** The total of items fetched. */
  fetchedItems?: number;
  /** Date range to filter impressions, page views, and sales. @default DateRange._7Days */
  dateRange?: DateRange;
  items?: ItemsPayload[];
  /** Specifies the searchId to fetch the subsequent set of results. */
  scrollId?: string;
};

export const getIrpItemsResponsePayloadSchema: Schema<GetIrpItemsResponsePayload> =
  s.object<GetIrpItemsResponsePayload>({
    totalItems: s.optional(s.int()),
    fetchedItems: s.optional(s.int()),
    dateRange: s.defaulted(dateRangeSchema, DateRange._7Days),
    items: s.optional(s.array(s.lazy(() => itemsPayloadSchema))),
    scrollId: s.optional(s.string()),
  });
