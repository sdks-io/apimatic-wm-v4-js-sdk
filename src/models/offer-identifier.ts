import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentType1Schema, type FulfillmentType1 } from "./fulfillment-type1.js";

/** Identifies an offer. */
export type OfferIdentifier = {
  /** A marketplace identifier. */
  marketplaceId?: string;
  /** The seller identifier. */
  sellerId?: string;
  /** The seller stock keeping unit (SKU) of the item. */
  sku?: string;
  /** The fulfillment type for the offer. Possible values: WFS, SELLER. */
  fulfillmentType?: FulfillmentType1;
};

export const offerIdentifierSchema: Schema<OfferIdentifier> = s.object<OfferIdentifier>({
  marketplaceId: s.optional(s.string()),
  sellerId: s.optional(s.string()),
  sku: s.optional(s.string()),
  fulfillmentType: s.optional(s.lazy(() => fulfillmentType1Schema)),
});
