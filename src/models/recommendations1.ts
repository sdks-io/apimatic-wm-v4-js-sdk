import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Recommendations on how to increase chances of Pro Seller Badge eligibility<br><b
 * style='color:green;'>Market availability: MX only</b>
 */
export type Recommendations1 = {
  /**
   * Recommendations on reducing the delivery defect rate<br><b style='color:green;'>Market
   * availability: MX only</b>
   */
  deliveryDefectRate?: string;
  /**
   * Recommendations on reducing the Cancellation rate<br><b style='color:green;'>Market
   * availability: MX only</b>
   */
  cancellationRate?: string;
  /**
   * Recommendations on reducing the Actual vs Promised Delivery Gap<br><b
   * style='color:green;'>Market availability: MX only</b>
   */
  actualVsPromisedGap?: string;
};

export const recommendations1Schema: Schema<Recommendations1> = s.object<Recommendations1>({
  deliveryDefectRate: s.optional(s.string()),
  cancellationRate: s.optional(s.string()),
  actualVsPromisedGap: s.optional(s.string()),
});
