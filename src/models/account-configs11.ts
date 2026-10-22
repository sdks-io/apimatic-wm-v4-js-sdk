import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierConfig22Schema, type CarrierConfig22 } from "./carrier-config22.js";
import { shippingPriority7Schema, type ShippingPriority7 } from "./shipping-priority7.js";

/**
 * Account configuration to be set for a seller, comprising of Carrier configurations and Region
 * configurations. <br><b style='color:green;'>Market availability: US</span></b>
 */
export type AccountConfigs11 = {
  /**
   * Shipping priority will help system decide the carrier service for fulfillment in case there are
   * multiple shipping options available for customers with different carrier services in terms of
   * shipping cost and speed. <br><b style='color:green;'>Market availability: US</span></b>
   */
  shippingPriority?: ShippingPriority7;
  /**
   * Flag used to migrate/not migrate all the eligible offers for a seller. <br><b
   * style='color:green;'>Market availability: US</span></b>
   */
  migrateEligibleOffers?: boolean;
  /**
   * Defines the carrier configurations used for shipping, like carrier details and their
   * corresponding region coverage. <br><b style='color:green;'>Market availability: US</span></b>
   */
  carrierConfigs?: CarrierConfig22[];
};

export const accountConfigs11Schema: Schema<AccountConfigs11> = s.object<AccountConfigs11>({
  shippingPriority: s.optional(s.lazy(() => shippingPriority7Schema)),
  migrateEligibleOffers: s.optional(s.boolean()),
  carrierConfigs: s.optional(s.array(s.lazy(() => carrierConfig22Schema))),
});
