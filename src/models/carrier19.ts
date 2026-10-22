import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the carrier configurations used for shipping, like carrier name and carrier service. */
export type Carrier19 = {
  /**
   * Name of the carrier to use for shipping. <br><b style='color:green;'>Market availability:
   * US</span></b>
   */
  carrierName?: string;
  /**
   * Service name of the carrier to use for shipping. <br><b style='color:green;'>Market
   * availability: US</span></b>
   */
  carrierService?: string;
};

export const carrier19Schema: Schema<Carrier19> = s.object<Carrier19>({
  carrierName: s.optional(s.string()),
  carrierService: s.optional(s.string()),
});
