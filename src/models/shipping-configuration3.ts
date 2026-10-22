import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines the shipping configuration settings for the SKU. <br><b style='color:green;'>Market
 * availability: US</span></b>
 */
export type ShippingConfiguration3 = {
  /**
   * Specifies the type of shipping configuration to which the current SKU should be migrated.
   * Eligible values for this field are: Simplified Shipping Settings and Manual Template. <br><b
   * style='color:green;'>Market availability: US</span></b>
   */
  itemShippingConfiguration?: string;
};

export const shippingConfiguration3Schema: Schema<ShippingConfiguration3> = s.object<ShippingConfiguration3>({
  itemShippingConfiguration: s.optional(s.string()),
});
