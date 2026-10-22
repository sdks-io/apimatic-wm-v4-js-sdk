import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierConfig21Schema, type CarrierConfig21 } from "./carrier-config21.js";
import { shippingPriority7Schema, type ShippingPriority7 } from "./shipping-priority7.js";

/**
 * Account configuration to be set for a seller, comprising of Carrier configurations and Region
 * configurations. <br><b style='color:green;'>Market availability: US</span></b>
 */
export type AccountConfigs10 = {
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
  carrierConfigs?: CarrierConfig21[];
};

export const accountConfigs10Schema: Schema<AccountConfigs10> = s.object<AccountConfigs10>({
  shippingPriority: s.optional(s.lazy(() => shippingPriority7Schema)),
  migrateEligibleOffers: s.optional(s.boolean()),
  carrierConfigs: s.optional(s.array(s.lazy(() => carrierConfig21Schema))),
});
