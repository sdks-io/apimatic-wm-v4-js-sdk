import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the carrier configurations used for shipping, like carrier name and carrier service. */
export type Carrier20 = {
  /**
   * Name of the carrier to use for shipping. <br><b style='color:green;'>Market availability:
   * US</span></b>
   */
  carrierName?: string;
  /**
   * Defines the carrier configurations used for shipping, like carrier name and carrier service.
   * <br><b style='color:green;'>Market availability: US</span></b>
   */
  carrierService?: string;
};

export const carrier20Schema: Schema<Carrier20> = s.object<Carrier20>({
  carrierName: s.optional(s.string()),
  carrierService: s.optional(s.string()),
});
