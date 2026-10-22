import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrier18Schema, type Carrier18 } from "./carrier18.js";
import { configuration18Schema, type Configuration18 } from "./configuration18.js";

/** List of Fulfillment Center Ids which are used as shipping nodes. */
export type CarrierConfig16 = {
  /**
   * Indicates whether this configuration is set as the default for the fulfillment center. <br><b
   * style='color:green;'>Market availability: US</span></b>
   */
  isDefault?: boolean;
  /**
   * Defines the carrier configurations used for shipping, like carrier details and their
   * corresponding region coverage. <br><b style='color:green;'>Market availability: US</span></b>
   */
  configurations?: Configuration18[];
  /**
   * Defines the carrier configurations used for shipping, like carrier name and carrier service.
   * <br><b style='color:green;'>Market availability: US</span></b>
   */
  carriers?: Carrier18[];
};

export const carrierConfig16Schema: Schema<CarrierConfig16> = s.object<CarrierConfig16>({
  isDefault: s.optional(s.boolean()),
  configurations: s.optional(s.array(s.lazy(() => configuration18Schema))),
  carriers: s.optional(s.array(s.lazy(() => carrier18Schema))),
});
