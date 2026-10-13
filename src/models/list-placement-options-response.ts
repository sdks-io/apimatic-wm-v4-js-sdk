import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonPaginationSchema, type CommonPagination } from "./common-pagination.js";
import { commonPlacementOptionSchema, type CommonPlacementOption } from "./common-placement-option.js";

/** The `listPlacementOptions` response. */
export type ListPlacementOptionsResponse = {
  /** Placement options generated for the inbound plan. */
  placementOptions: CommonPlacementOption[];
  /** Contains tokens to fetch from a certain page. */
  pagination?: CommonPagination;
};

export const listPlacementOptionsResponseSchema: Schema<ListPlacementOptionsResponse> =
  s.object<ListPlacementOptionsResponse>({
    placementOptions: s.array(s.lazy(() => commonPlacementOptionSchema)),
    pagination: s.optional(s.lazy(() => commonPaginationSchema)),
  });
