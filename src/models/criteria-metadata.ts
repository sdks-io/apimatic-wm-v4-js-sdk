import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies the metadata value for each criterion<br><b style='color:green;'>Market availability:
 * US only</b>
 */
export type CriteriaMetadata = {
  /**
   * Specifies number of orders received in the given timeframe.<br><b style='color:green;'>Market
   * availability: US | CA</b>
   */
  orders?: number;
  /**
   * Specifies the number of days the seller has been active on the platform.<br><b
   * style='color:green;'>Market availability: US | CA</b>
   */
  activeDays?: number;
  /**
   * Specifies the on-time delivery rate within the given timeframe.<br><b
   * style='color:green;'>Market availability: US | CA</b>
   */
  onTimeDeliveryRate?: number;
  /**
   * Specifies the cancellation rate within the given timeframe.<br><b style='color:green;'>Market
   * availability: US | CA</b>
   */
  cancellationRate?: number;
  /**
   * Specifies the seller's response rate.<br><b style='color:green;'>Market availability: US |
   * CA</b>
   */
  sellerResponseRate?: number;
  /**
   * Specifies the seller's shipping score.<br><b style='color:green;'>Market availability: US
   * only</b>
   */
  shippingScore?: number;
  /**
   * Specifies the seller's content score.<br><b style='color:green;'>Market availability: US |
   * CA</b>
   */
  contentScore?: number;
  /**
   * Specifies the seller's meet or beat score.<br><b style='color:green;'>Market availability: US |
   * CA</b>
   */
  priceMbScore?: number;
  /**
   * Specifies the difference between the promised and actual delivery dates.<br><b
   * style='color:green;'>Market availability: CA only</b>
   */
  promiseAccuracy?: number;
};

export const criteriaMetadataSchema: Schema<CriteriaMetadata> = s.object<CriteriaMetadata>({
  orders: s.optional(s.float64()),
  activeDays: s.optional(s.float64()),
  onTimeDeliveryRate: s.optional(s.float64()),
  cancellationRate: s.optional(s.float64()),
  sellerResponseRate: s.optional(s.float64()),
  shippingScore: s.optional(s.float64()),
  contentScore: s.optional(s.float64()),
  priceMbScore: s.optional(s.float64()),
  promiseAccuracy: s.optional(s.float64()),
});
