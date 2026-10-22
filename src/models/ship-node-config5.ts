import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierConfig16Schema, type CarrierConfig16 } from "./carrier-config16.js";

/** Comprises a list of all fulfillment center IDs along with their respective configurations. */
export type ShipNodeConfig5 = {
  /**
   * List of Fulfillment Center Ids which are used as shipping nodes. <br><b
   * style='color:green;'>Market availability: US</span></b>
   */
  shipNodes?: string[];
  /**
   * Flag denoting if the Fulfillment Center config settings are overriding account level settings.
   * <br><b style='color:green;'>Market availability: US</span></b>
   */
  isOverridden?: boolean;
  /**
   * List of Fulfillment Center Ids which are used as shipping nodes. <br><b
   * style='color:green;'>Market availability: US</span></b>
   */
  carrierConfigs?: CarrierConfig16[];
};

export const shipNodeConfig5Schema: Schema<ShipNodeConfig5> = s.object<ShipNodeConfig5>({
  shipNodes: s.optional(s.array(s.string())),
  isOverridden: s.optional(s.boolean()),
  carrierConfigs: s.optional(s.array(s.lazy(() => carrierConfig16Schema))),
});
