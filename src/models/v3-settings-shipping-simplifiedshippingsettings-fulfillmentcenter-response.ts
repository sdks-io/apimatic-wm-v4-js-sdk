import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedShippingSettings7Schema,
  type SimplifiedShippingSettings7,
} from "./simplified-shipping-settings7.js";

export type V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse = {
  /**
   * Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b>
   */
  simplifiedShippingSettings?: SimplifiedShippingSettings7;
};

export const v3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponseSchema: Schema<V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse> =
  s.object<V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterResponse>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedShippingSettings7Schema)),
  });
