import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrier20Schema, type Carrier20 } from "./carrier20.js";
import { configuration20Schema, type Configuration20 } from "./configuration20.js";

/** List of Fulfillment Center Ids which are used as shipping nodes. */
export type CarrierConfig18 = {
  /**
   * Indicates whether this configuration is set as the default for the fulfillment center. <br><b
   * style='color:green;'>Market availability: US</span></b>
   */
  isDefault?: boolean;
  /**
   * Defines the carrier configurations used for shipping, like carrier details and their
   * corresponding region coverage.. <br><b style='color:green;'>Market availability: US</span></b>
   */
  configurations?: Configuration20[];
  /**
   * Defines the carrier configurations used for shipping, like carrier name and carrier service.
   * <br><b style='color:green;'>Market availability: US</span></b>
   */
  carriers?: Carrier20[];
};

export const carrierConfig18Schema: Schema<CarrierConfig18> = s.object<CarrierConfig18>({
  isDefault: s.optional(s.boolean()),
  configurations: s.optional(s.array(s.lazy(() => configuration20Schema))),
  carriers: s.optional(s.array(s.lazy(() => carrier20Schema))),
});
