import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShippingConfiguration = {
  /**
   * Type of shipping configuration to where current SKU should be migrated to. Eligible values for
   * the field are: Simplified Shipping Settings & Manual Template
   */
  itemShippingConfiguration?: string;
};

export const shippingConfigurationSchema: Schema<ShippingConfiguration> = s.object<ShippingConfiguration>({
  itemShippingConfiguration: s.optional(s.string()),
});
