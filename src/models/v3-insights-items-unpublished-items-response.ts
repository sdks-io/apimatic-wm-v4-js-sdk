import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload18Schema, type Payload18 } from "./payload18.js";
import { totalGmvAmount1Schema, type TotalGmvAmount1 } from "./total-gmv-amount1.js";

export type V3InsightsItemsUnpublishedItemsResponse = {
  payload?: Payload18[];
  /**
   * total number of unpublished items<br><b style='color:green;'>Market availability: US | CA |
   * MX</b>
   */
  totalCount?: number;
  /**
   * Gross Merchandise Value of the total result set<br><b style='color:green;'>Market availability:
   * US | CA | MX</b>
   */
  totalGmvAmount?: TotalGmvAmount1;
};

export const v3InsightsItemsUnpublishedItemsResponseSchema: Schema<V3InsightsItemsUnpublishedItemsResponse> =
  s.object<V3InsightsItemsUnpublishedItemsResponse>({
    payload: s.optional(s.array(s.lazy(() => payload18Schema))),
    totalCount: s.optional(s.int()),
    totalGmvAmount: s.optional(s.lazy(() => totalGmvAmount1Schema)),
  });
