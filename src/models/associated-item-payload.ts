import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mediaType1Schema, type MediaType1 } from "./media-type1.js";

export type AssociatedItemPayload = {
  /** Walmart-generated item identifier. */
  itemId?: string;
  /** Global Trade Item Number (GTIN-14) for the linked item. */
  gtin?: string;
  /** Timestamp of the most recent item-asset linkage update, in epoch milliseconds. */
  updatedDtm?: string;
  /** Media type as recorded for this specific item linkage. */
  mediaType?: MediaType1;
  /** Locale for the item-asset association (BCP 47 format with underscore separator). */
  locale?: string;
  /** Publication status of this asset for the linked item. */
  status?: string;
};

export const associatedItemPayloadSchema: Schema<AssociatedItemPayload> = s.object<AssociatedItemPayload>({
  itemId: s.optional(s.string()),
  gtin: s.optional(s.string()),
  updatedDtm: s.optional(s.string()),
  mediaType: s.optional(s.lazy(() => mediaType1Schema)),
  locale: s.optional(s.string()),
  status: s.optional(s.string()),
});
