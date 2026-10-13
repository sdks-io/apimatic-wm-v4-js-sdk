import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonBoxSchema, type CommonBox } from "./common-box.js";
import { commonPaginationSchema, type CommonPagination } from "./common-pagination.js";

/**
 * The `listInboundPlanBoxes` response., The `listPackingGroupBoxes` response., The
 * `listShipmentBoxes` response.
 */
export type ListInboundPlanBoxesResponse = {
  /** A list of boxes in an inbound plan. */
  boxes: CommonBox[];
  /** Contains tokens to fetch from a certain page. */
  pagination?: CommonPagination;
};

export const listInboundPlanBoxesResponseSchema: Schema<ListInboundPlanBoxesResponse> =
  s.object<ListInboundPlanBoxesResponse>({
    boxes: s.array(s.lazy(() => commonBoxSchema)),
    pagination: s.optional(s.lazy(() => commonPaginationSchema)),
  });
