import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Items status included in the response list. */
export type Issues = {
  /** ProductId of the Item */
  productId?: string;
  /** ProductIdType of the item */
  productIdType?: string;
};

export const issuesSchema: Schema<Issues> = s.object<Issues>({
  productId: s.optional(s.string()),
  productIdType: s.optional(s.string()),
});
