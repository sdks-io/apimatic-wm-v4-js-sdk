import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemStatus10Schema, type ItemStatus10 } from "./item-status10.js";

export type V3GrowthReviewsAcceleratorCategoriesRequest = {
  /** IRP status of the items.<br><b style='color:green;'>Market availability: US only</b> */
  itemStatus?: ItemStatus10;
};

export const v3GrowthReviewsAcceleratorCategoriesRequestSchema: Schema<V3GrowthReviewsAcceleratorCategoriesRequest> =
  s.object<V3GrowthReviewsAcceleratorCategoriesRequest>({
    itemStatus: s.optional(s.lazy(() => itemStatus10Schema)),
  });
