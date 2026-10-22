import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipNodeConfig6Schema, type ShipNodeConfig6 } from "./ship-node-config6.js";

/** Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b> */
export type SimplifiedShippingSettings7 = {
  /**
   * Comprises a list of all fulfillment center IDs along with their respective configurations.
   * <br><b style='color:green;'>Market availability: US</span></b>
   */
  shipNodeConfigs?: ShipNodeConfig6[];
};

export const simplifiedShippingSettings7Schema: Schema<SimplifiedShippingSettings7> =
  s.object<SimplifiedShippingSettings7>({
    shipNodeConfigs: s.optional(s.array(s.lazy(() => shipNodeConfig6Schema))),
  });
