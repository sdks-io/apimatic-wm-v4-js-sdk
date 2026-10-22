import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload11Schema, type Payload11 } from "./payload11.js";

export type V3InsightsItemsListingQualityItemsResponse = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  nextCursor?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  totalItems?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  payload?: Payload11[];
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  status?: string;
};

export const v3InsightsItemsListingQualityItemsResponseSchema: Schema<V3InsightsItemsListingQualityItemsResponse> =
  s.object<V3InsightsItemsListingQualityItemsResponse>({
    nextCursor: s.optional(s.string()),
    totalItems: s.optional(s.string()),
    payload: s.optional(s.array(s.lazy(() => payload11Schema))),
    status: s.optional(s.string()),
  });
