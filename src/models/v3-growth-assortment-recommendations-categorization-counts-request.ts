import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorizationType3Schema, type CategorizationType3 } from "./categorization-type3.js";
import { filterCriteria4Schema, type FilterCriteria4 } from "./filter-criteria4.js";
import { meta10Schema, type Meta10 } from "./meta10.js";

export type V3GrowthAssortmentRecommendationsCategorizationCountsRequest = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | BRAND | To get list of brands which are associated with the assortment recommendations | string |
   * | CATEGORY | To get list of categories which are associated with the assortment recommendations | string |
   *
   * <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  categorizationType: CategorizationType3;
  /**
   * Meta information for the request. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  meta?: Meta10;
  /**
   * Different type of filters can be passed in this object.<br><b style='color:green;'>Market
   * availability: US | CA | MX</span></b>
   */
  filterCriteria?: FilterCriteria4;
};

export const v3GrowthAssortmentRecommendationsCategorizationCountsRequestSchema: Schema<V3GrowthAssortmentRecommendationsCategorizationCountsRequest> =
  s.object<V3GrowthAssortmentRecommendationsCategorizationCountsRequest>({
    categorizationType: categorizationType3Schema,
    meta: s.optional(s.lazy(() => meta10Schema)),
    filterCriteria: s.optional(s.lazy(() => filterCriteria4Schema)),
  });
