import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonItemSchema, type CommonItem } from "./common-item.js";
import { commonPaginationSchema, type CommonPagination } from "./common-pagination.js";

/**
 * The `listInboundPlanItems` response., The `listPackingGroupItems` response., The
 * `listShipmentItems` response.
 */
export type ListInboundPlanItemsResponse = {
  /** The items in an inbound plan. */
  items: CommonItem[];
  /** Contains tokens to fetch from a certain page. */
  pagination?: CommonPagination;
};

export const listInboundPlanItemsResponseSchema: Schema<ListInboundPlanItemsResponse> =
  s.object<ListInboundPlanItemsResponse>({
    items: s.array(s.lazy(() => commonItemSchema)),
    pagination: s.optional(s.lazy(() => commonPaginationSchema)),
  });
