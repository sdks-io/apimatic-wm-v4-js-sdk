import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Seller accountable drivers, which impacting the seller response rate */
export type SellerAccountableSrrDrivers = {
  /** Seller response rate for miscellaneous customer enquires */
  miscellaneousRate?: number;
  /** Seller response rate for customer enquires regarding cancellations */
  cancellationRate?: number;
  /** Seller response rate for customer feedback */
  feedbackRate?: number;
  /** Seller response rate for customer enquires regarding item issues */
  itemIssueRate?: number;
  /** Seller response rate for customer enquires regarding returns and refunds */
  returnsRefundsRate?: number;
  /** Seller response rate for customer enquires regarding order tracking */
  trackOrderRate?: number;
};

export const sellerAccountableSrrDriversSchema: Schema<SellerAccountableSrrDrivers> =
  s.object<SellerAccountableSrrDrivers>({
    miscellaneousRate: s.optional(s.float64()),
    cancellationRate: s.optional(s.float64()),
    feedbackRate: s.optional(s.float64()),
    itemIssueRate: s.optional(s.float64()),
    returnsRefundsRate: s.optional(s.float64()),
    trackOrderRate: s.optional(s.float64()),
  });
