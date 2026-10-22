import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filter2Schema, type Filter2 } from "./filter2.js";
import { query1Schema, type Query1 } from "./query1.js";

export type V3InsightsItemsListingQualityItemsRequest = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  query?: Query1;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  filters?: Filter2[];
};

export const v3InsightsItemsListingQualityItemsRequestSchema: Schema<V3InsightsItemsListingQualityItemsRequest> =
  s.object<V3InsightsItemsListingQualityItemsRequest>({
    query: s.optional(s.lazy(() => query1Schema)),
    filters: s.optional(s.array(s.lazy(() => filter2Schema))),
  });
