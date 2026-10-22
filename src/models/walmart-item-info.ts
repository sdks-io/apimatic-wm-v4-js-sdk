import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price1Schema, type Price1 } from "./price1.js";

/** Walmart's item information */
export type WalmartItemInfo = {
  /** Walmart item ID. */
  itemId?: string;
  /** Walmart item URL. */
  url?: string;
  /** Walmart fulfilment service indicator. */
  wfsIndicator?: boolean;
  /** Competitor's item shipping price details of the item recommendation. */
  itemPrice?: Price1;
  /** Competitor's item shipping price details of the item recommendation. */
  shippingPrice?: Price1;
};

export const walmartItemInfoSchema: Schema<WalmartItemInfo> = s.object<WalmartItemInfo>({
  itemId: s.optional(s.string()),
  url: s.optional(s.string()),
  wfsIndicator: s.optional(s.boolean()),
  itemPrice: s.optional(s.lazy(() => price1Schema)),
  shippingPrice: s.optional(s.lazy(() => price1Schema)),
});
