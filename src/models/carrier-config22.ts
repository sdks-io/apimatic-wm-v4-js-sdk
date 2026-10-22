import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrier19Schema, type Carrier19 } from "./carrier19.js";
import { configuration18Schema, type Configuration18 } from "./configuration18.js";

/**
 * Defines the carrier configurations used for shipping, like carrier details and their
 * corresponding region coverage..
 */
export type CarrierConfig22 = {
  /**
   * Defines the carrier configurations used for shipping, like carrier details and their
   * corresponding region coverage. <br><b style='color:green;'>Market availability: US</span></b>
   */
  configurations?: Configuration18[];
  /**
   * Defines the carrier configurations used for shipping, like carrier name and carrier service.
   * <br><b style='color:green;'>Market availability: US</span></b>
   */
  carriers?: Carrier19[];
};

export const carrierConfig22Schema: Schema<CarrierConfig22> = s.object<CarrierConfig22>({
  configurations: s.optional(s.array(s.lazy(() => configuration18Schema))),
  carriers: s.optional(s.array(s.lazy(() => carrier19Schema))),
});
