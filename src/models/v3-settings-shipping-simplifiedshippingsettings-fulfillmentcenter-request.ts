import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedShippingSettings6Schema,
  type SimplifiedShippingSettings6,
} from "./simplified-shipping-settings6.js";

export type V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequest = {
  /**
   * Simplified Shipping Settings. <br><b style='color:green;'>Market availability: US</span></b>
   */
  simplifiedShippingSettings?: SimplifiedShippingSettings6;
};

export const v3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequestSchema: Schema<V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequest> =
  s.object<V3SettingsShippingSimplifiedshippingsettingsFulfillmentcenterRequest>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedShippingSettings6Schema)),
  });
