import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Buyer contact projection. `buyerPhoneAnonymized` is masked to the last 4 digits (e.g.
 * `***-***-0100`); the unmasked phone number is never returned by the v4 API.
 */
export type BuyerInfo = {
  purchaseOrderId?: string;
  buyerName?: string;
  buyerEmail?: string;
  /** Phone with everything but the last four digits masked. */
  buyerPhoneAnonymized?: string;
};

export const buyerInfoSchema: Schema<BuyerInfo> = s.object<BuyerInfo>({
  purchaseOrderId: s.optional(s.string()),
  buyerName: s.optional(s.string()),
  buyerEmail: s.optional(s.string()),
  buyerPhoneAnonymized: s.optional(s.string()),
});
