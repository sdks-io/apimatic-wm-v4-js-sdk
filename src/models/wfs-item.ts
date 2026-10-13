import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { wfsInventoryDetailsSchema, type WfsInventoryDetails } from "./wfs-inventory-details.js";
import { wfsInventoryInsightsSchema, type WfsInventoryInsights } from "./wfs-inventory-insights.js";

export type WfsItem = {
  /** Seller-assigned SKU identifier. */
  sellerSku: string;
  /** Walmart internal item ID. */
  walmartItemId?: string;
  /** Global Trade Item Number (14-digit). */
  gtin?: string;
  /** Walmart offer ID. */
  offerId?: string;
  /** Item title as listed on Walmart.com. */
  productName?: string | null;
  /** Item brand name. */
  brand?: string;
  /** Item condition. */
  condition?: Condition;
  /**
   * Timestamp of the most recent inventory update for this item. Null if no update timestamp is
   * available.
   */
  lastUpdated?: Date | null;
  inventoryDetails?: WfsInventoryDetails;
  /** Demand intelligence and replenishment recommendations (WFS-only — no SP-API equivalent) */
  inventoryInsights?: WfsInventoryInsights;
};

export const wfsItemSchema: Schema<WfsItem> = s.object<WfsItem>({
  sellerSku: s.string(),
  walmartItemId: s.optional(s.string()),
  gtin: s.optional(s.string()),
  offerId: s.optional(s.string()),
  productName: s.optionalNullable(s.string()),
  brand: s.optional(s.string()),
  condition: s.optional(s.lazy(() => conditionSchema)),
  lastUpdated: s.optionalNullable(s.dateTime()),
  inventoryDetails: s.optional(s.lazy(() => wfsInventoryDetailsSchema)),
  inventoryInsights: s.optional(s.lazy(() => wfsInventoryInsightsSchema)),
});
