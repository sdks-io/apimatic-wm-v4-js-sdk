import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemDetailsSchema, type ItemDetails } from "./item-details.js";

/** Information related to the item recommendations. */
export type ItemRecommendationPayload = {
  /** Unique identifier for the recommended item. */
  itemRecommendationUniqueId?: string;
  /** Details of the recommended item. */
  itemDetails?: ItemDetails;
};

export const itemRecommendationPayloadSchema: Schema<ItemRecommendationPayload> =
  s.object<ItemRecommendationPayload>({
    itemRecommendationUniqueId: s.optional(s.string()),
    itemDetails: s.optional(s.lazy(() => itemDetailsSchema)),
  });
