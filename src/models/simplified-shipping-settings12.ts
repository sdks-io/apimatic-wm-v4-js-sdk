import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountConfigs11Schema, type AccountConfigs11 } from "./account-configs11.js";
import { shipNodeConfig6Schema, type ShipNodeConfig6 } from "./ship-node-config6.js";

/** Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b> */
export type SimplifiedShippingSettings12 = {
  /**
   * Account configuration to be set for a seller, comprising of Carrier configurations and Region
   * configurations. <br><b style='color:green;'>Market availability: US</span></b>
   */
  accountConfigs?: AccountConfigs11;
  /**
   * Comprises a list of all fulfillment center IDs along with their respective configurations.
   * <br><b style='color:green;'>Market availability: US</span></b>
   */
  shipNodeConfigs?: ShipNodeConfig6[];
};

export const simplifiedShippingSettings12Schema: Schema<SimplifiedShippingSettings12> =
  s.object<SimplifiedShippingSettings12>({
    accountConfigs: s.optional(s.lazy(() => accountConfigs11Schema)),
    shipNodeConfigs: s.optional(s.array(s.lazy(() => shipNodeConfig6Schema))),
  });
