import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierConfig17Schema, type CarrierConfig17 } from "./carrier-config17.js";

/** Comprises a list of all fulfillment center IDs along with their respective configurations. */
export type ShipNodeConfig6 = {
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
  carrierConfigs?: CarrierConfig17[];
};

export const shipNodeConfig6Schema: Schema<ShipNodeConfig6> = s.object<ShipNodeConfig6>({
  shipNodes: s.optional(s.array(s.string())),
  isOverridden: s.optional(s.boolean()),
  carrierConfigs: s.optional(s.array(s.lazy(() => carrierConfig17Schema))),
});
