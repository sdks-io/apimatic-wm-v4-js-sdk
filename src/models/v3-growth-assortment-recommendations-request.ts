import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterCriteria3Schema, type FilterCriteria3 } from "./filter-criteria3.js";
import { meta6Schema, type Meta6 } from "./meta6.js";

export type V3GrowthAssortmentRecommendationsRequest = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM | To get list of recommended items | string |
   *
   * <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   *
   * @default "ITEM"
   */
  recommendationType?: "ITEM";
  /** Meta information for the request. */
  meta?: Meta6;
  /** Different type of filters can be passed in this object. */
  filterCriteria?: FilterCriteria3;
};

export const v3GrowthAssortmentRecommendationsRequestSchema: Schema<V3GrowthAssortmentRecommendationsRequest> =
  s.object<V3GrowthAssortmentRecommendationsRequest>({
    recommendationType: s.defaulted(s.literal("ITEM"), "ITEM"),
    meta: s.optional(s.lazy(() => meta6Schema)),
    filterCriteria: s.optional(s.lazy(() => filterCriteria3Schema)),
  });
