import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies the tier for each criterion.<br><b style='color:green;'>Market availability: US |
 * CA</b>
 */
export type CriteriaTier = {
  /**
   * Specifies the eligible tier based on number of orders.<br><b style='color:green;'>Market
   * availability: US | CA</b>
   */
  orders?: string;
  /**
   * Specifies the eligible tier based on the number of active days.<br><b
   * style='color:green;'>Market availability: US | CA</b>
   */
  activeDays?: string;
  /**
   * Specifies the eligible tier based on the OTD rate.<br><b style='color:green;'>Market
   * availability: US | CA</b>
   */
  onTimeDeliveryRate?: string;
  /**
   * Specifies the eligible tier based on the cancellation rate.<br><b style='color:green;'>Market
   * availability: US | CA</b>
   */
  cancellationRate?: string;
  /**
   * Specifies the eligible tier based on the seller response.<br><b style='color:green;'>Market
   * availability: US | CA</b>
   */
  sellerResponseRate?: string;
  /**
   * Specifies the eligible tier based on shipping score<br><b style='color:green;'>Market
   * availability: US only</b>
   */
  shippingScore?: string;
  /**
   * Specifies the eligible tier based on the content score.<br><b style='color:green;'>Market
   * availability: US | CA</b>
   */
  contentScore?: string;
  /**
   * Specifies the eligible tier based on the price meet or beat score.<br><b
   * style='color:green;'>Market availability: US | CA</b>
   */
  priceMbScore?: string;
  /**
   * Specifies the difference between the promised and the actual delivery dates.<br><b
   * style='color:green;'>Market availability: CA only</b>
   */
  promiseAccuracy?: number;
};

export const criteriaTierSchema: Schema<CriteriaTier> = s.object<CriteriaTier>({
  orders: s.optional(s.string()),
  activeDays: s.optional(s.string()),
  onTimeDeliveryRate: s.optional(s.string()),
  cancellationRate: s.optional(s.string()),
  sellerResponseRate: s.optional(s.string()),
  shippingScore: s.optional(s.string()),
  contentScore: s.optional(s.string()),
  priceMbScore: s.optional(s.string()),
  promiseAccuracy: s.optional(s.float64()),
});
