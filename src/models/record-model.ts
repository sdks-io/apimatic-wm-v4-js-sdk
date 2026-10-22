import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemDetails1Schema, type ItemDetails1 } from "./item-details1.js";

/** Information related to the item recommendations. */
export type RecordModel = {
  /** Unique identifier for the recommended item. */
  itemRecommendationUniqueId?: string;
  /** Details of the recommended item. */
  itemDetails?: ItemDetails1;
};

export const recordModelSchema: Schema<RecordModel> = s.object<RecordModel>({
  itemRecommendationUniqueId: s.optional(s.string()),
  itemDetails: s.optional(s.lazy(() => itemDetails1Schema)),
});
