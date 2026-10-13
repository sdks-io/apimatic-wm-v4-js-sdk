import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The number of offer listings with the specified condition. */
export type OfferListingCountType = {
  /** The number of offer listings. */
  count: number;
  /** The condition of the item. */
  condition: string;
};

export const offerListingCountTypeSchema: Schema<OfferListingCountType> = s.object<OfferListingCountType>({
  count: s.int(),
  condition: s.string(),
  _keysMap: {
    count: "Count",
  },
});
