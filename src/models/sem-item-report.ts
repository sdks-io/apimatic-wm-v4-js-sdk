import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semTrafficSchema, type SemTraffic } from "./sem-traffic.js";

/** List of items with performance data */
export type SemItemReport = {
  /** A unique ID which identifies the item. */
  itemId?: string;
  /** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
  sku?: string;
  /** Product ID of the item */
  productId?: string;
  /** A seller-specified, alphanumeric string uniquely identifying the product name. */
  productName?: string;
  /** Category of the item. */
  categoryName?: string;
  /** URL where the item can be viewed. */
  productUrl?: string;
  /** URL of the image representing the item. */
  productImageUrl?: string;
  /** Status of the item */
  status?: string;
  /** OLQ Score of the item */
  olqScore?: number;
  /** Offer Price */
  offerPrice?: number;
  /** Competitor Price */
  competitorPrice?: number;
  /** Google Price */
  googlePrice?: number;
  /** Performance data of the campaign */
  traffic?: SemTraffic;
};

export const semItemReportSchema: Schema<SemItemReport> = s.object<SemItemReport>({
  itemId: s.optional(s.string()),
  sku: s.optional(s.string()),
  productId: s.optional(s.string()),
  productName: s.optional(s.string()),
  categoryName: s.optional(s.string()),
  productUrl: s.optional(s.string()),
  productImageUrl: s.optional(s.string()),
  status: s.optional(s.string()),
  olqScore: s.optional(s.float64()),
  offerPrice: s.optional(s.float64()),
  competitorPrice: s.optional(s.float64()),
  googlePrice: s.optional(s.float64()),
  traffic: s.optional(s.lazy(() => semTrafficSchema)),
});
