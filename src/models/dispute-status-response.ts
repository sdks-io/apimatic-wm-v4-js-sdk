import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Items status included in the list. */
export type DisputeStatusResponse = {
  /** The Walmart Product ID assigned by Walmart to the item when it is listed on Walmart.com. */
  productId?: string;
  /**
   * A seller-specified, alphanumeric string uniquely identifying the Product Type. Example:
   * 'Diamond'.
   */
  productIdType?: string;
  /** Status of the item. */
  status?: string;
  /** Date when an action was taken on the item. */
  lastUpdatedDate?: string;
};

export const disputeStatusResponseSchema: Schema<DisputeStatusResponse> = s.object<DisputeStatusResponse>({
  productId: s.optional(s.string()),
  productIdType: s.optional(s.string()),
  status: s.optional(s.string()),
  lastUpdatedDate: s.optional(s.string()),
});
