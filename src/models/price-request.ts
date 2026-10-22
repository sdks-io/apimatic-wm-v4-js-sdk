import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Price range of the items. */
export type PriceRequest = {
  /** Minimum price of the item. */
  minimum?: number;
  /** Maximum price of the item. */
  maximum?: number;
};

export const priceRequestSchema: Schema<PriceRequest> = s.object<PriceRequest>({
  minimum: s.optional(s.float64()),
  maximum: s.optional(s.float64()),
});
