import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shippingConfigurationSchema, type ShippingConfiguration } from "./shipping-configuration.js";

/** The type of shipping configuration to migrate. */
export type Programs2 = {
  shippingConfiguration?: ShippingConfiguration;
};

export const programs2Schema: Schema<Programs2> = s.object<Programs2>({
  shippingConfiguration: s.optional(s.lazy(() => shippingConfigurationSchema)),
});
