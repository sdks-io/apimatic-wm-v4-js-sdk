import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filter1Schema, type Filter1 } from "./filter1.js";
import { search1Schema, type Search1 } from "./search1.js";
import { sort1Schema, type Sort1 } from "./sort1.js";

export type V3GrowthReviewsAcceleratorItemsRequest = {
  /**
   * Defines the search criteria for filtering items. This allows searching by product name or SKU
   * to match specific items in the marketplace.<br><b style='color:green;'>Market availability: US
   * only</b>
   */
  search?: Search1[];
  /** Specifies the filter request.<br><b style='color:green;'>Market availability: US only</b> */
  filter: Filter1;
  /** Specifies the sort request.<br><b style='color:green;'>Market availability: US only</b> */
  sort?: Sort1[];
};

export const v3GrowthReviewsAcceleratorItemsRequestSchema: Schema<V3GrowthReviewsAcceleratorItemsRequest> =
  s.object<V3GrowthReviewsAcceleratorItemsRequest>({
    search: s.optional(s.array(s.lazy(() => search1Schema))),
    filter: filter1Schema,
    sort: s.optional(s.array(s.lazy(() => sort1Schema))),
  });
