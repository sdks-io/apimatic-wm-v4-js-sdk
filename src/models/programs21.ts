import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shippingConfiguration3Schema, type ShippingConfiguration3 } from "./shipping-configuration3.js";

/**
 * The type of shipping configuration to migrate. <br><b style='color:green;'>Market availability:
 * US</span></b>
 */
export type Programs21 = {
  /**
   * Defines the shipping configuration settings for the SKU. <br><b style='color:green;'>Market
   * availability: US</span></b>
   */
  shippingConfiguration?: ShippingConfiguration3;
};

export const programs21Schema: Schema<Programs21> = s.object<Programs21>({
  shippingConfiguration: s.optional(s.lazy(() => shippingConfiguration3Schema)),
});
