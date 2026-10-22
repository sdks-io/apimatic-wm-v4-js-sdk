import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipNodeConfig5Schema, type ShipNodeConfig5 } from "./ship-node-config5.js";

/** Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b> */
export type SimplifiedShippingSettings6 = {
  /**
   * Comprises a list of all fulfillment center IDs along with their respective configurations.
   * <br><b style='color:green;'>Market availability: US</span></b>
   */
  shipNodeConfigs?: ShipNodeConfig5[];
};

export const simplifiedShippingSettings6Schema: Schema<SimplifiedShippingSettings6> =
  s.object<SimplifiedShippingSettings6>({
    shipNodeConfigs: s.optional(s.array(s.lazy(() => shipNodeConfig5Schema))),
  });
