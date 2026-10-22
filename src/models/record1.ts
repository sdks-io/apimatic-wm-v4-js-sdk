import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemDetails2Schema, type ItemDetails2 } from "./item-details2.js";

/** Information related to the item recommendations. */
export type Record1 = {
  /** Unique identifier for the recommended item. */
  itemRecommendationUniqueId?: string;
  /** Details of the recommended item. */
  itemDetails?: ItemDetails2;
};

export const record1Schema: Schema<Record1> = s.object<Record1>({
  itemRecommendationUniqueId: s.optional(s.string()),
  itemDetails: s.optional(s.lazy(() => itemDetails2Schema)),
});
