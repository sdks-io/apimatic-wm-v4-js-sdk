import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemIdentifierType = {
  sku?: string;
  offerId?: string;
  itemId?: string;
  wpid?: string;
  productType?: string;
};

export const itemIdentifierTypeSchema: Schema<ItemIdentifierType> = s.object<ItemIdentifierType>({
  sku: s.optional(s.string()),
  offerId: s.optional(s.string()),
  itemId: s.optional(s.string()),
  wpid: s.optional(s.string()),
  productType: s.optional(s.string()),
});
