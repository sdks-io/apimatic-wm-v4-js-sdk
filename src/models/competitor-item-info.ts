import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price1Schema, type Price1 } from "./price1.js";

/** Competitor's item information */
export type CompetitorItemInfo = {
  /** Competitor item id. */
  itemId?: string;
  /** Competitor item url. */
  url?: string;
  /** Competitor's item shipping price details of the item recommendation. */
  itemPrice?: Price1;
  /** Competitor's item shipping price details of the item recommendation. */
  shippingPrice?: Price1;
};

export const competitorItemInfoSchema: Schema<CompetitorItemInfo> = s.object<CompetitorItemInfo>({
  itemId: s.optional(s.string()),
  url: s.optional(s.string()),
  itemPrice: s.optional(s.lazy(() => price1Schema)),
  shippingPrice: s.optional(s.lazy(() => price1Schema)),
});
