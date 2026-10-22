import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * chargeAmount.<br><b style='color:green;'>Market availability: MX | CA |CL</b>, Refund amount
 * details for the return order line.<br><b style='color:green;'>Market availability: MX | CA |
 * CL</b>, refundAmount.<br><b style='color:green;'>Market availability: MX</b>, taxName.<br><b
 * style='color:green;'>Market availability: MX</b>, unitPrice.<br><b style='color:green;'>Market
 * availability: MX</b>
 */
export type Gmv = {
  amount?: string;
  currency?: string;
};

export const gmvSchema: Schema<Gmv> = s.object<Gmv>({
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
});
